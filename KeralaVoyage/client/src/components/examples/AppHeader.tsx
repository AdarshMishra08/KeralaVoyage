import AppHeader from '../AppHeader';

export default function AppHeaderExample() {
  return (
    <AppHeader 
      isOnline={true}
      currentLocation="Alleppey, Kerala"
      userName="Rahul Nair"
    />
  );
}