import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={{ margin: 20 }}>
            {/* Cabeçalho */}
            <View>
                {/* Perfil */}
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Perfil")}
                        style={{ backgroundColor: '#76b0d6', padding: 10, borderRadius: 50}}
                    >
                        <Ionicons name="person" size={30} color={'#fff'}/>
                    </TouchableOpacity>
                    <Text>Bem-vindo(a)!</Text>
                </View>

                {/* Notificações */}
                <TouchableOpacity
                    onPress={() => navigation.navigate("Notificacoes")}
                    style={{position: 'absolute', right: 0,  padding: 10}}
                >
                    <Ionicons name="notifications" size={30} />
                </TouchableOpacity>
            </View>

            {/* Conteúdo da Home */}
            <View style={{ marginTop: 20, gap: 10 }}>
                <Text>Conheça nossos serviços!</Text>
                <Text>
                    🛁 Agende seu banho; {'\n'}
                    ✂️ Agende sua tosa;{'\n'}
                    🩺 Agende sua consulta;{'\n'}
                    🛍️ Compre nossos produtos.
                </Text>
            </View>
        </SafeAreaView>
    );
}