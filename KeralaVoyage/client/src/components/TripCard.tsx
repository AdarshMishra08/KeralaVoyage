import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, Car, Train, Plane, Bus, MoreHorizontal } from "lucide-react";

interface TripCardProps {
  tripNumber: string;
  origin: string;
  destination: string;
  startTime: string;
  endTime?: string;
  transportMode: 'car' | 'train' | 'plane' | 'bus';
  companions?: number;
  status: 'ongoing' | 'completed' | 'planned';
  distance?: string;
  duration?: string;
}

export default function TripCard({
  tripNumber,
  origin,
  destination,
  startTime,
  endTime,
  transportMode,
  companions = 0,
  status,
  distance,
  duration
}: TripCardProps) {
  const transportIcons = {
    car: Car,
    train: Train,
    plane: Plane,
    bus: Bus,
  };

  const TransportIcon = transportIcons[transportMode];

  const statusColors = {
    ongoing: 'default',
    completed: 'secondary',
    planned: 'outline'
  } as const;

  return (
    <Card className="hover-elevate" data-testid={`card-trip-${tripNumber}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="font-mono text-xs">
            #{tripNumber}
          </Badge>
          <Badge variant={statusColors[status]}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Route Information */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 flex-1">
            <MapPin className="h-4 w-4 text-chart-1" />
            <div className="text-sm">
              <div className="font-medium" data-testid="text-origin">{origin}</div>
              <div className="text-xs text-muted-foreground">Origin</div>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <TransportIcon className="h-5 w-5 text-primary" />
            <div className="text-xs text-muted-foreground mt-1">
              {transportMode}
            </div>
          </div>
          
          <div className="flex items-center gap-2 flex-1 justify-end">
            <div className="text-sm text-right">
              <div className="font-medium" data-testid="text-destination">{destination}</div>
              <div className="text-xs text-muted-foreground">Destination</div>
            </div>
            <MapPin className="h-4 w-4 text-chart-2" />
          </div>
        </div>

        {/* Trip Details */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{startTime}</span>
            {endTime && (
              <>
                <span>-</span>
                <span>{endTime}</span>
              </>
            )}
          </div>
          
          {companions > 0 && (
            <div className="flex items-center gap-1 text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>{companions} companion{companions !== 1 ? 's' : ''}</span>
            </div>
          )}
        </div>

        {/* Distance and Duration */}
        {(distance || duration) && (
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            {distance && <span>{distance}</span>}
            {duration && <span>{duration}</span>}
          </div>
        )}
      </CardContent>
    </Card>
  );
}