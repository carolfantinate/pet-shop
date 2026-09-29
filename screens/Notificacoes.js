import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons'

export default function Notificacoes({ navigation }) {

    return (
        <SafeAreaView style={{margin: 20}}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
            >
                <Ionicons
                    name="arrow-back-outline"
                    size={20}
                    color={'#000'}
                />

            </TouchableOpacity>
            <Text>Notificacoes - Farei depois que definirem as funcionalidades do app, seria bom fazer um prototipo simples da home e agendamentos sla - 2 notificações</Text>
        </SafeAreaView>
    )
}