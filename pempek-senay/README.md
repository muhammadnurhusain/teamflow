# Pempek Senay - Modern Frozen Food Landing Page

A modern, high-conversion landing page for Pempek Senay, built with Next.js 14, TypeScript, and TailwindCSS.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Navigate to the project directory:
```bash
cd pempek-senay
```

2. Install dependencies (already done):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

## 📁 Project Structure

```
pempek-senay/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO & metadata
│   │   ├── page.tsx            # Main landing page
│   │   └── globals.css         # Global styles & theme
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky navigation bar
│   │   ├── Footer.tsx          # Site footer
│   │   └── FloatingWhatsAppButton.tsx  # WhatsApp CTA buttons
│   └── sections/
│       ├── HeroSection.tsx     # Hero section with CTA
│       ├── WhySection.tsx      # Feature cards
│       ├── ProductMenuSection.tsx  # Product grid
│       ├── HowToOrderSection.tsx   # Order timeline
│       ├── TestimonialSection.tsx    # Review carousel
│       ├── PromoSection.tsx    # Promotional CTA
│       ├── DeliveryAreaSection.tsx   # Delivery info
│       ├── AboutSection.tsx    # Brand story
│       └── FAQSection.tsx      # FAQ accordion
├── public/                     # Static assets
└── package.json

```

## 🎨 Features

### Sections
1. **Hero Section** - Eye-catching headline with trust badges
2. **Why Pempek Senay** - 4 feature cards with hover animations
3. **Product Menu** - Responsive product grid with order buttons
4. **How to Order** - 3-step timeline visualization
5. **Testimonials** - Customer review carousel
6. **Promo** - Special discount CTA
7. **Delivery Area** - Coverage and shipping info
8. **About** - Brand storytelling
9. **FAQ** - Accordion-style questions
10. **Footer** - Contact info and social links

### Technical Features
- ✅ Next.js 14 with App Router
- ✅ TypeScript for type safety
- ✅ TailwindCSS for styling
- ✅ Framer Motion animations
- ✅ Responsive mobile-first design
- ✅ SEO optimized with meta tags
- ✅ OpenGraph support
- ✅ Dark mode support
- ✅ Smooth scroll navigation
- ✅ Sticky navbar
- ✅ Floating WhatsApp buttons
- ✅ Mobile sticky CTA
- ✅ Modern loading animations
- ✅ Hover micro-interactions

## 🎨 Design System

### Colors
- **Primary**: `#FF6B35` (Orange)
- **Secondary**: `#F7931E` (Golden Orange)
- **Background**: `#FFFFFF` (Light) / `#0F0F1A` (Dark)
- **Accent**: `#1A1A2E` (Dark Navy)

### Typography
- Clean, modern sans-serif (Geist)
- Gradient text effects for emphasis
- Responsive font sizes

## 🛠 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Breakpoints

- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

## 🔧 Customization

### Update WhatsApp Number
Search and replace `6281234567890` in all files with your actual WhatsApp number.

### Update Product Images
Replace the emoji placeholders in `ProductMenuSection.tsx` with actual product images using Next.js `Image` component.

### Update Social Links
Update the Instagram and WhatsApp URLs in the Footer and FloatingWhatsAppButton components.

## 🚀 Deployment

The project is ready for deployment on Vercel, Netlify, or any Next.js hosting platform.

```bash
npm run build
```

Then deploy the `.next` folder according to your hosting platform's documentation.

## 📄 License

This is a custom landing page built for Pempek Senay.

---

**Built with ❤️ using Next.js and TailwindCSS**
