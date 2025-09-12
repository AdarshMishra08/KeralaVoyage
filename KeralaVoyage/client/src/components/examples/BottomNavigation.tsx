import BottomNavigation from '../BottomNavigation';

export default function BottomNavigationExample() {
  return (
    <BottomNavigation 
      activeTab="home"
      onTabChange={(tab) => console.log('Navigation changed to:', tab)}
    />
  );
}