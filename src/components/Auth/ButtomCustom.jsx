import { TouchableOpacity, Text, StyleSheet  } from 'react-native';

export default function Button({ onPress, title, email, image }) {
    return (
        <TouchableOpacity style={styles.container}  onPress={onPress}>
            <Text >{title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F97316',
        borderRadius:10,
        marginBottom:15,
        padding:15,

    }
})