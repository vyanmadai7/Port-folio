#  Personal Portfolio Website

A modern, responsive portfolio website showcasing my projects, skills, and contact information. Built with vanilla HTML, CSS, and JavaScript with a focus on accessibility, performance, and clean design...


##  Features

- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme** - Toggle between themes with persistent preference storage
- **Smooth Animations** - Intersection Observer API for scroll-triggered animations
- **Accessibility First** - WCAG compliant with ARIA labels, keyboard navigation, and screen reader support
- **Contact Form** - Integrated with EmailJS for seamless message delivery
- **SEO Optimized** - Meta tags, Open Graph, and Twitter Cards configured
- **Performance** - Optimized loading with lazy loading images and efficient CSS
- **Modern UI/UX** - Clean, professional design with smooth transitions

##  Live Demo

Visit the live site: [vyanmadai.com](https://vyanmadai.com)

##  Sections

1. **Home** - Introduction and hero section with social links
2. **About** - Background information and comprehensive skills showcase
3. **Projects** - Portfolio of featured projects with live demos and source code
4. **Contact** - Get in touch via contact form or social media

##  Technologies Used

### Frontend
- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- Vanilla JavaScript (ES6+)

### Tools & Libraries
- [Font Awesome](https://fontawesome.com/) - Icons
- [Google Fonts (Poppins)](https://fonts.google.com/) - Typography
- [EmailJS](https://www.emailjs.com/) - Contact form functionality

### Skills Highlighted
- React & React Native
- Python & Django
- Django REST Framework
- MySQL & MongoDB
- Git & GitHub
- Docker & Kubernetes
- Jenkins & Terraform
- n8n Automation
- UI/UX Design (Figma)

##  Installation & Setup

### Prerequisites
- A modern web browser
- Text editor (VS Code recommended)
- EmailJS account (for contact form)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/vyanmadai7/Port-folio.git
   cd Port-folio
   ```

2. **Configure EmailJS**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create an email service and template
   - Replace the placeholders in the script section:
     ```javascript
     emailjs.init('YOUR_PUBLIC_KEY');
     
     emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
       // ... template parameters
     })
     ```

3. **Update Personal Information**
   - Edit the HTML file to replace:
     - Email addresses
     - Social media links
     - Project details and links
     - Profile images (in `/images` folder)

4. **Run Locally**
   - Open `index.html` in your browser, or
   - Use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx http-server
     ```

##  Project Structure

```
Port-folio/
│
├── images/                    # Image assets
│   ├── hero-headshot.webp
│   ├── project-image-1.webp
│   ├── project-image-2.webp
│   ├── project-image-3.webp
│   └── [skill-logos].webp
│
├── index.html                 # Main HTML file
|-- styles.css
|-- script.js
└── README.md                  # Documentation
```

##  Customization

### Colors
The site uses CSS custom properties for easy theming. Modify the `:root` and `[data-theme="dark"]` variables:

```css
:root {
  --bg-primary: #ffffff;
  --text-primary: #212529;
  --accent-primary: #0d6efd;
  /* ... more variables */
}
```

### Typography
Change the font family in the CSS variables:
```css
--font-family: 'Poppins', sans-serif;
```

### Adding Projects
Add new project cards in the projects section:
```html
<article class="project-card">
  <img src="images/your-project.webp" alt="Project description">
  <div class="project-info">
    <h3>Project Name</h3>
    <p>Project description...</p>
    <div class="project-links">
      <a href="#">Live Demo</a>
      <a href="#">Code</a>
    </div>
  </div>
</article>
```

## 🔧 Configuration

### EmailJS Setup
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Add an email service (Gmail, Outlook, etc.)
3. Create an email template with these parameters:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
   - `{{to_name}}`
4. Copy your Public Key and Template ID
5. Update the script section in `index.html`

### Meta Tags
Update SEO and social media meta tags in the `<head>`:
```html
<meta property="og:url" content="https://yourdomain.com">
<meta name="twitter:creator" content="@yourhandle">
```

##  Deployment

### GitHub Pages
1. Go to repository Settings → Pages
2. Select source branch (usually `main`)
3. Save and wait for deployment
4. Visit `https://yourusername.github.io/Port-folio`

### Netlify
1. Connect your GitHub repository
2. Configure build settings (not needed for static site)
3. Deploy

### Vercel
```bash
npm i -g vercel
vercel
```

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Skip to content link
- Screen reader friendly
- Focus indicators
- Reduced motion support
- High contrast ratios

##  Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

##  Known Issues

None currently. Please report issues on the [Issues](https://github.com/vyanmadai7/Port-folio/issues) page.

##  Future Enhancements

- [ ] Blog section
- [ ] Project filtering by technology
- [ ] Loading animations
- [ ] Multi-language support
- [ ] Backend integration for contact form
- [ ] Analytics integration

##  Contributing

While this is a personal portfolio, suggestions and improvements are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

##  License

This project is open source and available under the [MIT License](LICENSE).

##  Author

**Vyan Madai**

- Website: [vyanmadai.com](https://vyanmadai.com)
- GitHub: [@vyanmadai7](https://github.com/vyanmadai7)
- LinkedIn: [vyan-madai](https://linkedin.com/in/vyan-madai-110311387)
- Twitter: [@vyanmadai](https://x.com/vyanmadai)
- Email: thevyanmadai@gmail.com

##  Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- EmailJS for form functionality
- The web development community for inspiration

---
