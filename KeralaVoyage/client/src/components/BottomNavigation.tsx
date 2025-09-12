import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, Route, Camera, BarChart3, User, Plus } from "lucide-react";

interface BottomNavigationProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export default function BottomNavigation({ 
  activeTab = "home", 
  onTabChange 
}: BottomNavigationProps) {
  const [currentTab, setCurrentTab] = useState(activeTab);

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
    onTabChange?.(tab);
    console.log('Tab changed to:', tab);
  };

  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'trips', icon: Route, label: 'Trips' },
    { id: 'scanner', icon: Camera, label: 'Scanner' },
    { id: 'analytics', icon: BarChart3, label: 'Analytics' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="relative">
      {/* Floating Action Button for Quick Trip */}
      <Button
        size="icon"
        className="absolute -top-8 left-1/2 transform -translate-x-1/2 h-14 w-14 rounded-full shadow-lg z-10"
        data-testid="button-add-trip"
        onClick={() => console.log('Quick trip recording started')}
      >
        <Plus className="h-6 w-6" />
      </Button>

      <nav className="flex items-center justify-around p-2 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;
          
          return (
            <Button
              key={tab.id}
              variant="ghost"
              size="sm"
              className={`flex flex-col gap-1 h-auto py-2 px-3 ${
                isActive ? 'text-primary' : 'text-muted-foreground'
              }`}
              onClick={() => handleTabChange(tab.id)}
              data-testid={`button-nav-${tab.id}`}
            >
              <Icon className={`h-5 w-5 ${isActive ? 'text-primary' : ''}`} />
              <span className="text-xs">{tab.label}</span>
            </Button>
          );
        })}
      </nav>
    </div>
  );
}