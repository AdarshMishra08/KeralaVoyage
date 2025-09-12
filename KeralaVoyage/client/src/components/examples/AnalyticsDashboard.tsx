import AnalyticsDashboard from '../AnalyticsDashboard';

export default function AnalyticsDashboardExample() {
  return (
    <div className="p-4">
      <AnalyticsDashboard 
        userTrips={47}
        totalDistance="2,340 km"
        avgTripDuration="2h 15m"
        popularDestinations={["Kochi", "Munnar", "Alleppey", "Thekkady"]}
      />
    </div>
  );
}