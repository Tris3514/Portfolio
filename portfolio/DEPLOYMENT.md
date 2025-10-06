# GitHub Pages Deployment Guide

## Prerequisites
1. A GitHub repository for your portfolio
2. GitHub Pages enabled in your repository settings

## Setup Steps

### 1. Create GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `portfolio` (or your preferred name)
3. Make it public (required for free GitHub Pages)

### 2. Push Your Code
```bash
# Initialize git (if not already done)
git init

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Add all files
git add .

# Commit
git commit -m "Initial portfolio setup"

# Push to main branch
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### 4. Automatic Deployment
- The GitHub Actions workflow will automatically deploy when you push to the `main` branch
- Your site will be available at: `https://YOUR_USERNAME.github.io/portfolio`

## Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Update galleries and build
npm run deploy

# The built files will be in the `out` folder
# You can manually upload these to GitHub Pages
```

## Updating Your Portfolio

1. Make changes to your code
2. Add new images to gallery folders
3. Run `npm run update-gallery` or `npm run update-igaming-gallery` if needed
4. Commit and push:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```
5. GitHub Actions will automatically rebuild and deploy

## Troubleshooting

- **Images not showing**: Make sure images are in the correct `public/` folders
- **Gallery not updating**: Run the update scripts before deploying
- **Build fails**: Check that all dependencies are installed with `npm ci`

## Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file in the `public/` folder with your domain
2. Configure your domain's DNS to point to GitHub Pages
3. Enable custom domain in GitHub Pages settings
