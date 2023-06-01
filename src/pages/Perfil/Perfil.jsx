import { View, Text, Image, ImageBackground, Button, Modal } from 'react-native'
import { useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import ImagePicker from 'react-native-image-picker'
import { useState } from "react"

export default function Perfil() {
    const user = useSelector(store => store?.user?.user)
    const [modalVisible, setModalVisible] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)

    //Carga de imagen
    const openImagePicker = () => {
        const options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.launchImageLibrary(options, (response) => {
            
            if (response.didCancel) {
                console.log('El usuario canceló la selección de la imagen')
            } else if (response.error) {
                console.log('Ocurrió un error: ', response.error)
            } else {
                
                console.log('Datos de la imagen: ', response)
                setSelectedImage(response.uri)
            }
        })
    }

    return (
        <View className=' w-full h-full'>
            <View className='flex-row h-[30%] items-center pl-4 w-full'>
                <View >
                    <Image className='w-28 h-28 rounded-full' source={{ uri: user?.photo }} />
                    <Modal visible={modalVisible} animationType="slide">
                        <View className='flex justify-center items-center h-full'>
                            <View className='mb-4'><Button title="Select Image" onPress={openImagePicker} /></View>
                            <View className='mb-4'><Button title="Change Nick name" onPress={() => setModalVisible(false)} /></View>
                            <View className='mb-4'><Button title="Change LastName" onPress={() => setModalVisible(false)} /></View>
                            <View className='mb-4'><Button title="Close" onPress={() => setModalVisible(false)} /></View>
                        </View>
                    </Modal>
                    {selectedImage && (
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />
                        </View>
                    )}
                </View>
                <View className='flex gap-2 justify-center items-center w-1/2'>
                    <View className='flex-row  items-center  w-2/3'>
                        <Text className='font-[500] text-black text-center pl-4 text-[20px]'>{user?.name.concat(user?.last_name)}</Text>
                        <View className='w-full flex justify-end items-center'>
                            <Icon onPress={() => setModalVisible(true)} name="edit" size={25} color="#9D9D9D" />
                        </View>
                    </View>
                    <View className='flex-row items-center  w-1/2'>
                        <Icon name="map-marker" size={20} color="#9D9D9D" />
                        <Text className='ml-1 text-[#9D9D9D]'>Casero, Buenos Aires </Text>
                    </View>
                    <View className='flex-row  w-1/2'>
                        <Icon name="birthday-cake" size={20} color="#9D9D9D" />
                        <Text className='ml-1 text-[#9D9D9D]'>16/02/2000</Text>
                    </View>
                </View>
            </View>
            <View className='flex items-start'>
                <View className='pl-4'>
                    <Text className='font-[500] text-[16px]'>Information about me</Text>
                </View>
                <Text className='text-[#9D9D9D] text-start pl-4'>Estudiante de diseño fanatico del manga, acuario, mentor en MindHub, amante de lo visual, innovador, siempre voy por más! </Text>
            </View>
            <View className=' w-full flex items-center'>
                <Text className='border-b-[1px] w-11/12'></Text>
            </View>

            
            <View className='flex justify-center items-center pt-8 h-1/2'>
                <View className='' style={{ width: '30%', borderRadius: 50, overflow: 'hidden', flexDirection: 'row' }}>
                    <Text style={{ flex: 1, textAlign: 'center', padding: 5, backgroundColor: '#4338CA', color: 'white' }}>
                        Old
                    </Text>
                    <Text style={{ flex: 1, textAlign: 'center', padding: 5, backgroundColor: 'transparent', color: '#9D9D9D' }}>
                        New
                    </Text>
                </View>
                <View className='flex justify-center items-center h-full'>
                    <Text>Content in progress..</Text>
                </View>
            </View>
        </View >
    )
}
