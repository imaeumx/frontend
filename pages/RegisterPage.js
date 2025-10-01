import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';
import React, { useState } from 'react';
import { TextInput } from 'react-native-web';

export default function RegisterPage({ navigation }) {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        gender: "",
    });

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>User Registration</Text>

            <TextInput style={styles.input}
                placeholder='First Name'
                value={formData.first_name}
                onChangeText={(text) => handleChange("first_name", text)} />

            <TextInput style={styles.input}
                placeholder='Last Name'
                value={formData.last_name}
                onChangeText={(text) => handleChange("last_name", text)} />

            <TextInput style={styles.input}
                placeholder='Email'
                value={formData.email}
                onChangeText={(text) => handleChange("email", text)} />

            <TextInput style={styles.input}
                placeholder='Password'
                value={formData.password}
                secureTextEntry
                onChangeText={(text) => handleChange("password", text)} />

            <TextInput style={styles.input}
                placeholder='Gender'
                value={formData.gender}
                onChangeText={(text) => handleChange("gender", text)} />

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Review', { formData })}>
                <Text style={styles.buttonText}>Review and Submit</Text>
            </TouchableOpacity>
        </View>
    )
}