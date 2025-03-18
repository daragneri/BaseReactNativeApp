import {View, Text, StyleSheet} from "react-native"

export default function AboutScreen({route}:any) {
    const {name} = route.params;
    return(
        <View style={styles.container}>
            <Text>Hello! {name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16
    }
})