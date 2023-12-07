import { useEffect, useState } from "react";

export default function useLocalStorage<T>(
  key: string,
  defaultValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  function getStorageValue(key: string, defaultValue: T) {
    const saved = localStorage.getItem(key);

    if (!saved) {
      return defaultValue;
    }

    const initial = JSON.parse(saved) as T;
    return initial || defaultValue;
  }

  const [value, setValue] = useState<T>(getStorageValue(key, defaultValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
