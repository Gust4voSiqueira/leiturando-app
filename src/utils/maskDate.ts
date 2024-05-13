import { mask } from "react-native-mask-text";

export function maskDate(text: string) {
    return mask(text, "99/99/9999")
}
