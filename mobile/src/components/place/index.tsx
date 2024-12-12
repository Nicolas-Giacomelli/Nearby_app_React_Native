import { TouchableOpacity, TouchableOpacityProps, View, Text, Image} from "react-native";
import {s} from "./styles"
import {colors} from "@/styles/theme"
import { IconTicket } from "@tabler/icons-react-native";

export type placeProps = {
    id: string
    name: string
    description: string
    coupons: number
    cover: string
    addres: string
}

type Props = TouchableOpacityProps & {
    data:placeProps
}

export function Place({data, ...rest}:Props){
    return(
        <TouchableOpacity style={s.container}{...rest}>
            <Image style={s.image} source={{uri:data.cover}}/>
            <View style={s.content}>
                <Text style={s.name}>{data.name}</Text>
                <Text style={s.description}>{data.description}</Text>

                <View style={s.footer}>
                    <IconTicket size={16} color={colors.red.base}/>
                    <Text style={s.tickets}>{data.coupons} cupons disponiveis!</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}