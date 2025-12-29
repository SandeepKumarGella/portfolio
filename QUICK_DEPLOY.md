# Quick Deployment Steps

## ✅ Step 1: Push to GitHub

### Option A: Using the batch file (Windows)
1. Double-click `push-to-github.bat`
2. Enter your GitHub username when prompted
3. Enter your GitHub credentials when asked

### Option B: Manual commands
Open PowerShell or Command Prompt in the project folder and run:

```bash
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

**Note:** If you get authentication errors, you'll need a GitHub Personal Access Token instead of password:
1. Go to: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `repo` permissions
3. Use this token as your password when pushing

---

## ✅ Step 2: Deploy to Vercel

### Method 1: Via Vercel Website (Easiest - Recommended)

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign up/Login** with your GitHub account
3. Click **"Add New Project"** or **"Import Project"**
4. **Select your GitHub repository** (`portfolio`)
5. Vercel will auto-detect:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Click **"Deploy"**
7. Wait 1-2 minutes
8. **Your site is live!** 🎉
   - URL: `https://your-project-name.vercel.app`

### Method 2: Via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project folder
cd c:\Users\sande\Desktop\projects\portfolio

# Deploy
vercel

# Follow the prompts:
# - Login to Vercel
# - Link to existing project or create new
# - Confirm settings
```

---

## 🎯 What Happens Next?

- **Automatic Deployments**: Every time you push to GitHub, Vercel will automatically redeploy your site
- **Preview Deployments**: Pull requests get preview URLs
- **Custom Domain**: Add your own domain in Vercel dashboard → Settings → Domains

---

## 🔧 Troubleshooting

### Git Push Issues:
- **Authentication failed**: Use Personal Access Token instead of password
- **Repository not found**: Make sure you created the repo on GitHub first

### Vercel Build Issues:
- **Build failed**: Check Vercel build logs
- **Module not found**: Make sure all dependencies are in `package.json`
- **TypeScript errors**: Check `tsconfig.json` settings

---

## 📝 Useful Commands

```bash
# Check git status
git status

# Add and commit changes
git add .
git commit -m "Your commit message"
git push

# Deploy to Vercel (if using CLI)
vercel --prod
```

---

## 🎉 You're Done!

Once deployed, share your portfolio URL with potential employers!

