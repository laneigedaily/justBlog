import React from "react";
import IconSun from "../icons/iconSun";
import IconMoon from "../icons/iconMoon";
import { useTheme } from "../contexts/ThemeContext";

export default function ColorSchemeSwitcher(props: any) {
  const { switchTheme, theme } = useTheme();
  const nextTheme = theme === "dark" ? "light" : "dark";
  const nextThemeLabel =
    theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";

  const handleSwitchTheme = (event: any) => {
    event.preventDefault();
    switchTheme();
  };

  return (
    <a
      href={`#${nextTheme}`}
      aria-label={nextThemeLabel}
      onClick={handleSwitchTheme}
      {...props}
    >
      {theme === "dark" ? <IconSun /> : <IconMoon />}
    </a>
  );
}
