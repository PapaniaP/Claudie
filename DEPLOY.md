# 📱 Mobile Testing - Deployment Guide

Since you want to test on mobile, here are the easiest ways to deploy and access the landing page:

## 🚀 Option 1: Vercel (Recommended - Fastest)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Import the `PapaniaP/Claudie` repository
5. Select the branch: `claude/tennis-coach-landing-LdThe`
6. Vercel will auto-detect the settings (already configured in `vercel.json`)
7. Click "Deploy"
8. In 1-2 minutes, you'll get a live URL like: `your-project.vercel.app`

**Benefits:**
- Deploys in ~60 seconds
- Free SSL certificate
- Auto-deploys on git push
- Great performance

## 🎯 Option 2: Netlify (Updated 2026 Steps)

1. Go to [app.netlify.com](https://app.netlify.com) and sign in with GitHub
2. From your team dashboard, click **"Add new site"**
3. Select **"Import an existing project"**
4. Choose **GitHub** as your Git provider (authorize if needed)
5. Select your repository: `PapaniaP/Claudie`
6. Choose the branch: **`claude/tennis-coach-landing-LdThe`**
7. **Build settings** (auto-detected from `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`
   - (These are already configured - just verify they're correct)
8. Click **"Deploy [site-name]"**
9. Wait 1-2 minutes for the build to complete
10. Get your live URL: `your-site-name.netlify.app`

**Benefits:**
- Free hosting with SSL
- Instant rollbacks if needed
- **Built-in form handling** (works with our contact form - no backend needed!)
- Automatic deploys on git push
- Easy custom domain setup

## 📦 Option 3: GitHub Pages

1. Go to your repo: `github.com/PapaniaP/Claudie`
2. Click "Settings" → "Pages"
3. Source: "Deploy from a branch"
4. Branch: `claude/tennis-coach-landing-LdThe`
5. Folder: `/ (root)`
6. Save

**Note:** GitHub Pages serves static files, so you'd need to build locally and commit the `dist` folder, or set up GitHub Actions. Vercel/Netlify are easier.

## ⚡ Option 4: Quick Share with Cloudflare Pages

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect GitHub account
3. Select repository and branch
4. Framework preset: "Vite"
5. Deploy!

---

## 🎨 What You'll See

Once deployed, you'll experience:
- **Smooth parallax scrolling** on the hero section
- **3D card animations** when hovering/tapping services
- **Clay court theme** with beautiful orange/terracotta accents
- **Responsive design** optimized for mobile
- **Interactive contact form**

## 💡 Recommended: Vercel

For the fastest mobile testing, I recommend **Vercel**. It takes less than 2 minutes to deploy and gives you a production URL instantly.

---

**Need help?** Let me know which platform you choose and I can guide you through any issues!
