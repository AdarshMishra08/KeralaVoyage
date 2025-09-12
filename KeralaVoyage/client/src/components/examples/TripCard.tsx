import TripCard from '../TripCard';

export default function TripCardExample() {
  return (
    <div className="space-y-4 p-4">
      <TripCard 
        tripNumber="2025001"
        origin="Kochi"
        destination="Munnar"
        startTime="09:30 AM"
        endTime="12:45 PM"
        transportMode="car"
        companions={2}
        status="completed"
        distance="132 km"
        duration="3h 15m"
      />
      <TripCard 
        tripNumber="2025002"
        origin="Munnar"
        destination="Alleppey"
        startTime="02:15 PM"
        transportMode="bus"
        companions={1}
        status="ongoing"
        distance="89 km"
      />
    </div>
  );
}