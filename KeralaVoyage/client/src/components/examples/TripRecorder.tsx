import TripRecorder from '../TripRecorder';

export default function TripRecorderExample() {
  return (
    <div className="p-4">
      <TripRecorder 
        isRecording={false}
        onStartTrip={(data) => console.log('Trip started:', data)}
        onEndTrip={(data) => console.log('Trip ended:', data)}
      />
    </div>
  );
}