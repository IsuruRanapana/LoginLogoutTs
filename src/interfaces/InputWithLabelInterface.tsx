import {KeyboardType} from 'react-native';

interface InputWithLabelInterface {
    labelText: string,
    onChange: ((text: string) => void) | undefined,
    value: string,
    secureTextEntry: boolean,
    keyboardType: KeyboardType | undefined
}

export type {InputWithLabelInterface};
