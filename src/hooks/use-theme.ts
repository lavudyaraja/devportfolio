import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

export function useTheme() {
  const [resolvedTheme, setResolvedTheme] = useState<Theme>("light");

  useEffect(() => {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const storedTheme = localStorage.getItem("theme") as Theme | null;

    const themeToApply: Theme = storedTheme || "system";

    if (themeToApply === "system") {
      setResolvedTheme(systemPrefersDark ? "dark" : "light");
    } else {
      setResolvedTheme(themeToApply);
    }

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(
      themeToApply === "system"
        ? systemPrefersDark
          ? "dark"
          : "light"
        : themeToApply
    );
  }, []);

  const setTheme = (theme: Theme) => {
    localStorage.setItem("theme", theme);
    window.location.reload(); // or setState again if you want no reload
  };

  return { resolvedTheme, setTheme };
}
