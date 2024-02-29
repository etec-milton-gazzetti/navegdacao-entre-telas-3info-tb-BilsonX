import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela Inicial</Text>
      <Button title='Tela Inicial' onPress={() => navigation.navigate("Tela Inicial")}/>
    </View>
  );
}

function Sobre({ navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sobre</Text>
      <Button title="Sobre" onPress={() => navigation.navigate("Sobre")} />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Sobre" component={Sobre} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


