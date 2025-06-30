# GEM App - README

This document provides a simple overview of the GEM application, its structure, and what each main part does.

## Project Overview

The GEM app is a website with several pages like Home, Campaigns, About, Blog, Pages, and Contact. It features a main hero section on the homepage and a navigation bar to switch between different pages. The website is designed to be responsive, meaning it should look good and work well on different devices like desktops, tablets, and mobile phones.

## How to Run This Project

This project is likely set up using a common web development tool like Vite with React. To run it on your computer:

1.  **Open a terminal** in the `GEM-app` folder.
2.  **Install necessary packages** (if you haven't already):
    ```bash
    npm install
    ```
3.  **Start the development server**:
    ```bash
    npm run dev
    ```
4.  Open your web browser and go to the address shown in the terminal (usually something like `http://localhost:5173`).

## Folder Structure

The main code for the app is inside the `GEM-app` folder. Here's a breakdown of important sub-folders:

*   **`public/`**: This folder contains static assets that are directly served by the web server. For example, `vite.svg` is here. You might put images or other files here that don't need to be processed by the build system.
*   **`src/`**: This is where most of the application's source code lives.
    *   **`assets/`**: Contains static assets like images (e.g., `react.svg`) that are imported and used within the JavaScript/JSX components.
    *   **`pages/`**: Contains individual React components for each main page of the website (e.g., `Home.jsx`, `About.jsx`).
    *   **Other files in `src/`**: These are the main JavaScript/JSX files and CSS files that make up the app's structure and styling.

## Key Files and What They Do

### JavaScript/JSX Files (`.jsx`)

These files define the structure and behavior of the website's components using React.

*   **`src/main.jsx`**:
    *   This is the entry point of the React application. It's where the main `App` component is rendered into the HTML.

*   **`src/App.jsx`**:
    *   This is the main component that holds the entire application.
    *   It manages which page is currently visible using a "state" variable (`currentPage`).
    *   It includes the `HeroSection` (the navigation bar and main banner) and the content of the currently selected page.
    *   It has a function (`navigateTo`) that updates the `currentPage` state when a navigation button is clicked.

*   **`src/HeroSection.jsx`**:
    *   This component displays the top navigation bar (with links like HOME, CAMPAIGNS, etc.) and, on the "home" page, a large hero banner.
    *   It handles clicks on the navigation links and tells `App.jsx` which page to show.
    *   It also includes logic for a mobile-friendly "hamburger" menu that appears on smaller screens.

*   **`src/pages/Home.jsx`**, **`src/pages/About.jsx`**, etc.:
    *   Each file in the `src/pages/` directory represents a specific page on the website.
    *   They contain the unique content for that page (text, images, specific layouts).
    *   For example, `Home.jsx` shows featured campaigns, while `About.jsx` might show information about the organization.

### CSS Files (`.css`)

These files control how the website looks (colors, fonts, layout, etc.).

*   **`src/index.css`**:
    *   Often used for global styles or resets that apply to the entire application.

*   **`src/App.css`**:
    *   Styles for the main `App` component and the overall application layout.
    *   Includes styles for the container that holds the page content below the hero/navigation section.
    *   Contains responsive design rules to make the main layout adapt to different screen sizes.

*   **`src/HeroSection.css`**:
    *   Styles specifically for the `HeroSection` component.
    *   This includes styling for the navigation bar, the logo, menu items, buttons, and the large hero banner content (title, subtitle, description).
    *   It has many responsive design rules (`@media` queries) to make the navigation bar and hero content look good on mobile phones, tablets, and desktops. This includes styles for the mobile hamburger menu.

*   **`src/PageStyles.css`**:
    *   Contains common styles that are used across multiple pages in the `src/pages/` directory.
    *   This helps keep a consistent look and feel for elements like page titles, descriptions, cards, grids, and forms.
    *   It also includes responsive design rules to ensure these common page elements adapt well to different screen sizes.

*   **`src/hero-override.css`**:
    *   This file might contain styles intended to override or customize some of the default styles from `HeroSection.css` or other base styles, possibly for specific variations or themes.

### Other Important Files

*   **`index.html`** (in the `GEM-app` root, alongside `src/`):
    *   This is the main HTML file for the application.
    *   React injects the application into a `<div>` element (usually with an `id` of `root`) inside this file.

*   **`package.json`**:
    *   Lists project dependencies (libraries the project uses, like React) and scripts (commands to run the project, like `npm run dev`).

*   **`vite.config.js`**:
    *   Configuration file for Vite, the build tool used for this React project. It tells Vite how to build and serve the application.

*   **`eslint.config.js`**:
    *   Configuration for ESLint, a tool that helps find and fix problems in JavaScript code, ensuring code quality and consistency.

This README should help anyone understand the basic structure and purpose of the GEM app's different parts.
