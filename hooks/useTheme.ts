import { useEffect, useState } from "react";

export function useTheme(): [boolean, (dark: boolean) => void] {
  const [isDark, _setDark] = useState<boolean>(false)

  useEffect(() => {
    setDark(localStorage.getItem("theme") === 'dark')
  }, [])

  function setDark(dark: boolean): void {
    if (dark === true) {
      _setDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem("theme", "dark");
    } else {
      _setDark(false);
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem("theme", "light");
    }
  }

  return [isDark, setDark];
}