# Elite Training Center - Static Website

A professional, responsive static website for a training center showcasing courses, services, and educational programs.

## Features

- **Responsive Design**: Mobile-first approach that works on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Complete Pages**: Homepage, Courses, About, Contact, Privacy Policy, and Terms of Service
- **Interactive Elements**: Contact forms, course filtering, mobile navigation
- **SEO Optimized**: Proper meta tags, semantic HTML, and structured content
- **Accessibility**: WCAG compliant with proper contrast ratios and keyboard navigation
- **Fast Loading**: Optimized CSS and JavaScript for quick page loads

## Pages Included

1. **Homepage** (`index.html`) - Hero section, featured courses, testimonials
2. **Courses** (`pages/courses.html`) - Course listings with filtering and search
3. **About** (`pages/about.html`) - Company information, team, and values
4. **Contact** (`pages/contact.html`) - Contact form, location, and FAQ
5. **Privacy Policy** (`pages/privacy.html`) - Comprehensive privacy policy
6. **Terms of Service** (`pages/terms.html`) - Detailed terms and conditions

## Technology Stack

- **HTML5**: Semantic markup and modern features
- **CSS3**: Flexbox, Grid, custom properties, and responsive design
- **Vanilla JavaScript**: Interactive functionality without frameworks
- **Font Awesome**: Icons for enhanced visual appeal
- **Google Fonts**: Inter font family for modern typography

## File Structure

```
training_center_static/
├── index.html                 # Homepage
├── css/
│   ├── styles.css            # Main stylesheet
│   └── responsive.css        # Responsive design rules
├── js/
│   └── main.js              # JavaScript functionality
├── pages/
│   ├── courses.html         # Courses page
│   ├── about.html           # About page
│   ├── contact.html         # Contact page
│   ├── privacy.html         # Privacy policy
│   └── terms.html           # Terms of service
├── memory-bank/             # Project documentation
└── README.md               # This file
```

## Local Development

To run the website locally for development and testing:

### Option 1: Python HTTP Server (Recommended)
```bash
# Python 3
python -m http.server 8600

# Python 2
python -m SimpleHTTPServer 8600
```

### Option 2: Node.js HTTP Server
```bash
# Install http-server globally
npm install -g http-server

# Run the server
http-server -p 8600
```

### Option 3: PHP Built-in Server
```bash
php -S localhost:8600
```

### Option 4: Live Server (VS Code Extension)
If using VS Code, install the "Live Server" extension and right-click on `index.html` → "Open with Live Server"

### Access Your Local Site
After running any of the above commands, open your browser and navigate to:
- `http://localhost:8600` (Python/PHP)
- `http://127.0.0.1:8600` (Alternative)

## GitHub Pages Deployment

This website is designed to be hosted on GitHub Pages. To deploy:

1. **Fork or clone this repository**
2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Access your site**: Your website will be available at `https://yourusername.github.io/training_center_static`

## Customization

### Colors
The website uses CSS custom properties for easy color customization. Edit the `:root` variables in `css/styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --primary-dark: #1d4ed8;
    --secondary-color: #64748b;
    --accent-color: #f59e0b;
    /* ... other colors */
}
```

### Content
- Update company information in all HTML files
- Replace placeholder content with your actual course information
- Modify contact details in the contact page and footer
- Update legal pages with your specific terms and privacy policy

### Images
- Replace placeholder icons with actual images
- Add your logo to the header
- Include course images and team photos
- Optimize images for web (WebP format recommended)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- **Optimized CSS**: Efficient selectors and minimal redundancy
- **Lazy Loading**: Images load as needed
- **Minimal JavaScript**: Only essential interactive features
- **Responsive Images**: Different sizes for different devices
- **Fast Fonts**: Google Fonts with display=swap

## Accessibility Features

- **Semantic HTML**: Proper heading structure and landmarks
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Screen Reader Support**: ARIA labels and descriptive text
- **High Contrast**: Meets WCAG AA contrast requirements
- **Focus Indicators**: Clear focus states for keyboard users

## SEO Features

- **Meta Tags**: Proper title, description, and viewport tags
- **Structured Data**: Semantic HTML for better search engine understanding
- **Fast Loading**: Optimized for Core Web Vitals
- **Mobile Friendly**: Responsive design for mobile-first indexing
- **Clean URLs**: SEO-friendly page structure

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or support regarding this website template, please contact us at info@elitetraining.com.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Elite Training Center** - Empowering professionals through quality education and career development programs.
