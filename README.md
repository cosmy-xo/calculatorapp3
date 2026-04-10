# Calculator App

A modern, responsive web-based calculator application built with React and Vite.

## Features

- Basic arithmetic operations (addition, subtraction, multiplication, division)
- Clear and delete functionality
- Decimal number support
- Fully responsive design that works on all devices
- Clean and intuitive user interface

## Getting Started

### Prerequisites

- Node.js (version 18.0.0 or higher)
- npm (version 8.0.0 or higher)

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Running the Application

To start the development server:

```bash
npm start
```

The app will open at [http://localhost:3000/](http://localhost:3000/)

### Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `build` folder.

### Running Tests

To run the test suite:

```bash
npm test
```

## Technology Stack

- **React** - UI library
- **Vite** - Build tool and development server
- **CSS3** - Styling with responsive design
- **Vitest** - Testing framework

## Project Structure

```
src/
  ├── components/
  │   ├── Calculator.jsx    # Main calculator component
  │   ├── Display.jsx       # Calculator display
  │   └── Button.jsx        # Calculator button component
  ├── App.jsx               # Root component
  ├── App.css              # Global styles
  └── index.jsx            # Entry point
```

## Usage

1. Click number buttons to input numbers
2. Click operation buttons (+, -, ×, ÷) to perform calculations
3. Click "=" to see the result
4. Click "C" to clear everything
5. Click "DEL" to delete the last digit

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.
