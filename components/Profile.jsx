import { Text, Image, View } from 'react-native';

export const Profile = () =>{

 return(
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
        <Image source={require('@/app/images/foto perfil.jpg')}
             style={{width: 200, height: 200, borderRadius: 100}}      
        >
        </Image>
          <Text style={{textAlign: "center"}}>
            Sou estudante de Sistemas para Internet na UNICAP, apaixonado por tecnologia e com experiência acadêmica em Java, Spring Boot e Next.js.
          </Text>
    </View>
    
 )
};