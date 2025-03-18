import {View, Text, StyleSheet, Button} from "react-native"

export default function SettingsScreen({navigation}:any) {
    return(
        <View style={styles.container}>
            <Text>Hello!</Text>
            <Button title="Go to About" onPress={() => navigation.navigate("About", {
                name: "Dara"
            })}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16
    }
})