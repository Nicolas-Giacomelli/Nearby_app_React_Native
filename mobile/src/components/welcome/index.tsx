import { Image, Text, View } from "react-native";

import { s } from "./styles"

export function Welcome(){
    return(
        <View>
            <Image source={require("@/assets/logo.png")} style={s.logo} />

            <Text style={s.title}>Boas Vindas ao Nearby</Text>

            <Text style={s.subtitle}>
                Tenha cupons de vantagem para usar em {"\n"}
                seus estabeleicmentos favoritos
            </Text>
        </View>
    )
}