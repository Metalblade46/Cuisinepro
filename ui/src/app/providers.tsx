"use client";

// Import necessary dependencies from 'react'
import { useEffect, useState } from "react";
// Import necessary dependencies from '@fluentui/react-components'
import {
  createDOMRenderer,
  RendererProvider,
  FluentProvider,
  webLightTheme,
  SSRProvider,
} from "@fluentui/react-components";
import { ThemeProvider } from "@fluentui/react";

// Create a DOM renderer for Fluent UI.
const renderer = createDOMRenderer();

// Create a custom theme
const theme = {
  palette: {
    themePrimary: "#d83b01",
    themeLighterAlt: "#fef6f3",
    themeLighter: "#f9d9d0",
    themeLight: "#f4b9aa",
    themeTertiary: "#e87f5e",
    themeSecondary: "#dd531d",
    themeDarkAlt: "#c23501",
    themeDark: "#a42d01",
    themeDarker: "#792101",
    neutralLighterAlt: "#faf9f8",
    neutralLighter: "#f3f2f1",
    neutralLight: "#edebe9",
    neutralQuaternaryAlt: "#e1dfdd",
    neutralQuaternary: "#d0d0d0",
    neutralTertiaryAlt: "#c8c6c4",
    neutralTertiary: "#a19f9d",
    neutralSecondary: "#605e5c",
    neutralPrimaryAlt: "#3b3a39",
    neutralPrimary: "#323130",
    neutralDark: "#201f1e",
    black: "#000000",
    white: "#ffffff",
  },
};
/**
 * Providers component.
 *
 * This component wraps other components with a set of providers
 * for Fluent UI, SSR, and a custom renderer.
 *
 * @param {Object} props - The properties for the Providers component.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the Providers.
 * @returns {React.Element} The Providers component with child components.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  // Declare a state variable named 'hasMounted' and a function named 'setHasMounted' to update it.
  const [hasMounted, setHasMounted] = useState(false);

  // Use the 'useEffect' hook to set 'hasMounted' to true once the component has mounted.
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // If the component hasn't mounted yet, return nothing.
  if (!hasMounted) {
    return null;
  }

  // If the component has mounted, return a set of providers.
  return (
    <RendererProvider renderer={renderer || createDOMRenderer()}>
      <SSRProvider>
        <FluentProvider theme={webLightTheme}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </FluentProvider>
      </SSRProvider>
    </RendererProvider>
  );
}
