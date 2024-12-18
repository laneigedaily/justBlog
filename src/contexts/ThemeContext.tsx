import React, { createContext, useContext, useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import usePrefersColorScheme from "use-prefers-color-scheme";

// ThemeContext의 타입을 명확하게 정의
interface ThemeContextType {
  theme: "light" | "dark";
  switchTheme: () => void;
}

// Context를 기본값이 없는 상태로 생성
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// useTheme 훅을 통해 테마 정보와 테마 변경 함수를 가져옵니다
const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const isSSR = typeof window === "undefined";
  const htmlTag = !isSSR && document.querySelector("html");
  const systemPrefersColorScheme = usePrefersColorScheme();
  const defaultTheme =
    systemPrefersColorScheme === "no-preference"
      ? "light"
      : systemPrefersColorScheme || "light";

  // LocalStorage에서 theme 상태 관리, `null`을 허용하는 타입으로 설정
  const [selectedTheme, setSelectedTheme] = useLocalStorageState<
    "light" | "dark" | null
  >("picoColorScheme", { defaultValue: null });
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // 테마를 변경하는 함수
  const switchTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setSelectedTheme(newTheme);
    setTheme(newTheme);
  };

  // data-theme 속성 설정
  const setDataThemeAttribute = (theme: "light" | "dark") => {
    if (htmlTag) {
      htmlTag.setAttribute("data-theme", theme);
    }
  };

  // 테마 적용 및 업데이트
  useEffect(() => {
    const themeToApply = selectedTheme || defaultTheme;
    if (htmlTag) {
      setDataThemeAttribute(themeToApply);
    }
    setTheme(themeToApply);
  }, [htmlTag, defaultTheme, selectedTheme]);

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme };
