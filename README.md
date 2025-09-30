# Nice Gadgets Store Website
The **Nice Gadgets Store** is a front-end application built to demonstrate a modern, responsive, and user-centric e-commerce experience. The project showcases a clean and intuitive interface where users can navigate a diverse catalog of electronics and accessories.

## Live Demo
Experience the live website: [Nice Gadgets Store Demo](https://fs-jun25-team-4-tech-check.github.io/nice-gadgets/)

## Key features include:
- **Fully Responsive Design:** A seamless experience across all devices, from mobile phones to desktops.
- **Product Catalog:** Browse a wide range of electronics and accessories with ease.
- **Search and Sorting Options:** A search bar and various sorting options to find products quickly.
- **Product Variations:** Select different options for products, such as color and storage capacity.
- **Shopping Cart:** A fully functional cart system to add and manage desired items.
- **Favorites System:** Users can save items to a "favorites" list for later viewing.
- **Static Pages:** Informative "Contacts" and "Rights" pages.

# Design Reference
- [Design Reference (Light)](https://www.figma.com/design/T5ttF21UnT6RRmCQQaZc6L/Phone-catalog--V2--Original?node-id=0-1&t=0ASdgDdVnZ46JKIX-1)
- [Design Reference (Dark)](https://www.figma.com/design/BUusqCIMAWALqfBahnyIiH/Phone-catalog--V2--Original-Dark?node-id=0-1&t=KpCQfE8kWqGPnqd1-1)

# Project Dashboard
- [Project Dashboard](https://derpedcatto.notion.site/Team-Tech-Check-Project-26c3522d8755805b87b8efe18277a5ce?source=copy_link)

# Technologies Used
This project is built with a modern tech stack. For a complete and exact list of dependencies and their versions, please see the `package.json` file.
### Core
- **React** – A JavaScript library for building user interfaces.
- **TypeScript** – A typed superset of JavaScript.
- **Sass/SCSS** – A powerful CSS preprocessor.
### Data & State Management
- **Supabase Client** – For backend communication and authentication.
- **TanStack Query (React Query)** – For server-state management and data fetching.
- **Zustand** – For client-side state management.
### UI/UX
- **React Router** – For client-side routing and navigation.
- **Radix UI** – For unstyled, accessible UI primitives.
- **Swiper** / **Embla Carousel** – For creating carousels and sliders.
- **React Icons** – For including a wide range of icons.
### Development & Deployment
- **Vite** – For a fast development and build experience.
- **ESLint** & **Prettier** – For code linting and formatting.
- **Husky** – For managing Git hooks.
- **GitHub Pages** – For static site hosting.

# Getting Started
1. Clone the repository:  
git clone https://github.com/fs-jun25-team-4-tech-check/nice-gadgets.git
cd project-name  

2. Install dependencies:  
npm install  
*or*  
yarn install  

3. Set up environment variables:
Create a `.env` file in the root of the project and add your Supabase URL and Anon Key. You can find these in your Supabase project dashboard.

VITE_SUPABASE_URL=your-supabase-project-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key

(or use mock API and data that is present locally)

4. Run the project locally:
npm run dev
