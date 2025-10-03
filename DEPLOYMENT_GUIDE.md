# GitHub Pages Deployment Guide

## 🚀 Your Website is Ready!

The Glycopolymer-Lectin ML Platform has been successfully built and configured for GitHub Pages deployment.

## 📍 Website URL

Once deployed, your website will be available at:

```
https://YOUR_USERNAME.github.io/glycopolymer-ml-platform/
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## ✅ Configuration Complete

The following files have been created/configured for GitHub Pages:

### 1. **`.nojekyll`**
- Prevents GitHub from processing the site with Jekyll
- Ensures all files (including those starting with `_`) are served correctly

### 2. **`.github/workflows/deploy.yml`**
- GitHub Actions workflow for automatic deployment
- Triggers on push to `branch-1` or `main`
- Builds the React app and deploys to GitHub Pages

### 3. **`vite.config.js`**
- Updated with `base: '/glycopolymer-ml-platform/'`
- Ensures all asset paths work correctly on GitHub Pages

### 4. **`dist/` directory**
- Production build with optimized assets
- Ready for immediate deployment

## 🔧 GitHub Repository Settings

To enable GitHub Pages, follow these steps:

### Step 1: Go to Repository Settings
1. Navigate to your GitHub repository
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar

### Step 2: Configure GitHub Pages
1. Under **Source**, select:
   - **Source**: GitHub Actions (recommended)
   - OR **Deploy from a branch**: `branch-1` → `/root` or `/dist`

2. Click **Save**

### Step 3: Enable Workflow Permissions (if using GitHub Actions)
1. Go to **Settings** → **Actions** → **General**
2. Scroll to **Workflow permissions**
3. Select **Read and write permissions**
4. Check **Allow GitHub Actions to create and approve pull requests**
5. Click **Save**

## 🔄 Automatic Deployment

With GitHub Actions configured, your site will automatically rebuild and deploy when you:

- Push changes to `branch-1` or `main` branch
- Manually trigger the workflow from the Actions tab

## 📦 Manual Deployment (Alternative)

If you prefer manual deployment without GitHub Actions:

### Option 1: Deploy from `dist` folder
```bash
# Build the project
npm run build

# Commit the dist folder
git add dist -f
git commit -m "Add production build"
git push origin branch-1
```

Then in GitHub Settings → Pages:
- Source: Deploy from a branch
- Branch: `branch-1`
- Folder: `/dist`

### Option 2: Use `gh-pages` branch
```bash
# Install gh-pages package
npm install -D gh-pages

# Add deploy script to package.json
# "deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

Then in GitHub Settings → Pages:
- Source: Deploy from a branch
- Branch: `gh-pages`
- Folder: `/root`

## 🌐 Custom Domain (Optional)

To use a custom domain:

1. Create a `CNAME` file in the `public/` directory:
   ```
   yourdomain.com
   ```

2. Configure DNS records with your domain provider:
   - Add an `A` record pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - OR add a `CNAME` record pointing to: `YOUR_USERNAME.github.io`

3. In GitHub Settings → Pages:
   - Enter your custom domain
   - Check "Enforce HTTPS"

## 🔍 Troubleshooting

### Site not loading?
- Wait 2-5 minutes after first deployment
- Check GitHub Actions tab for build errors
- Verify GitHub Pages is enabled in Settings
- Clear browser cache and try incognito mode

### Assets not loading (404 errors)?
- Verify `base` path in `vite.config.js` matches your repository name
- Rebuild: `npm run build`
- Check that `.nojekyll` file exists

### GitHub Actions failing?
- Check workflow permissions in Settings → Actions
- Verify `pnpm` is available (workflow installs it)
- Check build logs in Actions tab for specific errors

### Wrong base path?
If your repository name is different, update `vite.config.js`:
```javascript
base: '/YOUR-REPO-NAME/',
```
Then rebuild and redeploy.

## 📊 Monitoring Deployment

### Check Build Status
1. Go to **Actions** tab in your repository
2. Click on the latest workflow run
3. View build and deployment logs

### View Live Site
Once deployed, the Actions workflow will show the deployment URL:
```
https://YOUR_USERNAME.github.io/glycopolymer-ml-platform/
```

## 🔄 Updating the Website

To update your website:

1. Make changes to your code
2. Commit and push to `branch-1`:
   ```bash
   git add .
   git commit -m "Update website content"
   git push origin branch-1
   ```
3. GitHub Actions will automatically rebuild and deploy
4. Wait 1-2 minutes for changes to appear

## 📱 Testing Locally

Before deploying, test the production build locally:

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

Visit `http://localhost:4173` to see how it will look on GitHub Pages.

## 🎯 Next Steps

1. ✅ Enable GitHub Pages in repository settings
2. ✅ Wait for automatic deployment (2-5 minutes)
3. ✅ Visit your live website
4. ✅ Share the URL with collaborators
5. ✅ Add the URL to your repository description
6. ✅ Include the URL in your README.md

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Deployment Best Practices](https://react.dev/learn/start-a-new-react-project#deploying-to-production)

## 🆘 Support

If you encounter issues:

1. Check the [GitHub Pages Status](https://www.githubstatus.com/)
2. Review build logs in GitHub Actions
3. Verify all configuration files are committed
4. Ensure repository is public (or you have GitHub Pro for private repos)

---

**Your website is ready to go live! 🎉**

Just enable GitHub Pages in your repository settings and your comprehensive glycopolymer-lectin ML platform will be accessible to the world.
