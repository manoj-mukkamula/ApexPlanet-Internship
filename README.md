# ApexPlanet Web Development Internship

**Intern:** Mukkamula Manoj | **Duration:** 45 Days | **Feb - Apr 2026**

This repo has all my task submissions from the ApexPlanet Software Pvt. Ltd. Web Development Internship. The program covers HTML, CSS, and JavaScript from the ground up, and each task builds on the previous one. By the end, I built a complete e-commerce web app from scratch.

---

## All Tasks at a Glance

| S.No | Task | Live Demo | Code |
|--------|------|-----------|------|
| 1. | Basics of Web Development | [Portfolio](https://manoj-mukkamula.github.io/ApexPlanet-Internship/Task%201/) | [Task 1](https://github.com/manoj-mukkamula/ApexPlanet-Internship/tree/main/Task%201) |
| 2. | Intermediate HTML, CSS & JS | [TaskFlow](https://manoj-mukkamula.github.io/ApexPlanet-Internship/Task%202/) | [Task 2](https://github.com/manoj-mukkamula/ApexPlanet-Internship/tree/main/Task%202) |
| 3. | Advanced Styling & JavaScript | [DevToolkit](https://manoj-mukkamula.github.io/ApexPlanet-Internship/Task%203/) | [Task 3 ](https://github.com/manoj-mukkamula/ApexPlanet-Internship/tree/main/Task%203) |
| 4. | Full Project Implementation | [Web Trio](https://manoj-mukkamula.github.io/ApexPlanet-Internship/Task%204/) | [Task 4](https://github.com/manoj-mukkamula/ApexPlanet-Internship/tree/main/Task%204) |
| 5. | Final Project and Optimization | [ShopEase](https://manoj-mukkamula.github.io/ApexPlanet-Internship/Task%205/) | [Task 5](https://github.com/manoj-mukkamula/ApexPlanet-Internship/tree/main/Task%205) |

---

## Tech Used

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-181717?style=flat&logo=github&logoColor=white)

---

## Task Breakdown

### Task 1 - Basics of Web Development
**Days 1-9 | [Personal Portfolio](https://manoj-mukkamula.github.io/ApexPlanet-Internship/Task%201/) | [LinkedIn Post](https://www.linkedin.com/posts/manoj-mukkamula_webdevelopment-frontenddevelopment-html-ugcPost-7433927107803688960-pemn)**

Started with the basics. Built a simple webpage using semantic HTML, added CSS for styling, and wrote a small JavaScript function to handle a button click.

- Semantic HTML5 structure with headings, paragraphs, images, and links
- CSS colors, fonts, spacing, and basic layout
- A button that triggers a JavaScript alert

---

### Task 2 - Intermediate HTML, CSS and JavaScript
**Days 10-18 | [TaskFlow](https://manoj-mukkamula.github.io/ApexPlanet-Internship/Task%202/) | [Linkedin post](https://www.linkedin.com/posts/manoj-mukkamula_webdevelopment-frontenddevelopment-html-ugcPost-7437202121315262464-iTWS)**

Built a project called **TaskFlow** with three separate features in one place.

- Contact form with input validation using JavaScript (checks required fields and email format)
- Responsive layout using Flexbox for the navbar and CSS Grid for content, with media queries for different screen sizes
- A dynamic to-do list where you can add and remove tasks through DOM manipulation

---

### Task 3 - Advanced Styling and JavaScript
**Days 19-27 | [DevToolkit](https://manoj-mukkamula.github.io/ApexPlanet-Internship/Task%203/) | [Linkedin post](https://www.linkedin.com/feed/update/urn:li:activity:7440331234481958912/?originTrackingId=gFfpRYc2YIRgUcBx7hBaeA%3D%3D)**

Built **DevToolkit**, a single-page app with two real features that use external APIs and advanced JS.

- **GitHub Profile Finder**: fetches live data from the GitHub REST API and displays profile info, repos, and follower counts
- **Web Dev Quiz**: an interactive quiz with a timer, question progress tracking, and a final score
- Dark theme UI, responsive across all screen sizes, with proper loading states and error handling

---

### Task 4 - Full Project Implementation
**Days 28-36 | [Web Trio](https://manoj-mukkamula.github.io/ApexPlanet-Internship/Task%204/) | [Linkedin post](https://www.linkedin.com/posts/manoj-mukkamula_webdevelopment-frontenddevelopment-html-ugcPost-7443736812839329792-NSQm)**

The biggest task before the final one. I built three complete apps and connected them through a personal portfolio website.

**Portfolio Website** (main entry point)
- Sticky navbar with blur effect and scroll-based active link highlighting
- Hamburger menu for mobile with smooth animation
- Scroll reveal animations using IntersectionObserver
- Projects section with filter tabs (All / Internship / Personal)
- Fully responsive on mobile, tablet, and desktop

**TechStore - Product Listing Page**
- 24 tech products across 6 categories with real Unsplash images
- Live search, category filter, price range slider, and sort options
- Active filter tags, loading spinner, and a "No results found" state

**NoteVault - Task Manager**
- Full CRUD: add, edit, delete, and mark tasks complete
- Filter by status (All / Pending / Completed) and sort by date or name
- Task stats, timestamps, localStorage persistence, and XSS protection

---

### Task 5 - Final Project and Optimization
**Days 37-45 | [ShopEase](https://manoj-mukkamula.github.io/ApexPlanet-Internship/Task%205/) | [Linkedin post](https://github.com/manoj-mukkamula/ApexPlanet-Internship/tree/main/Task%205)**

Built **ShopEase**, a fully functional e-commerce frontend as my capstone project. This is built with plain HTML, CSS, and Vanilla JavaScript - no frameworks, no backend.

**Product Listing Page**
- 24 products across 5 categories (Electronics, Clothing, Footwear, Accessories, Home and Living)
- Live search with 300ms debounce, category filter, price range slider, and 5 sort options
- Product details modal: click any card to see full image, description, price, and discount
- Add to Cart with "In Cart" state that persists across page navigation
- Collapsible filter panel on mobile using a toggle button

**Cart Page**
- Increase/decrease quantity, remove items, and see a live order summary
- Auto 10% discount and free delivery logic (above Rs.999)
- Cart saved in localStorage so it stays even after refresh
- Clean empty cart state with a continue shopping button

**Performance and Compatibility**
- `loading="lazy"` on all images
- Debounced search and slider inputs to avoid unnecessary DOM updates
- `onerror` fallback on all images so no broken image errors appear in console
- Tested on Chrome, Firefox, and Safari on both desktop and mobile
  
---

## Repository Structure

```
ApexPlanet-Internship/
├── Task 1/     Basics of Web Development
├── Task 2/     Intermediate HTML, CSS and JS (TaskFlow)
├── Task 3/     Advanced Styling and JS (DevToolkit)
├── Task 4/     Full Project Implementation (Portfolio + TechStore + NoteVault)
├── Task 5/     Final Project and Optimization (ShopEase)
└── README.md
```

---

## What I Did in This Internship

I handled everything in each task from start to finish: planning the structure, writing the HTML, styling with CSS, adding JavaScript functionality, testing across screen sizes and browsers, and deploying to GitHub Pages. Nothing was copied from templates. Each project was built from scratch based on the task requirements.

---

## Key Learnings

This internship pushed me to actually build things rather than just follow tutorials. A few things I got much better at:

- Writing clean, semantic HTML and understanding why structure matters
- Using Flexbox and CSS Grid properly for real layouts, not just toy examples
- DOM manipulation and event handling in JavaScript without relying on libraries
- Working with the Fetch API and handling async operations
- localStorage for persisting data across sessions
- Debouncing, lazy loading, and other small but important performance techniques
- Making projects actually work on mobile, not just look okay in DevTools
- Keeping code organized across multiple files with clear separation of concerns

---

## Author

**Mukkamula Manoj**
Final Year B.Tech CSE, AAR Mahaveer Engineering College (JNTUH, 2026)
Web Development Intern, ApexPlanet Software Pvt. Ltd.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/manoj-mukkamula/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/manoj-mukkamula)
[![Email](https://img.shields.io/badge/Email-D14836?style=flat&logo=gmail&logoColor=white)](mailto:mukkamulamanoj@gmail.com)

---

## Thank You

Thank you to the team at **ApexPlanet Software Pvt. Ltd.** for putting together a well-structured program. The task progression made sense, and working on real projects instead of just exercises made a genuine difference in how I think about building for the web. I'm leaving this internship with better skills and more confidence than I came in with.

---

## License

This repository is for learning and portfolio purposes. Feel free to look through the code. If you want to use anything, a mention would be appreciated.
