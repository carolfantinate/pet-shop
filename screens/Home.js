import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={{ margin: 20 }}>
            {/* Cabeçalho */}
            <View>
                {/* Perfil */}
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Perfil")}
                    >
                        <Text>👤</Text>
                    </TouchableOpacity>
                    <Text>Olá, Usuário!</Text>
                </View>

                {/* Notificações */}
                <TouchableOpacity
                    onPress={() => navigation.navigate("Notificacoes")}
                    style={{ alignSelf: 'flex-end' }}
                >
                    <Text>🔔</Text>
                </TouchableOpacity>
            </View>

            {/* Conteúdo da Home */}
            <View>
                <Text>Bem-vindo ao Pet Shop!</Text>
                <Text>
                    🛁 Agende seu banho; 
                    ✂️ Agende sua tosa;
                    🩺 Agende sua consulta;
                    🛍️ Compre nossos produtos.
                </Text>
            </View>
        </SafeAreaView>
    );
}