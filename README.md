# GoBig Films - Astro Recreation

This is an exact recreation of the GoBig Films website using Astro, designed to match the original Squarespace site pixel-perfectly.

## 🚀 Project Structure

```
/
├── public/
│   ├── images/           # Image assets (copied from original)
│   └── favicon.ico       # Site favicon
├── src/
│   ├── components/       # Reusable Astro components
│   ├── layouts/          # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/            # Site pages (auto-routing)
│   │   └── index.astro   # Homepage
│   └── styles/           # CSS files
│       └── global.css    # Global styles matching original
├── astro.config.mjs      # Astro configuration
├── package.json          # Dependencies
└── vercel.json           # Vercel deployment config
```

## 🛠️ Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`     |
| `npm run build`           | Build your production site to `./dist/`         |
| `npm run preview`         | Preview your build locally, before deploying    |

## 📋 Recreation Checklist

### Phase 1: Foundation ✅
- [x] Astro project setup
- [x] Base layout component
- [x] Global CSS with exact color variables
- [x] Typography matching (Pontano Sans + Epilogue)
- [x] Vercel deployment configuration

### Phase 2: Pages (In Progress)
- [x] Homepage structure
- [ ] About page
- [ ] Service pages (12 total)
- [ ] Contact page
- [ ] Blog pages

### Phase 3: Assets & Content
- [x] Hero background image
- [x] Service images
- [x] Logo assets
- [ ] Additional page images
- [ ] Content migration

### Phase 4: Features
- [ ] Contact forms
- [ ] Video embeds
- [ ] SEO optimization
- [ ] Performance optimization

## 🎯 Pixel-Perfect Recreation Goals

- **Typography**: Exact font matching (Pontano Sans + Epilogue)
- **Colors**: HSL color variables matching Squarespace
- **Layout**: Grid systems and spacing identical to original
- **Animations**: Hover effects and transitions
- **Responsive**: Mobile-first design matching original breakpoints

## 🚀 Deployment

This project is configured for deployment on Vercel with automatic builds from the main branch.

## 📄 License

This project is a recreation for educational and portfolio purposes.