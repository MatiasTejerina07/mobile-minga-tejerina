import { TouchableOpacity, Text, Image, View } from 'react-native';
import { useSelector } from 'react-redux';

export default function Button({ onPress }) {
    const user = useSelector(store => store?.user.user)
    return (

        <>
            {user && <Text className='font-[600] text-[25px] text-center'>Perfil</Text>}
            <TouchableOpacity className='flex w-full justify-center items-center' onPress={onPress}>
                {user ? (
                    <View className='flex justify-center items-center bg-[#0e3e85] rounded-full w-40 h-40'>
                        <Text className=' h-16 text-center font-[600] text-white text-[20px] pt-4'>{user?.name}</Text>
                        <View className='flex-row'>
                            <Text className='font-[600] text-white' >{user?.email}</Text>
                        </View>
                        <Image className='w-14 h-14 rounded-full mt-2' source={{ uri: user?.photo }} />
                    </View>
                ) : (
                    ''
                )}
            </TouchableOpacity >
        </>
    )
}
