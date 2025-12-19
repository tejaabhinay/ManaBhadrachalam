import {SplashScreen, Stack} from "expo-router";
import './globals.css';
import {useFonts} from "expo-font";
import {useEffect} from "react";
export default function RootLayout(){
    const [fontsLoaded]=useFonts({
        Bebas:require("../assets/fonts/BebasNeue-Regular.ttf"),
        NunitoRegular:require("../assets/fonts/Nunito-Regular.ttf"),
        NunitoSemi:require("../assets/fonts/Nunito-SemiBold.ttf"),
    });
    useEffect(()=>{
        if(fontsLoaded){
            SplashScreen.hideAsync();
        }
    },[fontsLoaded]);
    if(!fontsLoaded){
        return null;
    }
    return <Stack>
        <Stack.Screen
            name="(tabs)"
            options={{headerShown:false}}
        />

    </Stack>
}