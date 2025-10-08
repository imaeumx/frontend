import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from '../styles';

export default function UserListPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/registration/api/users/")
            .then((res) => {
                setUsers(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    },[]
    );

    const handleEdit = (user) => {
        navigation.navigate("EditUser", { user });
    }

    const handleDelete = (id) => {
        Alert.alert(
            "Confirm Deletion",
            "Are you sure you want to delete this user?",
            (
                {text: "Cancel", style: "cancel"},
                {
                    text: "Delete", 
                    style: "destructive", 
                    onPress: () => {
                        axios.delete(`http://127.0.0.1:8000/registration/api/users/${id}/`)
                        .then(() => {
                            Alert.alert("Success", "User deleted successfully");
                        })
                        .catch((err) => {
                            console.log(err);
                            Alert.alert("Error", "Failed to delete user");
                        });
                    },
                }
            )
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Registered Users</Text>
            <FlatList
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.userCard}>
                        <Text style={styles.nameText}>{item.first_name} {item.last_name}</Text>
                        <Text style={styles.emailText}>Email: {item.email}</Text>
                        <Text style={styles.genderText}>Gender: {item.gender}</Text>
                        <View>
                            <TouchableOpacity
                                style={[styles.button, { backgroundColor: '#62b143ff', marginTop: '5px' }]}
                                onPress={() => handleEdit(item)}>
                                <Text style={styles.buttonText}>Edit</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.button, { backgroundColor: '#c5181bff' }]}
                                onPress={() => handleDelete(item.id)}>
                                <Text style={styles.buttonText}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )} />
        </View>
    )
}