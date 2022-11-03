import { GestureResponderEvent } from "react-native";

interface buttonInterface {
    labelText: string,
    onPress:  ((event: GestureResponderEvent)=>void) | undefined,
}

export type {buttonInterface}
