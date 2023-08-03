import { atom } from "recoil";

export const currentUserInfo = atom({
    key: "currentUserInfo",
    default: undefined,
    dangerouslyAllowMutability: true, // atom 값 변경 위해
})