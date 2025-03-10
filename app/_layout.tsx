import { Stack , Tabs } from "expo-router";
import { FontProvider } from "@/context/FontProvider";

export default function RootLayout() {
  return(

    <FontProvider>

     <Stack
    screenOptions={{
      headerShown:false,
    }}>

      
      </Stack>
      </FontProvider>  
  ) 
}
