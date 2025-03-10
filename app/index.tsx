import { Link } from 'expo-router';
import { Text, View, Pressable, ImageBackground, Image, StyleSheet } from "react-native";
import backgroundImage from "../assets/images/Background.png";
import LogoMake from "../assets/images/trans_bg.png";


export default function Home() {
  return (
    <ImageBackground 
      source={backgroundImage}
      style={styles.background}
    >


    

    <View style={styles.container}>
      <Image 
      source={LogoMake}
      style={styles.logo}
      >

      </Image>

     
      <Link href="./Products" asChild>
        <Pressable style={styles.button}>
           <Text style={styles.btntext}> Get Started</Text>
        </Pressable>
      </Link>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background:{
    flex: 1,
    resizeMode:"cover",
    justifyContent:"center",
    backgroundColor:"#D3A271"
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  logo: {
    width: 200,  // Ajusta el tamaño del logo
    height: 200, // Ajusta el tamaño del logo
    resizeMode: "contain", // Asegura que el logo no se deforme
  },
  button: {
    marginTop: 20,
    backgroundColor: "#543B1F", // Marrón
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  btntext:{   
      color: "#F7EDDD",
      fontSize: 14,
      fontFamily:"Manrope_400Regular",
    
  }
 
})