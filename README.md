# 🎨 Doodle Notes Website

A colorful, vibrant website designed to host and showcase doodle-style infographic notes and PDFs with a handwritten, creative aesthetic.

## ✨ Features

- **Vibrant Design**: Eye-catching gradients and colors (pink, teal, orange, purple, yellow)
- **Handwritten Fonts**: Using Google Fonts (Caveat, Fredoka One, Indie Flower, Comfortaa) for a personal touch
- **Doodle Style**: Animated elements, rotating cards, and playful interactions
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices
- **Smooth Animations**: Floating elements, bouncing text, and transition effects
- **Interactive Elements**: Hover effects, contact form, smooth scrolling navigation

## 📁 Project Structure

```
doodle_website/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Interactive features and animations
├── pdfs/               # Folder for your PDF files
├── assets/             # Folder for images and additional assets
└── README.md           # This file
```

## 🚀 Getting Started

1. **Add Your PDFs**: Place your doodle notes PDF files in the `pdfs/` folder
2. **Update Notes Section**: Modify the note cards in `index.html` to link to your PDFs
3. **Customize Colors**: Edit the CSS variables in `styles.css` to match your branding
4. **Open in Browser**: Simply open `index.html` in your web browser

## 🎨 Color Palette

The website uses vibrant, energetic colors:
- **Pink**: #FF6B9D
- **Teal**: #00D9FF
- **Orange**: #FFA502
- **Purple**: #9D4EDD
- **Yellow**: #FFD93D
- **Lime**: #00FF88
- **Coral**: #FF6B6B

## 🔧 Customization Guide

### Adding Your PDFs
1. Place your PDF file in the `pdfs/` folder
2. Update the note card in `index.html`:
```html
<div class="note-card">
    <div class="note-header vibrant-pink">
        <span class="note-icon">📝</span>
    </div>
    <h3>Your Note Title</h3>
    <p>Your note description</p>
    <div class="note-footer">
        <button class="view-btn" onclick="window.open('pdfs/your-file.pdf')">View</button>
        <button class="download-btn" onclick="downloadPDF('pdfs/your-file.pdf', 'filename.pdf')">Download</button>
    </div>
</div>
```

### Changing Font Colors
Edit the CSS variables at the top of `styles.css`:
```css
:root {
    --vibrant-pink: #FF6B9D;
    --vibrant-teal: #00D9FF;
    /* ... etc */
}
```

### Modifying Section Colors
Change the gradient backgrounds in each section's CSS class

### Adding More Doodle Elements
Update the emoji and SVG elements throughout the HTML

## 📱 Responsive Breakpoints

- **Desktop**: Full featured layout
- **Tablet** (768px and below): Adjusted grid and font sizes
- **Mobile** (480px and below): Single column layouts, stacked navigation

## 🎭 Font Options

The website includes several playful fonts:
- **Fredoka One**: Bold, rounded, friendly headings
- **Caveat**: Casual handwriting style
- **Indie Flower**: Informal, sketchy appearance
- **Comfortaa**: Soft, rounded body text

You can find more fonts at [Google Fonts](https://fonts.google.com/)

## 💡 Tips for Best Results

1. **High-Quality PDFs**: Ensure your doodle notes are clear and colorful
2. **Consistent Branding**: Keep your color scheme consistent across PDFs
3. **Optimize Images**: Compress any images to load faster
4. **Mobile Testing**: Test the website on various devices
5. **Accessibility**: Consider adding alt text for images

## 🌐 Deployment

This is a static website that can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

Simply upload the files to your hosting service!

## 🎉 Have Fun!

This website is designed to be fun and engaging. Don't hesitate to experiment with colors, animations, and layouts!

---

Made with ❤️ and doodles ✨
