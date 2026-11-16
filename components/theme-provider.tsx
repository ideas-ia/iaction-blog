"use client";

import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes";

// next-themes inyecta un <script> para fijar el tema antes de pintar. En el servidor debe ejecutarse;
// en el cliente React 19 avisa de que no lo hará, así que ahí lo marcamos como datos inertes.
const scriptProps =
  typeof window === "undefined" ? undefined : ({ type: "application/json" } as const);

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider scriptProps={scriptProps} {...props}>
      {children}
    </NextThemesProvider>
  );
}
