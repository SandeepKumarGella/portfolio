# Deployment Guide

## Step 1: Push to GitHub

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name it: `portfolio` (or any name you prefer)
5. Make it **Public** (required for free Vercel deployment)
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

### 2. Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
cd c:\Users\sande\Desktop\projects\portfolio

# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Note:** You'll be prompted for your GitHub username and password (or personal access token).

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Website (Recommended)

1. Go to [Vercel](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click "Add New Project"
4. Import your GitHub repository (`portfolio`)
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"
7. Wait 1-2 minutes for deployment
8. Your site will be live at: `https://your-project-name.vercel.app`

### Option B: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   cd c:\Users\sande\Desktop\projects\portfolio
   vercel
   ```

3. Follow the prompts:
   - Login to Vercel
   - Link to existing project or create new
   - Confirm settings
   - Deploy!

## Step 3: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Troubleshooting

### If git push fails:
- Make sure you have a GitHub Personal Access Token (not password)
- Generate one at: GitHub → Settings → Developer settings → Personal access tokens

### If Vercel build fails:
- Check that all dependencies are in `package.json`
- Ensure `next.config.js` is correct
- Check Vercel build logs for errors

## Quick Commands Reference

```bash
# Git commands
git status                    # Check status
git add .                     # Stage all files
git commit -m "message"       # Commit changes
git push                      # Push to GitHub

# Vercel commands
vercel                        # Deploy to Vercel
vercel --prod                 # Deploy to production
```

