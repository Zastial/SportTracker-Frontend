import { useEffect, useState } from 'react';
import * as Font from 'expo-font';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await Font.loadAsync({
          'Poppins': require('../../assets/fonts/Poppins-Regular.ttf'),
          'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
          'Poppins-Italic': require('../../assets/fonts/Poppins-Italic.ttf'),
          'Poppins-Black': require('../../assets/fonts/Poppins-Black.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}