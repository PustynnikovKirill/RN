import {StatusBar} from 'expo-status-bar';
import {Animated, Pressable, StyleSheet, Switch, Text, View} from 'react-native';
import ScrollView = Animated.ScrollView;
import {useState} from "react";

export default function App() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.container}>
            <View style={styles.container}/>
            <Pressable onPress={()=>{}}>
                <Text>I'm pressable!</Text>
            </Pressable>
            <ScrollView>
                {[...Array(100)].map((_,index)=><Text key={`Text.${index}`} style={styles.text}>Inside</Text>)}
            </ScrollView>
            <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize:26,
        fontWeight:'500'
    }


});
