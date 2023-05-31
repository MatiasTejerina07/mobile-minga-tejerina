import { useNavigation } from '@react-navigation/native';
import { View, Button, TouchableOpacity } from 'react-native'

export default function RegisterButtom() {
    const navigate = useNavigation()
    const register = ()=>{
        navigate.navigate('Register')
    }
    return (
        <View className='w-full flex justify-center '>
            <TouchableOpacity className='flex justify-center items-center'>
                <Button title= "Register" onPress={register} />
            </TouchableOpacity>
        </View>
    );
}