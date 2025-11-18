# STAIN - The Play | Modern Website

A modern, elegant recreation of the STAIN theatrical production website featuring smooth animations, responsive design, and contemporary web standards.

## Features

### Design & Aesthetics
- **Dark, Dramatic Theme**: Deep maroon/burgundy color palette (#7c1010, #5a0f0f) against dark backgrounds
- **Elegant Typography**: Lora serif for headings, Inter sans-serif for body text
- **Smooth Animations**: Fade-ins, parallax effects, hover transitions, and floating particles
- **Responsive Layout**: Fully responsive from mobile to desktop (320px - 1280px+)

### Technical Features
- **Modern CSS3**: CSS variables, Grid, Flexbox, custom animations
- **Semantic HTML5**: Proper structure with accessibility in mind
- **Interactive JavaScript**:
  - Smooth scrolling navigation
  - Mobile menu toggle
  - Scroll-based animations
  - Parallax hero section
  - Intersection Observer for lazy animations
  - Active navigation tracking

### Sections Included
1. **Hero Section**: Full-height with animated title, CTA button, and scroll indicator
2. **Quote Section**: Featured testimonial with elegant styling
3. **Gallery Section**: Image grid with hover effects (ready for production photos)
4. **Be A Part**: Call-to-action content section
5. **The Impact**: Mission/vision statement section
6. **Cast & Crew**: Team information section
7. **Footer**: Social links and copyright

## File Structure

```
stain/
├── index.html      # Main HTML structure
├── styles.css      # All styling and animations
├── script.js       # Interactive features
└── README.md       # This file
```

## Getting Started

### Viewing the Site
Simply open `index.html` in any modern web browser:
- Double-click the file, or
- Right-click → Open with → Your browser

### Customization

#### Adding Production Images
Replace the `.gallery-image-placeholder` divs in `index.html` with actual images:

```html
<!-- Replace this: -->
<div class="gallery-image-placeholder">
    <span>Production Photo 1</span>
</div>

<!-- With this: -->
<img src="path/to/your/image.jpg" alt="Description">
```

#### Updating Content
1. **Text**: Edit content directly in `index.html`
2. **Colors**: Modify CSS variables in `styles.css` (lines 8-13)
3. **Fonts**: Change font families in CSS variables or link different Google Fonts

#### Adding New Sections
Follow the pattern in `index.html`:

```html
<section class="content-section" id="your-section">
    <div class="container">
        <h2 class="section-title">Your Title</h2>
        <div class="content-block">
            <p>Your content here</p>
        </div>
    </div>
</section>
```

## Modern Enhancements Over Original

1. **Performance**
   - Optimized animations with CSS transforms
   - Intersection Observer for efficient scroll animations
   - Minimal dependencies (no frameworks)

2. **Accessibility**
   - Semantic HTML structure
   - ARIA labels for interactive elements
   - Keyboard navigation support
   - High contrast ratios

3. **User Experience**
   - Smooth scroll behavior
   - Intuitive mobile navigation
   - Hover feedback on all interactive elements
   - Loading animations

4. **Visual Polish**
   - Gradient overlays
   - Floating particle effects
   - Parallax scrolling
   - Ripple effects on buttons
   - Animated underlines on navigation

## Browser Compatibility

Works on all modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Next Steps

### Recommended Additions
1. Add actual production photographs to gallery
2. Populate Cast & Crew section with team information
3. Add detailed content to Be A Part and The Impact sections
4. Connect to real ticketing platform (currently links to The Tank NYC)
5. Add meta tags and Open Graph images for social sharing
6. Consider adding a press/reviews section
7. Implement a mailing list signup form

### Optional Enhancements
- Add a video trailer section
- Implement a photo lightbox/modal for gallery
- Add behind-the-scenes content
- Create a press kit download section
- Add Google Analytics or similar tracking

## Support

For the original production: https://thetanknyc.org

---

**Built with care for STAIN - The Play**
*One Night Only*
