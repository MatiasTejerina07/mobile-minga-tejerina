import { View, Image, TouchableOpacity, Text, Button } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import { useState } from 'react'
import { color } from 'react-native-reanimated'

export default function Navbar() {
    const [show, setShow] = useState(false)
    const showNavbar = () => {
        setShow(!show)
    }
    return (
        <View className='w-full flex-row justify-between'>
            <TouchableOpacity onPress={showNavbar}>
                <Icon name={show ? 'x' : 'menu'} size={40} color="#FF5722" />
            </TouchableOpacity>
            {show && (
                <>
                    <View className='h-full bg-[#FF5722] w-full z-20'>
                        <View className='flex w-full justify-center items-center h-full'>
                            <Button title="Home" onPress={() => console.log('Home')} />
                            <Button title="Comics" onPress={() => console.log('Comics')} />
                            <Button title="Manga" onPress={() => console.log('Manga')} />
                            <Button title="Logout" onPress={() => console.log('Logout')} />
                        </View>
                    </View>
                </>
            )}
            {show ? '' :
                <Image className='w-[40] h-[40]' source={{ uri: 'https://github.com/MatiasTejerina07/mobile-minga-tejerina/blob/dev/assets/images/logo.png?raw=true', }}
                />}
        </View>
    )
}
