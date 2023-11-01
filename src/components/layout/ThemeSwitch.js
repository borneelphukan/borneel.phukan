"use client";
// components/ThemeSwitch.js
import { useEffect, useState } from "react";
import Switch from "react-switch";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.add("transition");
    document.documentElement.classList.add("duration-1000");
    document.documentElement.classList.toggle("dark");
    setTimeout(() => {
      document.documentElement.classList.remove("transition");
      document.documentElement.classList.remove("duration-1000");
    }, 1000);
  };

  return (
    <div className="fixed z-50 bottom-5 right-10">
      <Switch
        onChange={toggleTheme}
        checked={theme === "dark"}
        checkedIcon={
          <div
            className={`flex items-center justify-center w-16 h-6 bg-black text-white rounded-full ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            <div className="px-2">Dark</div>
          </div>
        }
        uncheckedIcon={
          <div
            className={`flex items-center justify-center w-16 h-6 bg-slate-100 text-black rounded-full ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            <div className="px-2">Light</div>
          </div>
        }
        height={24}
        width={64}
        handleDiameter={24}
        offColor="#ededed"
        onColor="#000000"
      />
    </div>
  );
};

export default ThemeSwitch;
