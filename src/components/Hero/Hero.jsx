import React, { useState } from 'react'
import { View, Text, ImageBackground, Image, TextInput } from 'react-native'
import InputCustom from '../Auth/InputCustom'
import Button from '../Buttom'
import RegisterButtom from '../Google/RegisterButtom'

export default function Hero() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View className='bg-red-400 h-full w-full flex flex-col justify-center items-center'  >
            <ImageBackground className='w-full h-full' source={{ uri: 'https://github.com/MatiasTejerina07/mobile-minga-tejerina/blob/dev/assets/images/BackgroundHero.png?raw=true' }}>
                <View className='h-20'>
                    {/* <Navbar /> */}
                </View>
                <View className='flex justify-center items-center h-[80%] z-0' >
                    <View className='bg-[#FAFCFC] h-5/6 w-5/6'>
                        <View className='flex-row justify-center mt-4'>
                            <Text className='font-[500] text-[36px] text-center text-[#F97316]' > Minga </Text>
                            <Image className='w-[40px] h-[40px]' source={{ uri: 'https://github.com/MatiasTejerina07/mobile-minga-tejerina/blob/dev/assets/images/logo.png?raw=true', }}
                            />
                        </View>
                        <Text className='font-[600] text-[32px] text-center'>Welcome!</Text>
                        <Text className='font-[600px] text-[12px] text-center text-[#1F1F1FBF] mt-4 mb-8'>Discover manga, manhua and manhwa, track your progress, have fun, read manga.</Text>
                        <InputCustom value={email} handleValue={setEmail} icon={'email'} name={'Email'} placeholder={'DragonballZ@Krowl.com.com'} />
                        <InputCustom value={password} handleValue={setPassword} icon={'lock'} name={'Password'} />
                        <Button title='Sign In' />
                        <View className='mt-4'>
                            <RegisterButtom />
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>

    )
}

