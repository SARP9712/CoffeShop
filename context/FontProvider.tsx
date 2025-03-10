import { createContext, useContext, ReactNode } from "react";
import { useFonts, Manrope_400Regular, Manrope_700Bold } from "@expo-google-fonts/manrope";


interface FontContextType {
  fontsLoaded: boolean;
}

const FontContext = createContext<FontContextType | undefined>(undefined);

interface FontProviderProps {
  children: ReactNode;
}

export function FontProvider({ children }: FontProviderProps) {
  const [fontsLoaded] = useFonts({
    Manrope_400Regular,
    Manrope_700Bold,
  });

  if (!fontsLoaded) return null;

  return <FontContext.Provider value={{ fontsLoaded }}>{children}</FontContext.Provider>;
}

export function useFont() {
  const context = useContext(FontContext);
  if (!context) {
    throw new Error("useFont debe usarse dentro de un FontProvider");
  }
  return context;
}
