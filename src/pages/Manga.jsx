import React, { useState } from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import InputCustom from '../components/Auth/InputCustom'

export default function Manga() {
    const [search, setSearch] = useState('')
    return (
        <View>
            <View className='h-[60%]'>
                <ImageBackground className='h-[100%] w-[100%] object-cover flex items-center justify-center' source={{ uri: 'https://github.com/cartolanofacundo/minga_azul_front/blob/main/src/assets/images/Wallpaper-manga-mobile.png?raw=true' }}>
                    <Text className='text-white text-[38px]'>Mangas</Text>
                    <InputCustom value={search} handleValue={setSearch} icon={'card-search'} />
                </ImageBackground>
            </View>
            <View className='w-full flex justify-center items-center'>
                <View className='bg-[#EBEBEB] flex justify-center items-center w-[87%] h-56  rounded-t-3xl'>
                    <TouchableOpacity className="w-5/6 h-5/6 flex flex-row  shadow rounded-lg justify-between items-center lg:w-1/3 overflow-hidden">
                        <View className="border-l-4 h-2/3" /* style={{ borderColor: manga?.category_id?.color }} */></View>
                        <View className="flex flex-col items-start justify-center h-full grow p-4">
                            <View>
                                <Text className="font-roboto font-medium text-[#222222] text-2xl">Hola</Text>
                                <Text /* style={{ color: manga?.category_id?.color }} */>hola</Text>
                            </View>
                        </View>
                        <Image source={{ uri: 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/06/goku-ultra-instinto.jpg' }} className="mr-[-50px] h-[300px] w-[200px] sm:w-[250px] object-cover rounded-full" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
