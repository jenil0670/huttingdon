$SERVICE_ROLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwbGJoZmZheW5seG16a25vbGp5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4ODE3NDIyOCwiZXhwIjoyMTAzNzUwMjI4fQ.BMBtbG4ah3mJp7de2ZKhSX6iyenh2Z9qv7loAZeWDVg"
$SUPABASE_URL = "https://lplbhffaynlxmzknoljy.supabase.co"

$headers = @{
    "apikey"        = $SERVICE_ROLE_KEY
    "Authorization" = "Bearer $SERVICE_ROLE_KEY"
    "Content-Type"  = "application/json"
    "Prefer"        = "return=representation"
}

# We insert dummy rows to auto-create tables is not possible in Supabase
# Instead, use the SQL HTTP endpoint (available in Supabase via pg_net or custom RPC)
# Supabase exposes a direct SQL endpoint at /rest/v1/rpc/ if we create a helper function
# 
# Best approach without management API: Insert into each table via REST (tables must pre-exist)
# So we'll call Supabase's built-in SQL endpoint via direct pg connection using Invoke-RestMethod

# Supabase has a /pg endpoint accessible with service_role for DDL
$SQL_ENDPOINT = "$SUPABASE_URL/rest/v1/rpc"

# Try direct SQL via Supabase's internal pg REST
function Try-Insert($table, $payload) {
    $url = "$SUPABASE_URL/rest/v1/$table"
    $body = $payload | ConvertTo-Json -Depth 5
    try {
        $response = Invoke-RestMethod -Uri $url -Method POST -Headers $headers -Body $body
        Write-Host "[OK] Inserted test row into $table" -ForegroundColor Green
        return $true
    } catch {
        $status = $_.Exception.Response.StatusCode.value__
        $errMsg = $_.Exception.Message
        Write-Host "[INFO] $table -> Status $status : $errMsg" -ForegroundColor Yellow
        return $false
    }
}

Write-Host "Testing direct REST inserts to auto-detect existing tables..." -ForegroundColor Cyan

$consultationTest = @{
    name = "TEST_INIT"
    email = "init@test.com"
    company_name = "Test Co"
    website = "https://test.com"
    objective = "awareness"
    timeline = "exploring"
    details = "Table initialization test"
    page_source = "setup_script"
}

$creatorTest = @{
    full_name = "TEST_INIT"
    email = "init@creator-test.com"
    platform = "youtube"
    handle = "@test"
    category = "tech"
    audience_size = "10k_50k"
    portfolio_url = "https://test.com"
    page_source = "setup_script"
}

$newsletterTest = @{
    email = "init-newsletter@test.com"
    page_source = "setup_script"
}

$r1 = Try-Insert "consultations" $consultationTest
$r2 = Try-Insert "creator_applications" $creatorTest
$r3 = Try-Insert "newsletter_subscribers" $newsletterTest

Write-Host ""
if ($r1 -and $r2 -and $r3) {
    Write-Host "All tables exist and are accepting data!" -ForegroundColor Green
} else {
    Write-Host "Some tables do not exist yet." -ForegroundColor Yellow
    Write-Host "Tables need to be created manually in Supabase Dashboard > SQL Editor." -ForegroundColor Yellow
}
