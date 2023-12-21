# My_ChatGPT

## Overview

Welcome to My_ChatGPT Project! This project utilizes Next.js 14, Tailwind CSS, Firebase, the OpenAI API, Google Authentication, and Vercel for deployment. This README provides an overview of the project structure, dependencies, and how to get started.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Deployment](#deployment)
-[About](#about)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The ChatGPT Project is a web application that leverages the power of OpenAI's GPT (Generative Pre-trained Transformer) models to provide a chat-based user interface. Users can interact with a chat interface powered by the OpenAI API, and the application is built using Next.js 14, Tailwind CSS for styling, Firebase for authentication, and Vercel for deployment.

## Features

- **Chat Interface:** Engage in a natural language conversation with OpenAI's GPT models.
- **User Authentication:** Secure authentication with Google Authentication via Firebase.
- **Modern Frontend:** Built with Next.js 14 for a fast and efficient user experience.
- **Stylish UI:** Utilizes Tailwind CSS for a clean and responsive user interface.
- **Serverless Deployment:** Hosted on Vercel for seamless deployment and scalability.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (included with Node.js)
- [Firebase](https://firebase.google.com/) account and project set up
- [OpenAI API](https://beta.openai.com/signup/) access
- [Vercel](https://vercel.com/) account

## Getting Started

1. Clone the repository:

   ```bash
   git clonehttps://github.com/Sylvan452/my_chat_gpt
   cd my_chat_gpt
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   Visit [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Configuration

### Firebase Configuration

1. Set up a Firebase project: [Firebase Console](https://console.firebase.google.com/).
2. Create a new web app and obtain the Firebase configuration.
3. Add the configuration to `firebase.js` in the project.

### OpenAI API Configuration

1. Sign up for the OpenAI API: [OpenAI](https://platform.openai.com).
2. Obtain the API key and add it to your environment variables or configuration file.

### Vercel Deployment

1. Set up a Vercel account: [Vercel](https://my-chat-gpt-or4y.vercel.app/).
2. Connect your GitHub repository to Vercel.
3. Configure environment variables (Firebase config, OpenAI API key) in Vercel settings.

## Deployment

Deploying the application to Vercel is as simple as pushing changes to your connected GitHub repository. Vercel will automatically deploy the updated version.

##About
My_ChatGPT is maintained ad developed by Obah Sylva: sylvan452@gmail.com

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests.


## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the license terms.

Happy coding!

