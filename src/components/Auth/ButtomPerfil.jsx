import { TouchableOpacity, Text, Image, View, ImageBackground, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export default function Button({ onPress }) {
    const user = useSelector(store => store?.user.user)
    return (

        <>
            {user && <Text className='font-[600] text-[25px] text-center'>Perfil</Text>}
            <TouchableOpacity className='flex w-full justify-center items-center' onPress={onPress}>
                {user ? (
                    <View className='flex items-center justify-center' style={{ width: 160, height: 160, borderRadius: 80, overflow: 'hidden' }}>
                        <ImageBackground className=' w-40 h-40' source={{ uri: user?.photo }}>
                            <Text style={styles.text} className=' h-16 text-center font-[600] text-white text-[22px] pt-4'>{user?.name}</Text>
                            <View className='flex-row justify-center'>
                                <Text style={styles.text} className='font-[600] text-[17px] text-center text-white' >{user?.email}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                ) : (
                    ''
                )}
            </TouchableOpacity >
        </>
    )
}
const styles = StyleSheet.create({
    text: {
        textShadowColor: 'rgba(0, 0, 0, 0.95)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
    },
})