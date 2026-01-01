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

## 🎯 Option 2: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub and select `PapaniaP/Claudie`
5. Select the branch: `claude/tennis-coach-landing-LdThe`
6. Settings are auto-configured (via `netlify.toml`)
7. Click "Deploy"
8. Get your URL like: `your-project.netlify.app`

**Benefits:**
- Simple drag-and-drop option also available
- Free hosting
- Instant rollbacks
- Form handling included (works with our contact form!)

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
