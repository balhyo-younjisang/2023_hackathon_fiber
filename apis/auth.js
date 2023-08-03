import axios from "axios";
const IP = "172.30.1.87"; // 집 
// const IP = "10.10.98.202"; // 마루 180
// const IP = "192.168.209.116"; // 모바일 데이터
const AUTH_API_ROOT_URL = `http://${IP}:3000/auth` // localhost 부분을 실제 IP로 변경하니 작동

export const signIn = async (email, password) => {
    const signInApiUrl = `${AUTH_API_ROOT_URL}/login`;

    const res = await axios({
        method: "POST",
        url: signInApiUrl,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json"
        },
        data: {
            email,
            password,
        }
    }).catch((e) => {
        console.log(`[SIGNIN API ERROR] ${e}`);
    });

    return res;
}

export const signUp = async (email, password, name) => {
    const signUpApiUrl = `${AUTH_API_ROOT_URL}/join`;

    const res = await axios({
        method: "POST",
        url: signUpApiUrl,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json"
        },
        data: {
            email,
            password,
            name
        }
    }).catch((e) => {
        console.log(`[SIGNUP API ERROR] ${e}`);
    });

    return res;
}