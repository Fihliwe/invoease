# Invoice Management Platform

A modern, user-friendly platform for managing invoices, clients, and products, built with the latest version of Next.js, MongoDB, and JavaScript. This platform allows users to create, store, and manage invoices efficiently with additional features for product management, client storage, and user authentication.

## Features

- **Invoice Management**: Easily create and manage invoices with custom line items for products/services.
- **Authentication**: Users can sign up, sign in, and securely access their accounts to manage their invoices.
- **Responsive Design**: Optimized for desktop and mobile users.
- **Navigation Bar**: Smooth navigation to various sections of the platform.
- **Testimonials, Pricing, and Contact Sections**: Added to enhance the user experience and present important information.
- **Tech Stack**: Built using Next.js for the front-end, with MongoDB as the database.

## Installation

### Prerequisites

- Node.js (v18 or above)
- MongoDB (local or cloud-based)

### Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/Fihliwe/invoease
    cd invoease
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env.local` file and add the following environment variables:
    ```bash
    MONGODB_URI=your-mongodb-uri
    NEXTAUTH_SECRET=your-nextauth-secret
    ```

4. Run the development server:
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Usage

1. **Sign In/Sign Up**: Create an account to access the platform.
2. **Client Management**: Store and manage client information on the dedicated client page.
3. **Create Invoices**: Navigate to the invoice creation section to generate new invoices.
4. **Product Management**: Use the product management form to add services/products to your invoices.
5. **Responsive Design**: The platform is fully responsive and adapts to all screen sizes.

## Technologies Used

- **Next.js**: Framework for server-side rendered React applications.
- **MongoDB**: NoSQL database used for storing client and invoice data.
- **NextAuth.js**: Authentication library for handling secure sign-in and sign-up flows.
- **JavaScript (ES6+)**: Programming language used for both the front-end and back-end logic.

## Project Structure

