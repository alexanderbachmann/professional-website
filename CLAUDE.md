# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal professional website/portfolio for Janio Martinez Bachmann, a Data Product Owner. The site showcases career history, skills, and analytics portfolio projects. It's a static website built with vanilla HTML, CSS (Tailwind), and minimal JavaScript.

## Architecture

### Tech Stack
- **Frontend**: Static HTML with Tailwind CSS for styling
- **CSS Processing**: Tailwind CSS (v3.4.14) for utility-first styling
- **JavaScript**: Minimal vanilla JS using Lodash library, bundled with Browserify
- **Build Tools**: Browserify for bundling, live-server for development

### Project Structure
```
main/
├── index.html          # Single-page application (main entry point)
├── css/
│   └── styles.css      # Tailwind input file
├── public/
│   └── styles.css      # Compiled Tailwind output
├── JS/
│   ├── script.js       # Source JavaScript (uses Lodash)
│   └── bundle.js       # Browserified bundle (generated)
├── images/             # Image assets organized by category
│   ├── Cover/
│   ├── Employers/
│   ├── Flags/
│   ├── Portfolio/
│   ├── Social_Media/
│   └── Tools/
├── documents/
│   └── CV.pdf          # Resume/CV
└── package.json
```

## Development Commands

### Build and Serve
```bash
npm run build
```
Bundles JavaScript with Browserify and starts live-server for development.

### Build CSS Only
```bash
npm run build-css
```
Compiles Tailwind CSS from `css/styles.css` to `public/styles.css`.

### Manual Commands
```bash
# Bundle JavaScript
browserify JS/script.js > JS/bundle.js

# Compile Tailwind CSS
npx tailwindcss -i css/styles.css -o public/styles.css

# Start development server
live-server
```

## Key Implementation Details

### Single-Page Layout
- The entire website is in `index.html` - no routing or multiple pages
- Uses smooth scrolling and anchor links for navigation between sections
- Sections: "Meet Janio", "Career Highlights", and "Analytics Portfolio"

### CSS Approach
- Uses Tailwind utility classes directly in HTML
- Custom color scheme: orange (primary accent) and zinc-800 (dark background)
- Responsive design with mobile-first approach using Tailwind breakpoints

### JavaScript
- Currently minimal functionality (Lodash imported but lightly used)
- JavaScript is bundled using Browserify from `JS/script.js` to `JS/bundle.js`
- Always edit `JS/script.js` (source), never edit `JS/bundle.js` (generated)

### Content Structure
- Career timeline displayed with left border visual indicator
- Each role shows company, title, dates, location, responsibilities, and tech stack badges
- Portfolio items displayed in a responsive grid
- Social links: LinkedIn, GitHub, Kaggle, Goodreads

## Working with the Codebase

### Making Style Changes
1. Edit Tailwind classes directly in `index.html`
2. For custom styles, modify `css/styles.css` (though most styling uses Tailwind utilities)
3. Run `npm run build-css` to regenerate `public/styles.css`

### Making JavaScript Changes
1. Edit `JS/script.js` (not `JS/bundle.js`)
2. Run `browserify JS/script.js > JS/bundle.js` to rebuild the bundle
3. Test changes with `live-server` or `npm run build`

### Adding Content
- Career entries: Add timeline items in the "Career Highlights" section
- Portfolio projects: Add grid items in the "Portfolio" section
- Images: Place in appropriate subdirectory under `images/`

## Git Information
- Repository: https://github.com/alexanderbachmann/professional-website.git
- The main working directory is `main/`