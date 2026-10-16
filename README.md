# Harshika — Minimal Pinterest-Style Portfolio

A minimal, clean, Pinterest-style multi-page personal portfolio website built with pure **HTML5, modern CSS, and vanilla JavaScript** (no frameworks, no build step, no backend). Designed for immediate hosting on **GitHub Pages** or **Netlify**.

---

## 🎨 Design System

- **3-Colour Palette**:
  - Warm off-white background: `#FAF7F2`
  - Near-black body text: `#1F1F1F`
  - Accent terracotta: `#C4553A` (reserved strictly for interactive links, buttons, and small highlights)
- **Cards**: White (`#FFFFFF`) with a thin soft border (`#E8E5DF`), `12px` gentle rounded corners, and generous whitespace. No heavy shadows, no gradients.
- **Typography**: Inter (Google Fonts), using only weights `400` (Regular) and `600` (Semi-Bold).
- **Animations**: None, except subtle `150ms` hover color/border changes. Fully honors `prefers-reduced-motion`.
- **Layout**: Pinterest-like multi-column masonry (3 columns on desktop, 2 on tablet, 1 on mobile).

---

## 📂 Site Structure

1. **Home (`index.html`)**:
   - Concise personal introduction: *"Hi, I'm Harshika — B.E. CSE student at Chitkara University, backend and full-stack developer, from Bagha Purana, Punjab."*
   - Pinterest masonry board featuring:
     - 3 project cards (BookStore, GitHub Analytics, Student Performance Analyzer)
     - Core technical skills card
     - Education timeline summary card
     - Creative card with real mandala artwork
     - Self-study card: *"Currently learning: Excel and Power BI"*
     - LeetCode card: *"100+ problems solved"*
     - Connect card

2. **About (`about.html`)**:
   - Personal story from Bagha Purana to Moga to Chitkara University.
   - Verified education timeline:
     - **Chitkara University (2023–2027)**: B.E. Computer Science and Engineering, **CGPA 8.44 / 10**
     - **Class 12th (2023)**: Schooling in Moga, Punjab — **87.0%**
     - **Class 10th (2021)**: Schooling in Moga, Punjab — **92.6%**
   - Guiding line: *"What keeps me going: building an independent future and making my parents proud."*
   - Future note: *"I'm excited to keep learning and see where software and data take me."*
   - Categorized technical skills matrix.

3. **Projects (`projects.html`)**:
   - **BookStore E-Commerce Platform**:
     - *Tech*: Node.js, Express.js, MongoDB, React 19, Razorpay
     - *Features*: Browse books by category, cart management, Razorpay & Cash on Delivery checkout, item-level returns and replacements, email password reset, admin panel.
     - *Image*: Real screenshot from `/images/bookstore-screenshot.jpg`.
   - **GitHub Analytics Dashboard**:
     - *Tech*: Node.js, MongoDB, React, Tailwind CSS
     - *Features*: Analyzes public repositories, 0–100 health score from PR activity, issue management and commit frequency, MongoDB TTL caching, daily snapshots, JWT login.
     - *Image*: Real preview from `/images/github-analytics-preview.svg`.
   - **Student Performance Analyzer**:
     - *Tech*: Python, Pandas, NumPy, SQLite, Matplotlib
     - *Features*: Analyzes academic data across 200+ students, detects attendance-performance patterns and at-risk students, generates charts and an HTML dashboard.
     - *Image*: Real screenshot from `/images/student-performance-screenshot.png`.

4. **Creative (`creative.html`)**:
   - Short note: *"Mandala art, basic painting, and things made from waste. Free time: badminton and foosball with friends, Sudoku, music."*
   - Masonry gallery of hand-drawn mandalas and upcycled crafts from `/images`.
   - Click-to-view instant lightbox modal (no animation, close on click outside or `Esc` key).

5. **Contact (`contact.html`)**:
   - GitHub: [https://github.com/Harshika2004](https://github.com/Harshika2004)
   - LinkedIn: [https://www.linkedin.com/in/harshika-57a366292/](https://www.linkedin.com/in/harshika-57a366292/)
   - Email: `harshika0525@gmail.com` (with one-click copy button)
   - Strictly no phone numbers and no forms.

---

## ✏️ Inventory of Remaining Placeholders (`[Edit me]`)

To customize specific links or assets as you build further, here is the list of locations you can update:

1. **Individual Project GitHub Repository URLs**:
   - In `projects.html` and `index.html`, project buttons currently point to your root GitHub profile (`https://github.com/Harshika2004`). If you want direct repository links (e.g., `https://github.com/Harshika2004/bookstore`), update the `href` on each project card's button.
2. **Student Performance Analyzer Screenshot**:
   - Currently using a clean, neutral SVG placeholder (`images/student-performance-placeholder.svg`). Replace this with your actual project screenshot or chart export when ready.
3. **Additional Artwork Photos**:
   - Additional photos of your mandalas or upcycled crafts can simply be dropped into `images/` and added as `<article class="pin-card gallery-card">` cards in `creative.html`.

---

## 🚀 Deployment Instructions

Because this website uses 100% static standard HTML, CSS, and vanilla JS with relative paths, it requires zero build commands or package managers.

### Option 1: GitHub Pages (Recommended)

1. **Create a GitHub Repository**:
   - Go to [github.com/new](https://github.com/new) and name your repository (e.g., `harshika-portfolio` or `Harshika2004.github.io`).
2. **Push your code**:
   Open a terminal in `C:\Users\harsh\OneDrive\Desktop\harshika-portfolio` (or use VS Code's integrated terminal / GitHub Desktop):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Minimal Pinterest-style portfolio"
   git branch -M main
   git remote add origin https://github.com/Harshika2004/YOUR-REPO-NAME.git
   git push -u origin main
   ```
3. **Enable GitHub Pages**:
   - In your repository on GitHub, click **Settings** → **Pages**.
   - Under **Build and deployment** > **Branch**, select `main` branch and `/ (root)` folder.
   - Click **Save**. Within 1–2 minutes, your live portfolio URL will be active at:
     `https://Harshika2004.github.io/YOUR-REPO-NAME/`

---

### Option 2: Netlify (Drag-and-Drop)

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the `harshika-portfolio` folder directly from your Desktop into the upload area on Netlify.
3. Your site deploys instantly with a free SSL certificate.
