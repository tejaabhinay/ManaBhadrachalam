import {View,Text, ImageBackground,Image} from 'react-native';
import React from 'react';
import {Tabs} from "expo-router";
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";
let TabIcon=({focused,icon,title}:any)=>{
    if(focused){
            return(
            <ImageBackground source={images.highlight} className='flex flex-row w-full flex-1 min-w-[90px] min-h-12 mt-5 ml-2.5 mr-3 justify-center items-center rounded-full overflow-hidden '>
            <Image source={icon} tintColor={"#151312"} className='size-5'/>
            <Text className='text-secondary text-base font-semibold ml-1 mt-1.25'>{title}</Text>
            </ImageBackground>
        );
    }
    else{
        return(
            <View className='size-full justify-center items-center mt-5'>
            <Image source={icon} tintColor={"#A8B5DB"} className='size-5'></Image>
            </View>
        )
    }
}

const _Layout=()=>{
    return(
        <View className='flex-1 bg-primary'>
        <Tabs
            screenOptions={{
                tabBarShowLabel:false,
                tabBarItemStyle:{
                    width:'100%',
                    height:'100%',
                    justifyContent:'center',
                    alignItems:'center'
                },
                tabBarStyle:{
                    backgroundColor:'#0f0D23',
                    borderRadius:20,
                    marginBottom:20,
                    height:60,
                    borderColor:'#0f0d23',
                    borderWidth:1
                },
                sceneStyle:{backgroundColor:'black'}

            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title:'Home',
                    headerShown:false,
                    tabBarIcon:({focused})=>(
                        <>
                            <TabIcon 
                                focused={focused} 
                                icon={icons.home} 
                                title="Home"
                            />
                        </>
                    )
                }} 
            />
            <Tabs.Screen
                name='places'
                options={{
                    title:'Places',
                    headerShown:false,
                    tabBarIcon:({focused})=>(
                        <>
                            <TabIcon 
                                focused={focused} 
                                icon={icons.save} 
                                title="Places"
                            />
                        </>
                    )
                }} 
            />
            <Tabs.Screen
                name='search'
                options={{
                    title:'Search',
                    headerShown:false,
                    tabBarIcon:({focused})=>(
                        <>
                            <TabIcon 
                                focused={focused} 
                                icon={icons.search} 
                                title="Search"
                            />
                        </>
                    )
                }} 
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title:'Profile',
                    headerShown:false,
                    tabBarIcon:({focused})=>(
                        <>
                            <TabIcon 
                                focused={focused} 
                                icon={icons.person} 
                                title="Stays"
                            />
                        </>
                    )
                }} 
            />
        </Tabs>
        </View>
    )
}
export default _Layout