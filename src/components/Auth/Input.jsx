import { View, TextInput, Text } from 'react-native';

import Button from '../Buttom.jsx';
import RegisterButtom from '../Google/RegisterButtom.jsx';

export default function Input() {
    return (
        <View >
            <View className="flex w-full font-roboto justify-center items-center gap-y-8">
                <View className="flex w-5/6 flex-row items-center justify-between border border-[#1F1F1F] rounded-lg p-1">
                    <Text className="text-[#F97316]">Email: </Text>
                    <View className="flex flex-row items-center">
                        <TextInput placeholder="   DragonballZ@Krowl.com" className="outline-none flex-grow" />
                    </View>
                </View>
                <View className="flex w-full font-roboto justify-center items-center mt-2" >
                    <View className="flex w-5/6 flex-row items-center justify-between border border-[#1F1F1F] rounded-lg p-1">
                        <Text className="text-[#F97316]">Password: </Text>
                        <View className="flex flex-row items-center">
                            <TextInput placeholder="    ****************" className="outline-none text-start flex-grow" />
                        </View>
                    </View>
                </View>
                <View className='flex justify-center items-center h-44 '>
                    <Button title='Sign In' />
                    <View className='mt-4'>
                        <RegisterButtom />
                    </View>

                </View>
            </View>
        </View>
    )
}
