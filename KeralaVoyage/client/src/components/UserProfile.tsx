import { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Shield, 
  Settings, 
  Camera,
  Globe,
  Database,
  Users
} from "lucide-react";

interface UserProfileProps {
  user?: {
    name: string;
    email: string;
    phone: string;
    location: string;
    avatar?: string;
    joinDate: string;
    totalTrips: number;
  };
  onSave?: (userData: any) => void;
}

export default function UserProfile({ 
  user = {
    name: "Rahul Nair",
    email: "rahul.nair@example.com", 
    phone: "+91 9876543210",
    location: "Kochi, Kerala",
    joinDate: "January 2024",
    totalTrips: 47
  },
  onSave 
}: UserProfileProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);
  const [dataConsent, setDataConsent] = useState(true);
  const [locationSharing, setLocationSharing] = useState(true);
  const [tripAutoDetection, setTripAutoDetection] = useState(true);
  const [companionTracking, setCompanionTracking] = useState(false);

  const handleSave = () => {
    onSave?.(formData);
    setIsEditing(false);
    console.log('Profile saved:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Avatar className="h-20 w-20">
                {user.avatar ? (
                  <AvatarImage src={user.avatar} alt={user.name} />
                ) : null}
                <AvatarFallback className="text-lg">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <Button 
                size="icon" 
                variant="secondary" 
                className="absolute -bottom-1 -right-1 h-7 w-7 rounded-full"
                data-testid="button-change-avatar"
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-2xl font-bold" data-testid="text-user-name">{user.name}</h2>
                <Badge variant="secondary">Verified</Badge>
              </div>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{user.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>Member since {user.joinDate}</span>
                  <span>•</span>
                  <span>{user.totalTrips} trips recorded</span>
                </div>
              </div>
            </div>
            
            <Button 
              variant={isEditing ? "default" : "outline"} 
              onClick={() => isEditing ? handleSave() : setIsEditing(!isEditing)}
              data-testid="button-edit-profile"
            >
              {isEditing ? "Save Changes" : "Edit Profile"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Profile Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                disabled={!isEditing}
                data-testid="input-user-name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                disabled={!isEditing}
                data-testid="input-user-email"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                disabled={!isEditing}
                data-testid="input-user-phone"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="location">Primary Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                disabled={!isEditing}
                data-testid="input-user-location"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Privacy & Data Consent */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Privacy & Data Consent
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Control how your travel data is collected and used for NATPAC research
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="font-medium">Data Collection Consent</div>
                <div className="text-sm text-muted-foreground">
                  Allow collection of trip data for Kerala transportation planning
                </div>
              </div>
              <Switch 
                checked={dataConsent}
                onCheckedChange={setDataConsent}
                data-testid="switch-data-consent"
              />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="font-medium flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Location Sharing
                </div>
                <div className="text-sm text-muted-foreground">
                  Share your location for automatic trip detection
                </div>
              </div>
              <Switch 
                checked={locationSharing}
                onCheckedChange={setLocationSharing}
                data-testid="switch-location-sharing"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="font-medium flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Automatic Trip Detection
                </div>
                <div className="text-sm text-muted-foreground">
                  Use GPS to automatically detect and log trips
                </div>
              </div>
              <Switch 
                checked={tripAutoDetection}
                onCheckedChange={setTripAutoDetection}
                data-testid="switch-trip-detection"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="font-medium flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Travel Companion Tracking
                </div>
                <div className="text-sm text-muted-foreground">
                  Track information about people traveling with you
                </div>
              </div>
              <Switch 
                checked={companionTracking}
                onCheckedChange={setCompanionTracking}
                data-testid="switch-companion-tracking"
              />
            </div>
          </div>

          <div className="p-4 rounded-lg bg-muted/50 border">
            <div className="flex items-start gap-3">
              <Database className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <div className="font-medium text-sm">NATPAC Research Integration</div>
                <div className="text-xs text-muted-foreground leading-relaxed">
                  Your anonymized travel data helps NATPAC scientists understand Kerala's transportation 
                  patterns and improve regional mobility planning. All personal information is protected 
                  and only aggregate patterns are used for research purposes.
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* App Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            App Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Button variant="outline" className="justify-start" data-testid="button-language-settings">
              <Globe className="h-4 w-4 mr-2" />
              Language: English
            </Button>
            
            <Button variant="outline" className="justify-start" data-testid="button-export-data">
              <Database className="h-4 w-4 mr-2" />
              Export My Data
            </Button>
            
            <Button variant="outline" className="justify-start" data-testid="button-privacy-policy">
              <Shield className="h-4 w-4 mr-2" />
              Privacy Policy
            </Button>
            
            <Button variant="outline" className="justify-start" data-testid="button-app-settings">
              <Settings className="h-4 w-4 mr-2" />
              App Settings
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}