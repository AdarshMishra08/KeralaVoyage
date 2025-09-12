import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Moon, Sun, MapPin, Wifi, WifiOff } from "lucide-react";
import logoImage from "@assets/WhatsApp Image 2025-09-11 at 15.13.42_890b83ef_1757607818655.jpg";

interface AppHeaderProps {
  isOnline?: boolean;
  currentLocation?: string;
  userName?: string;
  userAvatar?: string;
}

export default function AppHeader({ 
  isOnline = true, 
  currentLocation = "Kochi, Kerala",
  userName = "Traveler",
  userAvatar 
}: AppHeaderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    console.log('Theme toggled:', !isDarkMode ? 'Dark' : 'Light');
  };

  return (
    <header className="flex items-center justify-between p-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center gap-3">
        <img 
          src={logoImage} 
          alt="Swagatham Yaathri Logo" 
          className="h-12 w-12 rounded-md object-cover"
          data-testid="img-app-logo"
        />
        <div>
          <h1 className="text-lg font-display font-semibold text-foreground" data-testid="text-app-title">
            Swagatham Yaathri
          </h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span data-testid="text-current-location">{currentLocation}</span>
            <Badge variant={isOnline ? "default" : "secondary"} className="text-xs">
              {isOnline ? <Wifi className="h-3 w-3 mr-1" /> : <WifiOff className="h-3 w-3 mr-1" />}
              {isOnline ? "Online" : "Offline"}
            </Badge>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleTheme}
          data-testid="button-theme-toggle"
        >
          {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
        
        <Avatar className="h-8 w-8" data-testid="avatar-user">
          {userAvatar ? (
            <AvatarImage src={userAvatar} alt={userName} />
          ) : null}
          <AvatarFallback>{userName.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}