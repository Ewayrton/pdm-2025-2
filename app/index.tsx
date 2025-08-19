import { Text, View, Image } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20
      }}
    >
      <Text style={{fontWeight: "bold"}}>
        Ewayrton Oliveira.
      </Text>
        <Image source={require('./images/foto perfil.jpg')}
             style={{width: 200, height: 200, borderRadius: 100}}      
        >
        </Image>
          <Text style={{textAlign: "center"}}>
            Sou apaixonado por tecnologia e desenvolvimento web, atualmente cursando Sistemas para Internet na UNICAP. 
            Tenho experiência prática com Java, Spring Boot e Next.js, além de já ter desenvolvido projetos como aplicativos de agendamento 
            e plataformas de gestão. Estou sempre em busca de novos aprendizados e oportunidades que me permitam evoluir como desenvolvedor.
          </Text>
    </View>
  );
}
