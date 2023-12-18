# NBA League Data App

![Logo](public/cover.jpg)

## Project Overview

Welcome to the NBA League Data App! This project is a responsive web application designed to showcase NBA team and player information. Leveraging the power of Next.js, it offers an optimized and visually appealing user interface. The project focuses on various optimizations, UI design, and key technical learnings.

## Optimizations

- **Responsive Design**: Ensures optimal viewing experience on all devices, including mobiles, tablets, and desktops.
- **Next.js Integration**: Utilizes GetStaticProps for improved performance.
- **Secure API Key Handling**: Safely hides the host and key using process.env for enhanced security.
- **Image Optimization**: Utilizes Next.js for optimizing images, enhancing the overall performance.
- **Adobe Photoshop Enhancements**: Employs Adobe Photoshop 2022 for image manipulation, including curve adjustments, saturation, noise, and distortions for both Team and Player Images.
- **Search Feature**: Implements a search functionality, clearing the search when the value is empty and navigating to team or player details upon selection.
- **Navigation Menus**: Adopts a Burger Menu for smaller screens and a regular navigation menu for desktop screens.
- **Loading Screen Animation**: Features a blurry loading screen with animations to enhance the user experience.
- **UI Design Inspiration**: Draws design inspiration from [Kostia Osadchy](https://dribbble.com/shots/4747073-NBA-Player-Profile-Redesign).

## Screenshots

![App Screenshot](public/player.jpg)

## Lessons Learned

### Technologies and Concepts Explored

- **Proptypes & Components**: Utilized for structured and type-checked components.
- **getServerSideProps ([link id context])**: Employed to fetch dynamic data for improved server-side rendering.
- **Hooks Usage**: Incorporated useEffect, useRef, and useState hooks for state management.

## Challenges Faced and Overcame

- **Understanding Next.js Functions**: Initially faced challenges with getStaticProps and getServerSideProps, but overcame them through online resources and revisiting relevant learning materials.
- **API Key Handling**: Overcame issues related to API key handling in Next.js, ensuring it is securely hidden and accessible when needed.
- **Code Refactoring**: Discovered and fixed issues, such as placing the API key in both parent and children components, ensuring correct implementation.

## Acknowledgements

- [Kostia Osadchy](https://dribbble.com/shots/4747073-NBA-Player-Profile-Redesign): Inspirational web design for the project.

## Author

- [**@bird556**](https://github.com/bird556) 🙋‍♂️
