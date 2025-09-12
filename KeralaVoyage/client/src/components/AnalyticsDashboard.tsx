import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  TrendingUp, 
  MapPin, 
  Clock, 
  Users, 
  Car, 
  Train, 
  Plane, 
  Bus,
  Route as RouteIcon
} from "lucide-react";

interface AnalyticsDashboardProps {
  userTrips?: number;
  totalDistance?: string;
  avgTripDuration?: string;
  popularDestinations?: string[];
}

export default function AnalyticsDashboard({
  userTrips = 47,
  totalDistance = "2,340 km",
  avgTripDuration = "2h 15m",
  popularDestinations = ["Kochi", "Munnar", "Alleppey", "Thekkady"]
}: AnalyticsDashboardProps) {
  
  // Mock data for analytics
  const travelPatterns = {
    transportModes: [
      { mode: 'Car', count: 23, icon: Car, percentage: 49 },
      { mode: 'Bus', count: 15, icon: Bus, percentage: 32 },
      { mode: 'Train', count: 6, icon: Train, percentage: 13 },
      { mode: 'Plane', count: 3, icon: Plane, percentage: 6 }
    ],
    tripChains: [
      { route: 'Kochi → Munnar → Thekkady', frequency: 8 },
      { route: 'Alleppey → Kumrakonam → Kochi', frequency: 5 },
      { route: 'Thrissur → Guruvayur → Kochi', frequency: 4 },
      { route: 'Kochi → Wayanad → Kozhikode', frequency: 3 }
    ],
    timePatterns: [
      { period: 'Morning (6-12)', trips: 18, percentage: 38 },
      { period: 'Afternoon (12-18)', trips: 20, percentage: 43 },
      { period: 'Evening (18-24)', trips: 9, percentage: 19 }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <RouteIcon className="h-4 w-4 text-primary" />
              <div>
                <div className="text-2xl font-bold" data-testid="text-total-trips">{userTrips}</div>
                <div className="text-xs text-muted-foreground">Total Trips</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-chart-1" />
              <div>
                <div className="text-2xl font-bold" data-testid="text-total-distance">{totalDistance}</div>
                <div className="text-xs text-muted-foreground">Distance Traveled</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-chart-2" />
              <div>
                <div className="text-2xl font-bold" data-testid="text-avg-duration">{avgTripDuration}</div>
                <div className="text-xs text-muted-foreground">Avg Duration</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-chart-4" />
              <div>
                <div className="text-2xl font-bold">+12%</div>
                <div className="text-xs text-muted-foreground">vs Last Month</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analytics */}
      <Tabs defaultValue="patterns" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="patterns">Travel Patterns</TabsTrigger>
          <TabsTrigger value="chains">Trip Chains</TabsTrigger>
          <TabsTrigger value="insights">Behavioral Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="patterns" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Transport Mode Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Transport Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {travelPatterns.transportModes.map((transport) => {
                  const Icon = transport.icon;
                  return (
                    <div key={transport.mode} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{transport.mode}</span>
                        <Badge variant="secondary" className="text-xs">
                          {transport.count}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 min-w-0 flex-1 ml-4">
                        <Progress value={transport.percentage} className="flex-1" />
                        <span className="text-xs text-muted-foreground w-8">
                          {transport.percentage}%
                        </span>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Time Pattern Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Travel Time Patterns</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {travelPatterns.timePatterns.map((pattern) => (
                  <div key={pattern.period} className="flex items-center justify-between">
                    <span className="text-sm">{pattern.period}</span>
                    <div className="flex items-center gap-2 min-w-0 flex-1 ml-4">
                      <Progress value={pattern.percentage} className="flex-1" />
                      <span className="text-xs text-muted-foreground w-12">
                        {pattern.trips} trips
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="chains" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Most Common Trip Chains</CardTitle>
              <p className="text-sm text-muted-foreground">
                Establishment activity patterns and route combinations
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {travelPatterns.tripChains.map((chain, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                    data-testid={`trip-chain-${idx}`}
                  >
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        #{idx + 1}
                      </Badge>
                      <span className="text-sm font-medium">{chain.route}</span>
                    </div>
                    <Badge variant="secondary">
                      {chain.frequency} times
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Behavioral Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-chart-4/10 border border-chart-4/20">
                    <div className="font-medium text-sm mb-1">Peak Travel Days</div>
                    <div className="text-xs text-muted-foreground">
                      You travel most on weekends, especially Saturdays
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-chart-1/10 border border-chart-1/20">
                    <div className="font-medium text-sm mb-1">Preferred Routes</div>
                    <div className="text-xs text-muted-foreground">
                      Hill stations and backwaters are your top destinations
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-chart-2/10 border border-chart-2/20">
                    <div className="font-medium text-sm mb-1">Travel Companions</div>
                    <div className="text-xs text-muted-foreground">
                      78% of trips include 1-2 companions
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Popular Destinations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {popularDestinations.map((destination, idx) => (
                    <div 
                      key={destination} 
                      className="flex items-center justify-between"
                      data-testid={`popular-destination-${idx}`}
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{destination}</span>
                      </div>
                      <Badge variant="outline">
                        {12 - idx * 2} visits
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}