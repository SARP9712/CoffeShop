import { useRouter } from 'expo-router'; // 📌 Importar useRouter
import { Dimensions, Text, View, Pressable, FlatList, ImageBackground, Image, StyleSheet } from "react-native";
import CoffeBar from "./../../assets/images/CoffeBar.jpg";
import LogoMake from "./../../assets/images/white_on_trans.png";
import products from "./DataProduct"; // ✅ Importa desde el nuevo archivo

const { width } = Dimensions.get("window");



export default function Products() {
    const router = useRouter(); // 📌 Hook para navegar

    return (
        <View style={styles.containerFather}>
            {/* Imagen de fondo */}
            <View style={styles.container}>
                <ImageBackground source={CoffeBar} style={styles.imgback}/>
                <Image source={LogoMake} style={styles.logo} />
                <View style={styles.overlay}></View>
            </View>

            {/* 📌 Lista de productos */}
            <FlatList 
                data={products}
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }} 
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <View style={styles.imageContainer}>
                            <Image source={item.image1} style={styles.image} />
                        </View>
                        <Text style={styles.name}>{item.name} | {item.price}</Text>
                        <Text style={styles.description}>{item.description}</Text>

                        {/* 📌 Botón que lleva a otra pantalla con el ID del producto */}
                                          
                      <Pressable 
                        style={styles.btnSelect} 
                        onPress={() => {
                        console.log("ID del producto:", item.id); // ✅ Muestra el ID en consola
                        router.push(`/Products/${item.id}`); // ✅ Navega a la pantalla del producto
                 }}
>
                            <Text style={styles.TextBtn}>Seleccionar</Text>
                        </Pressable>
                    </View>
                )}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    containerFather:{
        flex: 1,  // 📌 As
        backgroundColor:"#543B1F",
    },

    containerCard:{
        flex:1,
        width:"100%",
        
    },

    logo: {
        position:"absolute",
        zIndex:1,
        left:70,
        width: 200,  // Ajusta el tamaño del logo
        height: 200, // Ajusta el tamaño del logo
        resizeMode: "contain", // Asegura que el logo no se deforme
      },

    card: {
        flex:1,
        justifyContent:'center',
        alignItems: "center",
        backgroundColor: "#D3A271",
        borderRadius: 15,
        padding: 15,
        margin: 5,
        width:150,
        height:"auto",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5, // Sombra en Android
    },
    container: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        overflow: "hidden", // Necesario para que el borde se aplique correctamente
    },
    imgback:{    
        width:width,
        height: 200, // Ajusta el alto según lo necesites
        justifyContent: "center",
        paddingHorizontal: 20,   
        position:"relative",
        zIndex:-20,
    },
    overlay:{
        ...StyleSheet.absoluteFillObject, // Cubre todo el ImageBackground
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Color negro con 50% de opacidad
    },
    name: {
        flexDirection:"row",
        fontSize: 14,
        color: "#3E2723",
        textAlign: "center",
        marginBottom: 5,
        justifyContent:"space-between",
        fontFamily:"Manrope_400Regular",
    },
    imageContainer: {
        width: "100%",  // Asegura que el contenedor ocupa todo el ancho del card
        alignItems: "center",  // Centra la imagen horizontalmente
        justifyContent: "center", // Centra la imagen verticalmente si el contenedor es flexible
        height: 80,  // Ajusta este valor según sea necesario
        marginBottom:20,
        marginLeft:40,
    },
    image: {
        width: 150,
        height: 120,
        resizeMode: "contain",
        position: "absolute",
        top: -20,
        zIndex: 1,
        shadowColor: "#000",  // Color de la sombra
        shadowOffset: { width: 0, height: 4 },  // Dirección de la sombra
        shadowOpacity: 0.3,  // Intensidad de la sombra
        shadowRadius: 5,  // Difuminado de la sombra
        elevation: 8,  // Necesario para Android
    },
    
    price: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#5D4037",
      
    },
    description: {
        fontSize: 12,
        color: "#6D4C41",
        textAlign: "left",
        fontFamily:"Manrope_400Regular",

    },
    btnSelect:{
        marginTop: 20,
        backgroundColor: "#543B1F", // Marrón
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 20,
    },
    btnSelect1:{
        marginTop: 20,
        backgroundColor: "#D3A271", // Marrón
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 20,
        width:"40%",
        alignItems:"center",
       alignSelf:"center",
       marginBottom: 50, // 🔥 Asegura que haya espacio al final del scroll
    },
    
    TextBtn:{
        color: "#F7EDDD",
        fontSize: 14,
        fontFamily:"Manrope_400Regular",
            },
     footerContainer: {
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20, // 🔥 Se separa del último elemento
            },
})