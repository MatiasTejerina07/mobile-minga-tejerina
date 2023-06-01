import { View, Text, Image, ScrollView, Alert} from 'react-native'
import InputCustom from '../components/Auth/InputCustom'
import { useState } from 'react'
import Button from '../components/Buttom'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import actions from '../store/user/authActions';
const { sign_up, clean_up } = actions;
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'



export default function Register() {
  const dispatch = useDispatch()
  const { error, loading, success } = useSelector(store => store.user)
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [photo, setPhoto] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const navigation = useNavigation()

  function handleSubmit() {
    let data = {
      name: name,
      last_name: lastname,
      email: email,
      password: password,
      photo: photo
    }
    dispatch(sign_up({ data }))
  }


  useEffect(() => {
    if (error?.userExist) {
      Alert.alert('Already exists', 'Your user are already created, please sign in', [
        { text: 'OK', onPress: () => navigation.navigate('SignIn') },
      ]);

    }
    if (success) {
      Alert.alert('User created', 'Your user was succesfully created, verify your email', [
        { text: 'OK', onPress: () => navigation.navigate('Verify') },
      ]);

    }


  }, [success, error])

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'minHeight' : 'padding'}
      style={{ minHeight: '120%' }}
    >
      <View className='flex  items-center h-[100%] bg-[#F97316] ' >
        <View className='bg-[#FAFCFC] min-h-screen flex justify-center items-center h-5/6 w-5/6'>
          <View className='flex-row justify-center mt-4'>
            <Text className='font-[500] text-[36px] text-center text-[#F97316]' > Minga </Text>
            <Image className='w-[40px] h-[40px]' source={{ uri: 'https://github.com/MatiasTejerina07/mobile-minga-tejerina/blob/dev/assets/images/logo.png?raw=true', }} />
          </View>
          <Text className='font-[600] text-[32px] text-center'>Welcome!</Text>
          <Text className='font-[600px] text-[12px] text-center text-[#1F1F1FBF] mt-4 mb-8'>Discover manga, manhua and manhwa, track your progress, have fun, read manga.</Text>
          <InputCustom value={name} handleValue={setName} icon={'account-circle'} name={'Name'} />
          <InputCustom value={lastname} handleValue={setLastname} icon={'account-circle'} name={'LastName'} />
          <InputCustom value={photo} handleValue={setPhoto} icon={'camera'} name={'Photo'} placeholder={'URL'} />
          <InputCustom value={email} handleValue={setEmail} icon={'email'} name={'Email'} />
          <InputCustom value={password} handleValue={setPassword} icon={'lock'} name={'Password'} />
          <Button onPress={handleSubmit} title='Sign Up' />
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
