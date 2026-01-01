# Tennis Coach Landing Page 🎾

A stunning, conversion-focused landing page for a professional tennis coach specializing in clay court training. Built with modern web technologies featuring parallax scrolling, 3D animations, and a beautiful minimal aesthetic.

## ✨ Features

- **Parallax Scrolling**: Smooth, eye-catching parallax effects that create depth
- **3D Scroll Animations**: Interactive elements that respond to user scroll
- **Clay Court Theme**: Beautiful terracotta color palette inspired by clay courts
- **Conversion Optimized**: Clear CTAs, contact form, and compelling copy
- **Fully Responsive**: Looks great on all devices
- **Modern Stack**: React, TypeScript, Tailwind CSS, Framer Motion

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Claudie
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

Preview the production build:
```bash
npm run preview
```

## 🎨 Customization

### Colors

The clay court color palette is defined in `tailwind.config.js`. You can customize it:

```javascript
colors: {
  clay: {
    50: '#fef5ee',   // Lightest
    500: '#f15d20',  // Main accent
    900: '#782616',  // Darkest
  },
}
```

### Content

- **Hero Section**: Edit `src/components/Hero.tsx`
- **Services & Pricing**: Edit `src/components/Services.tsx`
- **About Section**: Edit `src/components/About.tsx`
- **Contact Info**: Edit `src/components/Contact.tsx`

### Contact Information

Update contact details in `src/components/Contact.tsx`:

```typescript
const contactInfo = [
  { icon: Mail, label: 'Email', value: 'your@email.com' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
  { icon: MapPin, label: 'Location', value: 'Your Location' },
];
```

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

## 📱 Sections

1. **Hero** - Eye-catching introduction with parallax background
2. **Services** - Individual and group lessons with pricing
3. **About** - Coach's philosophy and values
4. **Contact** - Contact form and information
5. **Footer** - Links and copyright

## 🎯 Performance

- Optimized bundle size with Vite
- Lazy loading of components
- Smooth 60fps animations
- Mobile-first responsive design

## 📝 License

This project is licensed under the MIT License.

## 🤝 Support

For questions or support, contact the tennis coach directly through the landing page contact form.

---

Built with ❤️ for tennis enthusiasts
