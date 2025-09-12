import { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Clock, Car, Train, Plane, Bus, Users, Plus, Minus, Navigation, Play, Square } from "lucide-react";

interface Companion {
  id: string;
  name: string;
  relation: string;
}

interface TripData {
  tripNumber: string;
  origin: string;
  destination: string;
  transportMode: string;
  purpose: string;
  notes: string;
  rating?: number;
  feedback?: string;
}

interface TripRecorderProps {
  onStartTrip?: (tripData: any) => void;
  onEndTrip?: (tripData: any) => void;
  isRecording?: boolean;
}

export default function TripRecorder({ onStartTrip, onEndTrip, isRecording = false }: TripRecorderProps) {
  const [tripData, setTripData] = useState<TripData>({
    tripNumber: `2025${String(Date.now()).slice(-3)}`,
    origin: '',
    destination: '',
    transportMode: '',
    purpose: '',
    notes: '',
  });
  const [companions, setCompanions] = useState<Companion[]>([]);
  const [newCompanion, setNewCompanion] = useState({ name: '', relation: '' });
  const [currentLocation, setCurrentLocation] = useState("Detecting location...");
  const [errors, setErrors] = useState({
    rating: '',
    feedback: '',
  });

  const validateFeedback = () => {
    const newErrors = { rating: '', feedback: '' };
    if (!tripData.rating) {
      newErrors.rating = 'Please provide a rating';
    } else if (tripData.rating < 1 || tripData.rating > 5) {
      newErrors.rating = 'Rating must be between 1 and 5';
    }
    if (!tripData.feedback) {
      newErrors.feedback = 'Please provide feedback';
    } else if (tripData.feedback.length < 10) {
      newErrors.feedback = 'Feedback must be at least 10 characters long';
    }
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === '');
  };

  const handleSubmitFeedback = () => {
    if (validateFeedback()) {
      console.log('Feedback submitted:', { rating: tripData.rating, feedback: tripData.feedback });
    }
  };

  return (
    // ... rest of the code remains the same ...

    <Card>
      <CardHeader>
        <CardTitle>User Feedback</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Star Rating */}
        <div className="space-y-2">
          <Label>Rate Your Trip</Label>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setTripData((prev) => ({ ...prev, rating: star }))}
                className={`text-2xl ${tripData.rating && tripData.rating >= star ? 'text-yellow-400' : 'text-gray-300'}`}
                aria-label={`${star} Star`}
              >
                ★
              </button>
            ))}
          </div>
          {errors.rating && <p className="text-red-500">{errors.rating}</p>}
        </div>

        {/* Feedback Textarea */}
        <div className="space-y-2">
          <Label htmlFor="feedback">Your Feedback</Label>
          <Textarea
            id="feedback"
            value={tripData.feedback || ''}
            onChange={(e) => setTripData((prev) => ({ ...prev, feedback: e.target.value }))}
            placeholder="Share your trip experience..."
            className="min-h-20"
          />
          {errors.feedback && <p className="text-red-500">{errors.feedback}</p>}
        </div>

        <Button onClick={handleSubmitFeedback}>Submit Feedback</Button>
      </CardContent>
    </Card>
  );
}
