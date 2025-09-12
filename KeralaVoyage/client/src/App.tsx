import { useState } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Import components
import AppHeader from "@/components/AppHeader";
import BottomNavigation from "@/components/BottomNavigation";
import TripCard from "@/components/TripCard";
import TripRecorder from "@/components/TripRecorder";
import MonumentScanner from "@/components/MonumentScanner";
import ChatBot from "@/components/ChatBot";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import UserProfile from "@/components/UserProfile";

// Home Page Component
function HomePage() {
  const [isRecording, setIsRecording] = useState(false);
  
  // Mock recent trips data
  const recentTrips = [
    {
      tripNumber: "2025001",
      origin: "Kochi",
      destination: "Munnar", 
      startTime: "09:30 AM",
      endTime: "12:45 PM",
      transportMode: "car" as const,
      companions: 2,
      status: "completed" as const,
      distance: "132 km",
      duration: "3h 15m"
    },
    {
      tripNumber: "2025002", 
      origin: "Munnar",
      destination: "Alleppey",
      startTime: "02:15 PM", 
      transportMode: "bus" as const,
      companions: 1,
      status: "ongoing" as const,
      distance: "89 km"
    }
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-primary/10 to-chart-1/10 rounded-lg p-4 border">
          <h3 className="font-semibold mb-2">Quick Trip</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Start recording your journey instantly
          </p>
          <button 
            className="text-primary font-medium text-sm"
            onClick={() => setIsRecording(!isRecording)}
          >
            {isRecording ? 'Stop Recording' : 'Start Recording'} →
          </button>
        </div>
        
        <div className="bg-gradient-to-br from-chart-2/10 to-chart-4/10 rounded-lg p-4 border">
          <h3 className="font-semibold mb-2">Scan Monument</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Discover Kerala's cultural heritage
          </p>
          <button className="text-primary font-medium text-sm">
            Open Scanner →
          </button>
        </div>
      </div>

      {/* Recent Trips */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Recent Trips</h3>
        <div className="space-y-3">
          {recentTrips.map((trip, idx) => (
            <TripCard key={idx} {...trip} />
          ))}
        </div>
      </div>

      {/* Travel Insights */}
      <div className="bg-gradient-to-r from-primary/5 to-chart-1/5 rounded-lg p-4 border">
        <h3 className="font-semibold mb-2">Today's Travel Insight</h3>
        <p className="text-sm text-muted-foreground">
          You've traveled 47km today across 3 trips. Your most frequent route is Kochi → Munnar.
        </p>
      </div>
    </div>
  );
}

// Trips Page Component  
function TripsPage() {
  const [showRecorder, setShowRecorder] = useState(false);

  return (
    <div className="p-4">
      {showRecorder ? (
        <TripRecorder 
          onStartTrip={(data) => console.log('Trip started:', data)}
          onEndTrip={(data) => console.log('Trip ended:', data)}
        />
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">My Trips</h2>
            <button 
              onClick={() => setShowRecorder(true)}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium"
            >
              New Trip
            </button>
          </div>
          
          <div className="space-y-3">
            <TripCard 
              tripNumber="2025003"
              origin="Thekkady"
              destination="Kumily"
              startTime="10:00 AM"
              endTime="11:30 AM"
              transportMode="car"
              companions={3}
              status="completed"
              distance="25 km"
              duration="1h 30m"
            />
            <TripCard 
              tripNumber="2025004"
              origin="Wayanad"
              destination="Kozhikode"
              startTime="08:15 AM"
              transportMode="bus"
              companions={0}
              status="ongoing"
              distance="67 km"
            />
          </div>
        </div>
      )}
    </div>
  );
}

// Scanner Page Component
function ScannerPage() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Monument Scanner</h2>
      <MonumentScanner />
    </div>
  );
}

// Analytics Page Component  
function AnalyticsPage() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Travel Analytics</h2>
      <AnalyticsDashboard />
    </div>
  );
}

// Profile Page Component
function ProfilePage() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Profile</h2>
      <UserProfile />
    </div>
  );
}

// Main Router Component
function Router({ activeTab }: { activeTab: string }) {
  switch (activeTab) {
    case 'home': return <HomePage />;
    case 'trips': return <TripsPage />;
    case 'scanner': return <ScannerPage />;
    case 'analytics': return <AnalyticsPage />;
    case 'profile': return <ProfilePage />;
    default: return <HomePage />;
  }
}

// Main App Component
function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [showChatBot, setShowChatBot] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground">
          {/* App Header */}
          <AppHeader 
            isOnline={true}
            currentLocation="Kochi, Kerala"
            userName="Traveler"
          />

          {/* Main Content */}
          <main className="pb-20 min-h-[calc(100vh-80px)]">
            <Router activeTab={activeTab} />
          </main>

          {/* ChatBot Toggle */}
          <button
            onClick={() => setShowChatBot(!showChatBot)}
            className="fixed right-4 bottom-24 bg-primary text-primary-foreground p-3 rounded-full shadow-lg z-20"
            data-testid="button-toggle-chatbot"
          >
            🤖
          </button>

          {/* ChatBot */}
          {showChatBot && (
            <div className="fixed right-4 bottom-36 z-20">
              <ChatBot isOpen={showChatBot} />
            </div>
          )}

          {/* Bottom Navigation */}
          <div className="fixed bottom-0 left-0 right-0 z-10">
            <BottomNavigation 
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </div>

          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;