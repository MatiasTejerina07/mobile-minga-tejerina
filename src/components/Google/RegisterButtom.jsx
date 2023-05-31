import { View, Button, TouchableOpacity } from 'react-native'

export default function RegisterButtom() {
    return (
        <View className='w-full flex justify-center '>
            <TouchableOpacity className='flex justify-center items-center'>
                <Button title= "Register" />
            </TouchableOpacity>
        </View>
    );
}