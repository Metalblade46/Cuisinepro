# CuisinePro

A modern web application for managing and exploring recipes, built with a microservices architecture.

## Features

### Server (Backend)

- RESTful API built with Bun and TypeScript
- Efficient request handling and response processing
- Type-safe API endpoints
- Built-in error handling and validation
- Scalable architecture

### UI (Frontend)

- Modern Next.js application with TypeScript
- Responsive and intuitive user interface
- Server-side rendering for optimal performance
- Real-time updates and interactions
- Optimized for both desktop and mobile devices

## Prerequisites

- [Bun](https://bun.sh/) (v1.0.0 or higher)
- [Node.js](https://nodejs.org/) (v20 or higher)
- [Docker](https://www.docker.com/) and Docker Compose (for containerized setup)

## Setup and Running

### Option 1: Local Development Setup

1. Clone the repository:

```bash
git clone https://github.com/Metalblade46/Cuisinepro
cd Cuisinepro
```

2. Install dependencies for both projects:

```bash
# Install server dependencies
cd server
bun install

# Install UI dependencies
cd ../ui
bun install
```

3. Start the server:

```bash
cd server
bun run dev
```

4. In a new terminal, start the UI:

```bash
cd ui
bun run dev
```

The server will be available at `http://localhost:3001` and the UI at `http://localhost:3000`.

### Option 2: Docker Setup

1. Clone the repository:

```bash
git clone https://github.com/Metalblade46/Cuisinepro
cd Cuisinepro
```

2. Build and start the containers:

```bash
docker-compose up
```

This will:

- Build both server and UI containers
- Start the server on port 3001
- Start the UI on port 3000
- Set up the necessary networking between services

The application will be available at:

- UI: `http://localhost:3000`
- Server: `http://localhost:3001`

## Development

### Server Development

- The server uses Bun for fast development and execution
- TypeScript for type safety
- Hot reloading enabled in development mode

### UI Development

- Next.js with TypeScript
- Tailwind CSS for styling
- Hot reloading enabled in development mode

## Environment Variables

### Server

Create a `.env` file in the server directory:

```env
PORT=3001
NODE_ENV=development
```

### UI

Create a `.env` file in the UI directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## Available Scripts

### Server

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server

### UI

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
