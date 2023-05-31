import { TouchableOpacity, Text,  } from 'react-native';

export default function Button({ onPress, title }) {
    return (
        <TouchableOpacity className='flex w-full justify-center items-center'  onPress={onPress}>
            <Text className=' bg-[#FF5722] h-12 w-[280px] text-center pt-3 rounded-2xl'>{title}</Text>
        </TouchableOpacity>
    );
}
