import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';

useEffect(() => {
  Notifications.requestPermissionsAsync();
}, []);
