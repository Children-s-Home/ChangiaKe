# Changia

This is a short documentation for the developer to come up to speed with the project structure.  
## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Coding Conventions](#coding-conventions)
- [Deployment](#deployment)
- [Contributing](#contributing)


## Project Overview
Changia is a startup that connects various care centers with the help they need. The project aims to improve the connection between the centers and willing help in form of volunteers or donators.


## Technologies Used
- **Vite**: Bundler used for faster builds and development.
- **TypeScript**: Strongly typed programming language, refer to the `tsconfig.json` file for configuration options. There might be JavaScript files as the project transitioned from JS to TS.
- **React**: Primary framework for building the user interface. Check the `package.json` for the version.
- **Ant Design**: Component library used for UI elements.
- **Shadcn**: Extended component library to enhance Ant Design components.
- **Sass**: CSS preprocessor used with SCSS files for styling.
- **Axios**: Library used for making API requests. APIs are declared in the `helpers` folder.
- **Tailwind CSS**: Utility-first CSS framework used to style Shadcn components.
- **Figma**: Design files are available on Figma. Contact the project admin for access.

## Project Structure
- **/src**: Contains the source code for the project.
  - **/components**: shadcn components
  - **/routes**: Different route defenitions of the application.
  - **/sass**: Global and component-specific stylesheets.
  - **/helpers**: Utility functions and helpers.
  - **/hooks**: Custom React hooks.
  - **/redux**: redux store and slices.
  - **/views**: Sections and pages of the ui, actual components
- **/public**: Static assets like images and fonts.
- **/assets**: Any static assets such as images and icons.

## Setup Instructions
1. **Clone the repository**:
   ```bash
   	  git https://github.com/Children-s-Home/client.git
   ```
2. **Change directory**:
   ```bash
     cd client
   ```
3.  **Install dependencies**:
   ```bash
    yarn install
   ```
4.  **Run the development server**:
   ```bash
     yarn dev
   ```

## Coding Conventions
- Use [Prettier](https://prettier.io/) for code formatting.
- Linting is handled by [ESLint](https://eslint.org/). Run `yarn lint` to check for issues.

## Deployment
- Build the project using `yarn build`.
- Deploy the contents of the `dist` folder to your hosting provider.

Refer to the deployment documentation specific to your hosting provider for more details.  

## Contributing
- Fork the repository and create a feature branch (`git checkout -b feature-branch`).
- Commit your changes (`git commit -am 'Add new feature'`).
- Push to the branch (`git push origin feature-branch`).
- Open a pull request with a detailed description of your changes.

