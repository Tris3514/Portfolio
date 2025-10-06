# GitHub Pages Deployment Check

## Step-by-Step Verification

### 1. Repository Settings
- [ ] Repository is **public** (required for free GitHub Pages)
- [ ] Go to Settings → Pages
- [ ] Source is set to **"GitHub Actions"** (not "Deploy from a branch")

### 2. GitHub Actions
- [ ] Go to Actions tab
- [ ] Look for "Deploy to GitHub Pages" workflow
- [ ] Should show green checkmark (successful)
- [ ] If failed, click "Re-run all jobs"

### 3. Check Your URL
Your site should be at one of these URLs:
- `https://YOUR_USERNAME.github.io/portfolio` (if repo is named "portfolio")
- `https://YOUR_USERNAME.github.io` (if repo is named "YOUR_USERNAME.github.io")

### 4. Common Issues & Solutions

**Issue: "There isn't a GitHub Pages site here"**
- **Solution**: Enable GitHub Pages in Settings → Pages → Source: "GitHub Actions"

**Issue: GitHub Actions failed**
- **Solution**: Check the Actions tab for error messages, then re-run

**Issue: Wrong URL**
- **Solution**: Make sure you're using the correct URL based on your repository name

### 5. Manual Deployment (If Needed)
If GitHub Actions isn't working, you can deploy manually:

```bash
# Build the site
npm run deploy

# The built files will be in the 'out' folder
# You can manually upload these to GitHub Pages
```

### 6. Still Having Issues?
- Check that your repository is public
- Verify GitHub Pages is enabled in repository settings
- Make sure the workflow file is in `.github/workflows/deploy.yml`
- Check the Actions tab for any error messages
