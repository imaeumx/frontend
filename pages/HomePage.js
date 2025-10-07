import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';


export default function Homepage({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Homepage</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('UserList')}>
                    <Text style={styles.buttonText}>View User</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}