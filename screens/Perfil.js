import { View, Text, TouchableOpacity } from 'react-native'
import { logout } from '../services/auth'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function Perfil({ navigation }) {
    async function realizarLogout() {
        try {
            await logout()
            alert("Logout realizado com sucesso!");
            navigation.navigate("Login")
        } catch (error) {
            alert("Não foi possível sair da conta")
            console.log(error)
        }
    }
    return (
        <SafeAreaView style={{ margin: 20 }}>

            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
            >
                <Ionicons
                    name="arrow-back-outline"
                    size={20}
                    color={'#000'}
                />

            </TouchableOpacity>
            
            <Text>Perfil</Text>

            <TouchableOpacity
                onPress={realizarLogout}
            >
                <Text>Sair</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}