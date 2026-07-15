Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\edenk\Downloads\Happy\HappyTooth\public\images\happytooth-favicon.png"
$sizes = @(48, 96, 144, 180, 192)

foreach ($size in $sizes) {
    $src = [System.Drawing.Image]::FromFile($srcPath)
    $dest = New-Object System.Drawing.Bitmap($size, $size)
    $g = [System.Drawing.Graphics]::FromImage($dest)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($src, 0, 0, $size, $size)
    $outPath = "C:\Users\edenk\Downloads\Happy\HappyTooth\public\images\happytooth-favicon-${size}x${size}.png"
    $dest.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $dest.Dispose()
    $src.Dispose()
    Write-Output "Generated: $outPath"
}
