import {StyleSheet} from 'react-native';

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
});

export default styles;