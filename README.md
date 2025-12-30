# Portfolio Website - Gella Sandeep Kumar

A modern, professional portfolio website built with Next.js, React.js, and Tailwind CSS showcasing my professional experience, skills, and achievements as a Frontend Developer.

## Features

- 🎨 Modern and professional design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🚀 Built with Next.js 14 and React.js
- 💅 Styled with Tailwind CSS
- ✨ Subtle animations and transitions
- 🎯 SEO optimized with metadata
- ♿ Accessibility best practices
- 📊 Sections:
  - Hero with professional introduction
  - About with experience highlights
  - Technical Skills with categorized display
  - Featured Projects showcase
  
  - Education
  - Key Achievements
  - Contact information

## Technologies Used

- **Next.js 14** - React framework with App Router
- **React.js** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **Inter & Poppins** - Google Fonts

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx

│   ├── Education.tsx
│   ├── Achievements.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Color Palette

- **Navy Blue**: Primary color for text and backgrounds
- **Teal**: Accent color for highlights and CTAs
- **Indigo**: Secondary accent color
- **White & Light Grey**: Background colors

## Typography

- **Inter**: Primary font for body text
- **Poppins**: Display font for headings

## Customization

You can easily customize the portfolio by:

1. Updating personal information in component files
2. Modifying colors in `tailwind.config.js`
3. Adjusting styles in `app/globals.css`
4. Adding or removing sections in `app/page.tsx`

## License

This project is open source and available for personal use.
