import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { cadastrar } from "../services/auth";

export default function Cadastro({ navigation }) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function realizarCadastro() {
        if (!email || !senha) {
            alert("Preencha todos os campos.")
            return;
        }

        try {
            await cadastrar(email, senha)
            alert("Usuário cadastrado.")
            navigation.navigate("Login")
        } catch (error) {
            alert("Não foi possível realizar o cadastro.")
            console.log(error)
        }
    }

    return (
        <View>
            <Text>Cadastro</Text>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                placeholder="Senha"
                value="senha"
                onChangeText={setSenha}
                secureTextEntry
            />

            <TouchableOpacity
                onPress={realizarCadastro}
            >
                <Text>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
            >
                <Text>Já tenho uma conta</Text>
            </TouchableOpacity>
        </View>
    )
}