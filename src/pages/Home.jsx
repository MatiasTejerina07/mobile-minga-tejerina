import React from 'react'
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native'

export default function Home() {
    return (
        <View>
            <View>
                <ImageBackground className='h-full object-cover' source={}>
                    <Text className='font-[700] text-white text-[36px]'>For the love of manga</Text>
                    <Text className='font-[400] text-white text-[20px]'>Explore our varieties</Text>
                    <TouchableOpacity className='flex w-full justify-center items-center'>
                        <Text className=' bg-white h-12 w-[280px] text-center pt-3 rounded-2xl text-[#FF5722]'>Let's go</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        </View>
    )
}
