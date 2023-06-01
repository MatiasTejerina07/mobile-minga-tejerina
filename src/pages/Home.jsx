import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, ImageBackground, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function Home() {
    const navigate = useNavigation()
    const mangas = () => {
        navigate.navigate('Manga')
    }
    return (
        <View>
            <View className='w-full '>
                <ImageBackground className='h-full object-fill 'source={{uri:'https://i.pinimg.com/originals/60/60/ef/6060ef7fcf978530b51d7ee4f5690dd2.jpg'}}>
                    <View className='flex flex-col justify-center items-center h-[50%] mt-20'>
                        <Text style={styles.text} className='font-[700] text-[#ffffff] text-[36px]'>For the love of manga</Text>
                        <Text style={styles.text} className='font-[600] text-[#ffffff] text-[20px] pt-4'>Explore our varieties</Text>
                    </View>

                    <TouchableOpacity className='flex w-full justify-center items-center'>
                        <Text onPress={mangas} className=' bg-white h-12 w-[280px] text-center pt-3 rounded-2xl font-[700] text-[#FF5722]'>Let's go</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        textShadowColor: 'rgba(0, 0, 0, 0.95)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
    },
})