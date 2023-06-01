import { View, TextInput, Text } from "react-native"
import { Icon } from "react-native-elements"

export default function InputCustom({ value, handleValue, icon, name, placeholder, error }) {
    console.log('Error:', error);
    return (
        <View className='w-full flex justify-center items-center'>
            <View className={` w-5/6 border-[1px] ${error ? 'border-red-500 mt-8' : 'border-slate-300'} relative py-2 px-4 mb-4 rounded-lg flex flex-row items-center justify-between`}>
                <Text className='text-[#F97316] left-4 bg-[#FAFCFC] absolute top-[-12px]'>{name}</Text>
                <TextInput className={`${error ? ' w-3/4' : 'w-3/4'}`} placeholder={placeholder} value={value} onChangeText={handleValue} secureTextEntry={name === 'Password'} />
                <Icon className='pr-0' name={icon} type='material-community' size={20} />
            </View>
            {error && <Text className="text-red-700 absolute top-[-10px] text-center">{error}</Text>}
        </View>
    )
}