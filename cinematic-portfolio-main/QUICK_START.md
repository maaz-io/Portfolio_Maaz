# 🚀 Quick Start Guide

## Your Portfolio is Ready!

### Step 1: Start Development Server
```bash
npm install  # If you haven't installed dependencies yet
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 2: Test All Sections
- Scroll through the entire page
- Test video playback (click to unmute)
- Check responsive design (resize browser window)
- Verify all links work (projects, social media)

### Step 3: Deploy to Vercel
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and import your GitHub repo
4. Click "Deploy"
5. Your live site will be ready in minutes!

## What's Your URL?

Once deployed on Vercel, your site will be at:
- Default: `https://cinematic-portfolio-main.vercel.app/`
- Custom: You can change this in Vercel project settings

## Your Content Highlights

### About You
- **Title**: Software Engineer & AI Automation Specialist
- **Focus**: Building high-performance, visually immersive web experiences
- **Skills**: React, Node.js, Python, Three.js, AI, LLM, RAG
- **Status**: Self-Employed (January 2026 - Present)
- **Location**: Rawalpindi, Pakistan

### Your Projects (All Linked!)
1. CorpWorks UK - https://profitworks.vercel.app/
2. 91 Dental Solutions - https://dental-website-eight-eta.vercel.app/
3. Offline RAG AI Model - https://github.com/maaz-io
4. WebOps - https://webops-theta.vercel.app/
5. The Travel Co - https://travel-agent-dun.vercel.app/
6. Personal Portfolio #1 - https://maaztech.vercel.app/
7. Personal Portfolio #2 - https://maaz-org.vercel.app/

### Education
- BS Software Engineering - NUST (2026)
- F.Sc Pre-Engineering - APSAC (2025)
- Matriculation - Fazaia Inter College (2023)

## File Structure

```
cinematic-portfolio-main/
├── data/
│   ├── profile.json          ← Your personal data (name, projects, skills, etc.)
│   └── content.json          ← Site messaging
├── components/
│   ├── sections/             ← Page sections (Hero, About, Projects, etc.)
│   ├── three/                ← 3D effects
│   └── ui/                   ← UI components
├── app/
│   ├── page.js               ← Main page
│   ├── layout.js             ← Metadata (SEO)
│   └── opengraph-image.jsx   ← Social preview
├── public/
│   └── assets/               ← Your images and videos
├── lib/
│   ├── siteConfig.js         ← Your domain URL
│   └── gsap.js               ← Animation library
└── SETUP_COMPLETE.md         ← Full documentation
```

## Customize Further

### Change Colors
- Edit `styles/` files
- Look for CSS variables like `--primary`, `--accent`

### Add More Projects
- Edit `data/profile.json`
- Add to the `projects` array with image, link, tech stack

### Update Your Bio
- Edit `data/profile.json`
- Modify the `bio` and `description` fields

### Change Domain
- Update `lib/siteConfig.js`
- Change `SITE_URL` to your custom domain

## Useful Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Check for code issues
```

## Performance Tips

- ✅ Images are already optimized
- ✅ Videos are streamed efficiently
- ✅ 3D effects disabled on mobile for performance
- ✅ Lazy loading enabled
- ✅ Analytics included

## Troubleshooting

**Video not playing?**
- Check that `about_me.mp4` and `footer-video.mp4` exist in `/public/assets/`
- Ensure videos are under 10MB for best performance

**Images not showing?**
- Check filenames in `/public/assets/`
- Verify path spelling in component files

**Animations jerky?**
- Try a different browser
- Check system resources
- Disable animations on low-end devices (CSS media query)

**Deploy issues?**
- Make sure all files are committed to Git
- Check that `.gitignore` doesn't exclude important files
- Vercel will show build logs if there are errors

---

**Happy coding! Your portfolio is ready to impress! 🎉**

Need help? Check SETUP_COMPLETE.md for detailed documentation.
