# TechZone Learning - Flask Project

## Project Structure

```
flask-export/
├── app.py                    # Flask application
├── templates/
│   └── index.html           # Main HTML template
├── static/
│   ├── css/
│   │   └── style.css        # All styles
│   ├── js/
│   │   └── main.js          # JavaScript functionality
│   └── images/              # Add your images here
│       ├── hero-bg.jpg
│       ├── course-web.jpg
│       ├── course-marketing.jpg
│       ├── course-ai.jpg
│       ├── course-graphic.jpg
│       ├── course-php.jpg
│       └── course-mobile.jpg
└── README.md
```

## Setup Instructions

1. **Create a virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. **Install Flask:**
   ```bash
   pip install flask
   ```

3. **Add images:**
   - Create `static/images/` folder
   - Add all required images (hero-bg.jpg, course images, etc.)

4. **Run the application:**
   ```bash
   python app.py
   ```

5. **Open in browser:**
   - Visit `http://127.0.0.1:5000`

## Features

- ✅ Responsive design (mobile-first)
- ✅ Smooth scroll navigation
- ✅ Mobile hamburger menu
- ✅ Contact form with AJAX submission
- ✅ Toast notifications
- ✅ Scroll-to-top button
- ✅ Scroll animations
- ✅ Active nav link highlighting

## Customization

### Colors
Edit the CSS variables in `static/css/style.css`:
```css
:root {
    --gold-500: 45 93% 47%;      /* Primary gold */
    --navy-950: 222 47% 8%;       /* Dark background */
    /* ... more variables */
}
```

### Content
Edit the HTML in `templates/index.html` to update:
- Course information
- Contact details
- Reviews/testimonials
- Company information

### Form Handling
Modify `app.py` to add email sending or database storage for contact form submissions.

## Dependencies

- Flask
- (Optional) Flask-Mail for email sending
- (Optional) Flask-SQLAlchemy for database

## License

© 2024 TechZone Learning. All rights reserved.
