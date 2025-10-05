# System Patterns: Training Center Website

## Architecture Overview
Static website with clean separation of concerns:
- **HTML**: Semantic structure and content
- **CSS**: Styling and responsive design
- **JavaScript**: Interactive functionality (minimal)

## Key Technical Decisions
- **No Frameworks**: Pure HTML/CSS/JS for simplicity and GitHub Pages compatibility
- **Mobile-First**: Responsive design starting with mobile layout
- **Semantic HTML**: Proper HTML5 semantic elements for accessibility
- **CSS Grid/Flexbox**: Modern layout techniques for responsive design
- **Progressive Enhancement**: Core functionality works without JavaScript

## Design Patterns
- **Component-Based CSS**: Reusable styles for consistent design
- **BEM Methodology**: Block-Element-Modifier naming convention
- **CSS Custom Properties**: Consistent color scheme and spacing
- **Responsive Images**: Optimized images for different screen sizes

## Component Relationships
```
index.html (Homepage)
├── css/
│   ├── styles.css (Main styles)
│   └── responsive.css (Media queries)
├── js/
│   └── main.js (Interactive features)
├── images/ (All images)
└── pages/
    ├── courses.html
    ├── about.html
    ├── contact.html
    ├── privacy.html
    └── terms.html
```

## Navigation Pattern
- Consistent header navigation across all pages
- Footer with links to legal pages
- Breadcrumb navigation for deeper pages
- Mobile hamburger menu for small screens

## Content Structure
- **Hero Sections**: Eye-catching banners with call-to-action
- **Card Layouts**: Course listings and feature highlights
- **Form Patterns**: Consistent contact form styling
- **Legal Pages**: Structured content with clear headings
