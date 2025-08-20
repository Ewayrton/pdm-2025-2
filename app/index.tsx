import { Text, View } from "react-native";
import {Profile} from "@/components/Profile";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
      }}
    >
    <Text
      style={{
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center"
      }}
    >
      App criado para a disciplina Programação para Dispositivos Móveis
    </Text>

    <Profile />
    </View>
    
  );
}
