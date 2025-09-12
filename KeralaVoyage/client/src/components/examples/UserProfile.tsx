import UserProfile from '../UserProfile';

export default function UserProfileExample() {
  const mockUser = {
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    phone: "+91 9876543210",
    location: "Trivandrum, Kerala",
    joinDate: "March 2024",
    totalTrips: 32
  };

  return (
    <div className="p-4">
      <UserProfile 
        user={mockUser}
        onSave={(userData) => console.log('Profile saved:', userData)}
      />
    </div>
  );
}