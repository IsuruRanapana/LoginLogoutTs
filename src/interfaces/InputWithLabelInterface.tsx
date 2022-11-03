import {KeyboardTypeOptions} from 'react-native';

interface InputWithLabelInterface {
    labelText: string,
    onChange: ((text: string) => void) | undefined,
    value: string,
    secureTextEntry: boolean,
    keyboardType: KeyboardTypeOptions | undefined
}

export type {InputWithLabelInterface};
