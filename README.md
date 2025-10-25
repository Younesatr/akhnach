# Solar Energy Technician Portfolio

A clean, professional portfolio website for a Solar PV Technician showcasing expertise in installation, operations & maintenance, R&D, and system design.

## Features

- Multi-page structure with dedicated sections
- Responsive design for desktop and mobile
- Professional solar energy color scheme
- Placeholder sections for images and documents
- Contact form integration ready
- GitHub Pages compatible

## Pages

- **Home** (`index.html`) - Hero section and contact form
- **About** (`about.html`) - Professional introduction and mission
- **Experience** (`experience.html`) - Work history with project details
- **Education** (`education.html`) - Academic background
- **Skills** (`skills.html`) - Technical and soft skills
- **Languages** (`languages.html`) - Language proficiency
- **Certifications** (`certifications.html`) - Professional certificates

## Color Scheme

- Primary (Solar Yellow): #FFB703
- Secondary (Energy Blue): #0057B8
- Dark Gray: #2B2D42
- Light Gray: #8D99AE
- Background: #FFFFFF

## GitHub Pages Setup

1. Create a new GitHub repository
2. Upload all files maintaining the folder structure
3. Go to repository Settings > Pages
4. Select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click Save
7. Your site will be available at: `https://[username].github.io/[repository-name]/`

## Customization

Replace placeholder content in each page app file:
- Update personal information in `about-app.js`
- Add real work experience in `experience-app.js`
- Update education details in `education-app.js`
- Modify skills lists in `skills-app.js`
- Adjust language proficiency in `languages-app.js`
- Add certifications in `certifications-app.js`

Upload images and documents to `assets/images/` folder and update references in the code.

## Technology Stack

- React 18 (via CDN)
- TailwindCSS
- Lucide Icons
- Pure HTML/CSS/JavaScript

## File Structure

```
/
├── index.html
├── about.html
├── experience.html
├── education.html
├── skills.html
├── languages.html
├── certifications.html
├── app.js
├── about-app.js
├── experience-app.js
├── education-app.js
├── skills-app.js
├── languages-app.js
├── certifications-app.js
├── components/
│   ├── Header.js
│   └── Footer.js
├── assets/
│   ├── css/
│   │   └── style.css
│   └── images/
│       └── (place your images here)
└── trickle/
    └── notes/
        └── README.md
```
