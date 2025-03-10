import { useLocalSearchParams } from "expo-router";
import { Dimensions,View, Text, Image, ImageBackground, StyleSheet, Pressable } from "react-native";
import products from "./DataProduct"; // ✅ Ahora los datos están en un archivo separado


const { width } = Dimensions.get("window");
export default function ProductDetail() {
    const { id } = useLocalSearchParams(); // 📌 Obtiene el ID del producto desde la URL
    const product = products.find((p) => p.id === id); // Busca el producto por ID

    if (!product) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Producto no encontrado</Text>
            </View>
        );
    }

    return (
        <View style={styles.containerFather}> 
                <View style={styles.containerbg}>
                    <ImageBackground source={product.image2} style={styles.imgback}/>
                </View>


                    <View style={styles.containCoffe}>

                                
                                        <Text style={{color:"#D3A271",}}> Coffes</Text>

                                        <Text style={styles.titleHeader}>
                                                {product.name}
                                        </Text>

                                        <View >
                                            <Text style={styles.prices}> {product.price}</Text>   
                                        </View>

                                        <View>
                                            <Text style={styles.descriptionText}> {product.description}</Text>
                                        </View>

                                        <Pressable style={styles.orderButton}>
                                            <Text style={styles.orderText}>Order Now</Text>
                                        </Pressable>

                    </View>
               
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#fff" },
    image: { width: 200, height: 200, resizeMode: "contain", marginBottom: 20 },
    name: { fontSize: 20, fontWeight: "bold" },
    price: { fontSize: 18, color: "#5D4037", marginBottom: 10 },
    description: { fontSize: 14, textAlign: "center", paddingHorizontal: 20 },
    errorText: { fontSize: 16, color: "red" },
    imgback:{    
        width:width,
        height: 280, // Ajusta el alto según lo necesites
        resizeMode:"contain",
    },

    containerFather:{
        backgroundColor:"#543B1F",  
        flex:1,
    },


    containerbg:{
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        overflow:"hidden",

    },
    containCoffe:{
        flex:1,
        paddingRight:20,
        paddingLeft:20,
    },

    titleHeader:{
        fontFamily:"Manrope_600Bold",
        fontSize:24,
        color:"#fff",
        marginLeft:20,
    },

    prices:{
        fontFamily:"Manrope_400Regular",
        fontSize:24,
        color:"#D3A271",
        alignSelf:"flex-end",
        marginRight:20,
    },
    descriptioncontent:{
        marginTop:40,
        color:"#fff",
        alignSelf:"center"

    },
    descriptionText:{
        color:"#fff",
        alignSelf:"left",
        
    },

    orderButton: {
        position: "absolute", // 📌 Fija el botón en la pantalla
        bottom: 0, // 📌 Lo coloca 20px arriba del borde inferior
        backgroundColor: "#D3A271", // 📌 Color de fondo
        paddingVertical: 12,
        alignItems: "center",
        width:width
    },
    orderText: {
        color: "#black",
        fontSize: 22,
        fontFamily:"Manrope_600Bold",
    },
});
