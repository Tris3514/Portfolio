# Portfolio Deployment Script
# This script builds the project and deploys to GitHub Pages

Write-Host "🚀 Starting Portfolio Deployment..." -ForegroundColor Green

# Build the project
Write-Host "📦 Building Next.js project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}

# Switch to gh-pages branch
Write-Host "🔄 Switching to gh-pages branch..." -ForegroundColor Yellow
git checkout gh-pages

# Copy built files to root
Write-Host "📋 Copying built files..." -ForegroundColor Yellow
Copy-Item -Path "out\*" -Destination "." -Recurse -Force

# Add and commit changes
Write-Host "💾 Committing changes..." -ForegroundColor Yellow
git add .
git commit -m "Deploy latest build to GitHub Pages - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"

# Push to gh-pages
Write-Host "🚀 Pushing to GitHub Pages..." -ForegroundColor Yellow
git push origin gh-pages

# Switch back to main
Write-Host "🔄 Switching back to main branch..." -ForegroundColor Yellow
git checkout main

Write-Host "✅ Deployment complete!" -ForegroundColor Green
Write-Host "🌐 Your site is live at: https://tris3514.github.io/Portfolio/" -ForegroundColor Cyan
