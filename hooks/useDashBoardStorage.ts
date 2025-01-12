import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

// Define the type for the value stored in AsyncStorage
type AsyncStorageHook<T> = [T | defaultValueType, (value: T) => void];

// Custom hook for using AsyncStorage with types
type defaultValueType = {
  total: number;
};
const defaultValue = {
  total: 0,
};

export function useAsyncStorage<T = any>(key: string): AsyncStorageHook<T> {
  const [value, setValueState] = useState<T | defaultValueType>(defaultValue);

  useEffect(() => {
    (async () => {
      try {
        const storedItem = await AsyncStorage.getItem(key);
        if (storedItem) {
          setValueState(JSON.parse(storedItem));
        }
      } catch (error) {
        console.error("Failed to load item from AsyncStorage", error);
      }
    })();
  }, []);

  const setValue = async (newValue: T) => {
    try {
      setValueState(newValue);
      await AsyncStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.error("Failed to set item in AsyncStorage", error);
    }
  };

  return [value, setValue];
}
