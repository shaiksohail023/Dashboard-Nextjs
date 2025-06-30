**CRED Garage Inspired Dashboard**
A responsive and modern web dashboard inspired by CRED Garage, built with React (Next.js), Tailwind CSS, ShadCN, and Framer Motion.

✨ Features Overview
This dashboard includes the following functionalities:

🌓 Dark/Light Mode Toggle: A theme toggle that allows users to switch between dark and light modes. The dashboard defaults to dark mode on initial load, and the user's preference is saved in local storage.

👤 User Profile Dropdown: A compact circular avatar icon displayed in the header. Hovering over this icon opens a smooth dropdown containing detailed user profile information (avatar, name, level, and gamification XP progress).

🎁 Benefits Section (Card Tile Layout): Displays a grid of exclusive benefits and offers using a card-tile layout.

Mock API Integration: Data for the benefits is fetched from a simulated API layer (lib/api.js) to demonstrate asynchronous data loading.

Loading Skeletons: While data is loading, skeleton components are displayed as placeholders, improving user experience.

Smooth Transitions & Animations: Benefit cards has effects on hover, powered by Framer Motion.

💎 Reward Points Progress: Representation of the user's reward points using a dynamic circular progress bar using Recharts Library.

Recharts Integration: Utilizes recharts to render the radial bar chart.

Loading Skeleton: Displays a full-width skeleton placeholder while reward points data is being loaded.

Hover Effects: The entire reward points card scales up slightly on hover using Framer Motion.

🎨 Custom Theming: The primary accent color (used for the CRED Garage title, progress bars, and icons) has been customized to a vibrant green.

💻 Tech Stack
1. React 19
2. Next.js 15 
3. Tailwind CSS v3
4. ShadCN
5. Framer Motion
6. Lucide React: It is used for Icons in Dashboard.
7. Recharts

⚙️ Setup Instructions
Follow these steps to get the project up and running on your local machine.

Prerequisites
Node.js (v18.x or later recommended)
npm (v9.x or later)

Installation

first create the folder and open that folder in cmd and type command : npx create-next-app@latest 
Then it will ask project name give the name for project and give extra details as asked.

Ensure Tailwind CSS is correctly configured (manual check/fix):
Verify tailwind.config.js
Command for initializing the tailwind is :
npx tailwindcss init -p

Then, manually update its content as provided in the project's tailwind.config.js 

Verify app/globals.css

Initialize & Add ShadCN Components:

npx shadcn@latest init
npx shadcn@latest add button card skeleton

Start the development server using the command: npm run dev

Open your browser and navigate to http://localhost:3000.

🌐 Live Demo

Link to Live Demo: https://dashbaord-next.netlify.app/

💡 Bonus Ideas (Implemented)
This project contains several bonus ideas from the assignment :

Mock API / Mock Data Loading Layer: Implemented using lib/api.js to get data for benefits.

React Context for State Management: Used for the Dark/Light mode theme management (context/ThemeContext.js).

Rechart Library for Reward Points: recharts has been integrated for the circular reward points progress.

Personal Touch on UI: Custom primary green color scheme and some animations.
