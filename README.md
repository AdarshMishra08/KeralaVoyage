# YAATHRI - Kerala Travel Companion

YAATHRI is an intelligent Kerala travel tracking and companion application designed to enhance your journey through God's Own Country. The app provides comprehensive travel analytics, cultural insights, and seamless trip management for both tourists and researchers.

## Features

### 🗺️ Smart Travel Tracking
- Automatic GPS-based trip detection and recording
- Multi-modal transport tracking (car, bus, train, plane)
- Real-time location services with offline capability
- Comprehensive trip analytics and patterns

### 🏛️ Cultural Discovery
- AI-powered monument and landmark scanner
- Multi-language support (English, Malayalam, Hindi)
- Rich cultural context and historical information
- Audio descriptions and guided experiences

### 📊 Travel Analytics
- Detailed journey insights and statistics
- Travel pattern recognition and recommendations
- Route optimization suggestions
- Personal travel timeline and memories

### 🤖 AI Travel Assistant
- Intelligent chatbot for travel recommendations
- Local insights and hidden gem discoveries
- Weather and seasonal travel advice
- Personalized itinerary suggestions

### 🔒 Privacy & Research Integration
- NATPAC research integration for Kerala transportation planning
- Comprehensive privacy controls and data consent management
- Anonymized data contribution for regional mobility studies
- Transparent data usage policies

## Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: PostgreSQL with Drizzle ORM
- **UI Components**: Radix UI, shadcn/ui
- **Maps & Location**: OpenStreetMap integration
- **State Management**: TanStack Query
- **Build Tool**: Vite

## Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Environment variables configured

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd KeralaVoyage
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Configure your DATABASE_URL and other required variables
```

4. Set up the database:
```bash
npm run db:push
```

5. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5000`

## Project Structure

```
KeralaVoyage/
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Application pages
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility functions
├── server/                # Express backend server
├── shared/                # Shared types and schemas
├── migrations/            # Database migrations
└── attached_assets/       # Static assets and images
```

## Key Components

### Core Features
- **TripRecorder**: Comprehensive trip tracking and management
- **MonumentScanner**: AI-powered cultural landmark recognition
- **AnalyticsDashboard**: Travel insights and pattern analysis
- **ChatBot**: Intelligent travel assistant
- **UserProfile**: Privacy controls and preferences

### Navigation
- **AppHeader**: Main navigation with location and settings
- **BottomNavigation**: Primary app navigation tabs
- **TripCard**: Individual trip display and management

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Kerala Tourism Department for cultural insights
- NATPAC for transportation research collaboration
- OpenStreetMap contributors for mapping data
- The React and Node.js communities for excellent tooling

---

**YAATHRI** - Your intelligent companion for exploring Kerala's wonders 🌴
