import {View, Text, TouchableOpacity} from 'react-native'
import { logout } from '../services/auth'

export default function Perfil({navigation}) {
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
    return(
        <View>
            <Text>Perfil</Text>

            <TouchableOpacity
                onPress={realizarLogout}
            >
                <Text>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}