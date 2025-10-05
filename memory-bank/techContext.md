# Technical Context: Training Center Website

## Technologies Used
- **HTML5**: Semantic markup and modern features
- **CSS3**: Flexbox, Grid, custom properties, media queries
- **Vanilla JavaScript**: Minimal interactive functionality
- **GitHub Pages**: Static site hosting

## Development Setup
- **Local Development**: Simple file structure, no build process required
- **Version Control**: Git for tracking changes
- **Hosting**: GitHub Pages for free static hosting
- **Domain**: Can use custom domain or GitHub Pages subdomain

## Technical Constraints
- **No Server-Side Processing**: Static files only
- **No Database**: All content in HTML files
- **No Build Tools**: Direct HTML/CSS/JS files
- **GitHub Pages Limits**: 1GB repository size, 100GB bandwidth/month

## Dependencies
- **None**: Pure HTML/CSS/JS implementation
- **External Resources**: 
  - Google Fonts for typography
  - Font Awesome for icons (optional)
  - No external JavaScript libraries

## File Structure
```
training_center_static/
├── index.html
├── css/
│   ├── styles.css
│   └── responsive.css
├── js/
│   └── main.js
├── images/
│   ├── logo.png
│   ├── hero-bg.jpg
│   └── course-images/
├── pages/
│   ├── courses.html
│   ├── about.html
│   ├── contact.html
│   ├── privacy.html
│   └── terms.html
└── README.md
```

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## Performance Considerations
- Optimized images (WebP format where supported)
- Minified CSS and JavaScript
- Efficient CSS selectors
- Lazy loading for images
- Minimal HTTP requests
