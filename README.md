# React Logitravel Test

## Features

- **Modern Tech Stack**: React 19, TypeScript, Vite
- **UI Framework**: Material-UI (MUI) v7 with custom theming
- **State Management**: Zustand with localStorage persistence
- **Design System**: Atomic Design Pattern (Atoms, Molecules, Organisms, Templates)
- **Testing**: Comprehensive test suite with Vitest and React Testing Library

## Tech Stack

### Core Dependencies

- **React** 19.1.1 - Modern React with concurrent features
- **TypeScript** 5.6.2 - Type-safe development
- **Vite** 6.0.3 - Fast build tool and dev server
- **Material-UI** 7.3.1 - Comprehensive React UI framework
- **Zustand** 5.0.7 - Lightweight state management
- **@fontsource/montserrat** - Custom typography

### Testing & Quality

- **Vitest** 3.2.4 - Fast unit testing framework
- **React Testing Library** 16.3.0 - Component testing utilities
- **ESLint** - Code linting and quality enforcement
- **jsdom** - DOM testing environment

## Getting Started

### Prerequisites

- Node.js 18+
- Yarn or npm

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd react-logitravel-test
```

2. **Install dependencies**

```bash
yarn install
```

3. **Start development server**

```bash
yarn dev
```

4. **Run tests**

```bash
yarn test
```

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn test` - Run test suite
- `yarn test --coverage` - Run tests with coverage report
- `yarn lint` - Run ESLint

## Testing Commands

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test --watch

# Run tests with coverage
yarn test --coverage

# Run specific test file
yarn test items-card.test.tsx

# Run tests matching pattern
yarn test --run add-item
```

## License

This project is created for demonstration purposes as part of a technical assessment.

---
