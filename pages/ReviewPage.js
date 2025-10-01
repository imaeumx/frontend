import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles';
import axios from 'axios';

export default function ReviewPage({ route, navigation }) {
    const { formData } = route.params

    const handleSubmit = async () => {
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/registration/api/register/", 
                formData
            );
            Alert.alert("Success", "User registered successfully");
            navigation.getBack();
        } catch (error) {
            Alert.alert("Error", JSON.stringify(error.response?.data || "Something went wrong"));
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Review Information</Text>

            <Text style={styles.review}>First Name: {formData.first_name}</Text>
            <Text style={styles.review}>Last Name: {formData.last_name}</Text>
            <Text style={styles.review}>Email: {formData.email}</Text>
            <Text style={styles.review}>Password: {formData.password}</Text>
            <Text style={styles.review}>Gender: {formData.gender}</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.buttonText}>Go back to edit</Text>
            </TouchableOpacity>


            <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit}
            >
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}