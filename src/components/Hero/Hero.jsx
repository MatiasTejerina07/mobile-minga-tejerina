import React, { useState } from 'react'
import { View, Text, ImageBackground, Image, Alert } from 'react-native'
import { KeyboardAvoidingView, Platform } from 'react-native'
import InputCustom from '../Auth/InputCustom'
import Button from '../Buttom'
import RegisterButtom from '../Google/RegisterButtom'
import actions from '../../store/user/authActions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
const { sign_in } = actions
export default function Hero() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [emailError, setEmailError] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigation()
    const error = useSelector(store => store?.user.error)
    console.log(error)
    const handleData = () => {
        console.log('hola')
        let data = {
            email: email,
            password: password
        }
        dispatch(sign_in({ data }))
            .then(res => {
                const emailErrorMessage = res.payload.error.email;
                const passwordErrorMessage = res.payload.error.password;
                setPasswordError(passwordErrorMessage);
                setEmailError(emailErrorMessage)
            })
        if (!passwordError && !setEmailError) {
            navigate.navigate('Manga')
        }
    }
    console.log(passwordError)
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'android' ? 'minHeight' : 'padding'}
            style={{ minHeight: '80%' }}
        >
            <View className='bg-red-400 h-full w-full flex flex-col justify-center items-center'  >
                <ImageBackground className='w-full h-full object-fill' source={{ uri: 'https://github.com/MatiasTejerina07/mobile-minga-tejerina/blob/dev/assets/images/BackgroundHero.png?raw=true' }}>
                    <View className='h-20'>
                        {/* <Navbar /> */}
                    </View>
                    <View className='flex  min-h-screen  items-center h-[80%]' >
                        <View className='bg-[#FAFCFC] h-5/6 w-5/6'>
                            <View className='flex-row justify-center mt-4'>
                                <Text className='font-[500] text-[36px] text-center text-[#F97316]' > Minga </Text>
                                <Image className='w-[40px] h-[40px]' source={{ uri: 'https://github.com/MatiasTejerina07/mobile-minga-tejerina/blob/dev/assets/images/logo.png?raw=true', }} />
                            </View>
                            <Text className='font-[600] text-[32px] text-center'>Welcome!</Text>
                            <Text className='font-[600px] text-[12px] text-center text-[#1F1F1FBF] mt-4 mb-8'>Discover manga, manhua and manhwa, track your progress, have fun, read manga.</Text>
                            <InputCustom value={email} handleValue={setEmail} icon={'email'} name={'Email'} error={emailError} />
                            <InputCustom value={password} handleValue={setPassword} icon={'lock'} name={'Password'} error={passwordError} />
                            <View className='mt-10'>
                                <Button title='Sign In' onPress={handleData} />
                            </View>
                            <View className='mt-10'>
                                <RegisterButtom />
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </KeyboardAvoidingView>

    )
}

