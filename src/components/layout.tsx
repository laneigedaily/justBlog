import { Link } from "gatsby";
import React from "react";
import Header from "./header";
import { ThemeProvider } from "../contexts/ThemeContext";

interface ILayout {
  children: any;
  title: string;
}

export default function Layout({ children, title }: ILayout) {
  return (
    <ThemeProvider>
      <div className="container">
        <Header />
        <main>
          <h1>{title}</h1>
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
}
