import {StyleSheet, View, Text} from 'react-native';
import {Box} from "./src/Box/Box";
import {VStack} from "./src/VStack/VStack";
import {HStack} from "./src/Hstack/HStack";
import {ZStack} from "./src/ZStack/ZStack";


export default function App() {
    return (
        <View style={styles.container}>
            <VStack>
                <Box width={100} bgr={'#ad3434'}>
                    <Text>Children</Text>
                </Box>
                <HStack>
                    <Box width={100} bgr={'#ad3434'}/>
                    <Box width={100} bgr={'#ad3434'}/>
                    <Box width={100} bgr={'#ad3434'}/>
                    <Box width={100} bgr={'#ad3434'}/>
                    <Box width={100} bgr={'#ad3434'}/>
                    <Box width={100} bgr={'#ad3434'}/>
                </HStack>
                <ZStack reverse>
                    <Box width={100} mt={10} ml={10} bgr={'#3a65c0'}/>
                    <Box width={100} mt={20} ml={20} bgr={'#1ace22'}/>
                    <Box width={100} mt={30} ml={30} bgr={'#1ace22'}/>
                    <Box width={100} mt={40} ml={40} bgr={'#f1e60c'}/>
                </ZStack>
            </VStack>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1,
        backgroundColor: '#ffffff',
    }
});
