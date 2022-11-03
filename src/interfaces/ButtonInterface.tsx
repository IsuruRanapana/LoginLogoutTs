import { GestureResponderEvent } from "react-native";

interface ButtonInterface {
    labelText: string,
    onPress:  ((event: GestureResponderEvent)=>void) | undefined,
}

export type {ButtonInterface}
