import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { login } from '../services/auth'

export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function realizarLogin() {
        if (!email || !senha) {
            alert("Preencha todos os campos.")
            return;
        }

        try {
            await login(email, senha)
            navigation.navigate("Home")
        } catch (error) {
            alert("Email ou senha inválidos.")
            console.log(error)
        }
    }
    return (
        <SafeAreaView>
            <Text>Login</Text>

            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />

            <TouchableOpacity
                onPress={realizarLogin}
            >
                <Text>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("Cadastro")}
            >
                <Text>Criar uma conta</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}