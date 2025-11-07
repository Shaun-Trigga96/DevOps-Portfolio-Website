# **Thabiso Matsaba \- DevOps Portfolio Website**

This repository contains the source code for my personal DevOps portfolio website, built with React and hosted on Firebase.

## **Overview**

This is a single-page application (SPA) designed to showcase my skills, projects, certifications, and work experience as a DevOps Engineer. It's built to be fast, modern, and fully responsive.

## **Technologies Used**

* **Frontend:** [React](https://react.dev/) (with Vite)  
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)  
* **Icons:** [Lucide React](https://lucide.dev/)  
* **Hosting & Storage:** [Firebase Hosting](https://firebase.google.com/products/hosting) & [Firebase Storage](https://firebase.google.com/products/storage)

## **Project Structure**

/  
├── dist/                \# (Build output) This is the folder deployed to Firebase  
├── node\_modules/        \# (Installed dependencies)  
├── public/              \# (Static assets for Vite)  
├── src/  
│   ├── App.jsx          \# (Main React application component and all sub-components)  
│   ├── index.css        \# (Tailwind CSS entry point)  
│   └── main.jsx         \# (React app entry point)  
├── .firebaserc          \# (Firebase project configuration)  
├── firebase.json        \# (Firebase Hosting rules)  
├── index.html           \# (Main HTML template)  
├── package.json         \# (Project dependencies and scripts)  
├── postcss.config.js    \# (Tailwind config)  
├── tailwind.config.js   \# (Tailwind config)  
└── README.md            \# (You are here\!)

## **Local Setup and Development**

To run this project on your local machine, follow these steps:

1. **Clone the repository:**  
   git clone \[https://github.com/Shaun-Trigga96/DEVOPs-PORTFOLIO-WEBSITE.git\](https://github.com/Shaun-Trigga96/DEVOPs-PORTFOLIO-WEBSITE.git)  
   cd DEVOPs-PORTFOLIO-WEBSITE

2. Install all dependencies:  
   (This installs React, Vite, Tailwind, Lucide, and Firebase tools)  
   npm install

3. **Run the local development server:**  
   npm run dev

   This will start a hot-reloading server, usually at http://localhost:5173/.

## **How to Deploy**

This project is configured for one-command deployment to Firebase Hosting.

1. Build the application:  
   This command creates the optimized dist folder.  
   npm run build

2. Deploy to Firebase:  
   This command uploads the contents of the dist folder to your live hosting URL.  
   firebase deploy

### **Firebase Setup (First Time)**

If you are setting this up for the first time in a new Firebase project, you will need to:

1. **Log in to Firebase:**  
   firebase login

2. **Initialize Firebase:**  
   firebase init hosting

   * Select Use an existing project and choose your project.  
   * Set your public directory to: dist  
   * Configure as a single-page app: Yes

### **Populating Content**

All website content (text, project info, links) is managed in the portfolioData object at the top of the src/App.jsx file.

All assets (CV, profile image, project images) must be uploaded to **Firebase Storage**. The public URLs from Storage must then be pasted into the portfolioData object.