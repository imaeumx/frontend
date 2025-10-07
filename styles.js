import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#f3f3f3',
    },

    engine: {
        position: 'absolute',
        right: 0,
    },

    body: {
        backgroundColor: '#fff',
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E8DFCA',
    },

    title: {
        fontSize: 32,
        marginBottom: 20,
        color: '#6D94C5',
        fontWeight: 'bold',
    },

    button: {
        backgroundColor: '#6D94C5',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },

    buttonText: {
        color: '#e8ecf0ff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    description: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: '#333',
    },

    footer: {
        color: '#333',
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },

    input: {
        borderWidth: 1,
        borderColor: '#6D94C5',
        borderRadius: 5,
        padding: 10,
        marginBottom: 16,
        backgroundColor: '#CBDCEB',
        color: '#4771a3ff',
    },

    review: {
        marginBottom: 16,
        fontSize: 15,
        color: '#4771a3ff',
        fontWeight: '500',
    },

    userCard: {
        padding: 15,
        marginVertical: 8,
        backgroundColor: '#fffaeeff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#c3e4ffff',
        shadowColor: '#c3e4ffff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },

    nameText: {
        fontSize: 16,
        color: '#41749eff',
        marginBottom: 4,
        fontWeight: 'bold',
    },

    emailText: {
        fontSize: 14,
        color: '#5586afff',
        marginTop: 5,
        borderTopWidth: 1,
        borderTopColor: '#c3e4ffff',
        paddingTop: 5,
    },

    genderText: {
        fontSize: 14,
        color: '#5586afff',
    },
});

export default styles;