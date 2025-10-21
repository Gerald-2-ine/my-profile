# 🌸 Monalisa’s Profile & Contact Webpage

A simple, accessible, and responsive two-page website built with **HTML, CSS, and Vanilla JavaScript**.  
This project was developed as part of the **HNG Internship Stage 1 Frontend Task** — extending the Stage 0 single card into a multi-page application.

---

## 🧠 Overview

This web project features:
- A **Profile Page (index.html)** that showcases personal details and social links.
- A **Contact Page (contact.html)** with form validation and accessibility features.

The design follows a **mobile-first approach**, ensuring seamless responsiveness across all screen sizes.  
Form validation is handled using clean **Vanilla JavaScript**, with dynamic error and success messages.

---

## ✨ Features

- ✅ **Semantic HTML** — uses proper HTML5 structure for accessibility.
- 💬 **Contact Form Validation** — ensures all fields are correctly filled before submission.
- 🧩 **ARIA Associations** — enhances screen reader usability.
- 🪞 **Responsive Design** — adapts beautifully to mobile, tablet, and desktop screens.
- 🎨 **Clean UI/UX** — soft gradients, rounded corners, and modern hover effects.
- 🔄 **Smooth Animations** — subtle transitions for a polished feel.

---

## 🧱 Project Structure

📁my-profile
│
|── images
  |──avatar.jpg
  |──profile.jpg
├── index.html # Profile page
├── contact.html # Contact page
│
├── style.css # Styles for Profile page
├── contact.css # Styles for Contact page
│
├── contact.js # Contact form validation logic
│
└── README.md # Project documentation


---

## 🧩 Contact Page Validation Details

| Field | Data Test ID | Validation |
|-------|---------------|------------|
| Full Name | `test-contact-name` | Required |
| Email | `test-contact-email` | Must be a valid email |
| Subject | `test-contact-subject` | Required |
| Message | `test-contact-message` | Minimum of 10 characters |
| Success Message | `test-contact-success` | Displays only after valid submission |
| Error Messages | `test-contact-error-<field>` | Linked with `aria-describedby` |

---

## 🧪 Accessibility & Best Practices

- Each input field includes a `<label>` connected with the `for` attribute.  
- Error messages use `aria-describedby` for screen readers.  
- Keyboard navigable with visible focus outlines.  
- Uses semantic HTML elements like `<main>`, `<section>`, and proper heading hierarchy.

---

## 🚀 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone git@github.com:Gerald-2-ine/my-profile.git
2. Navigate to the project directory:
   cd my-profile
3. Open index.html in your browser to view the profile page.
Use the “Contact Me” button to navigate to the contact form.

🌐 Live Demo

🔗 View Live Project: https://Gerald-2-ine.github.io/my-profile

🧰 Technologies Used

HTML5 — for structure

CSS3 — for styling and responsiveness

JavaScript (Vanilla) — for form validation and interactivity

👩🏽‍💻 Author

Geraldine Ugonabo (Monalisa)
Frontend Developer | Computer Science Graduate

📫 Connect with me:

Twitter - https://x.com/GUgonabo?t=f9Vo13jQphZt-2L0TqG6-w&s=09

GitHub - https://github.com/Gerald-2-ine/my-profile

LinkedIn - https://www.linkedin.com/in/geraldine-ugonabo

💭 Reflections

“This stage helped me better understand semantic HTML, accessibility principles, and client-side form validation.
It was a great learning curve — balancing functionality with a clean, modern UI.”

🪶 License

This project is open-source and available under the MIT License.
Feel free to fork, modify, and learn from it. 🌸

