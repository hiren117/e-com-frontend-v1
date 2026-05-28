import axios from "axios";

const LOCALHOST = "http://localhost:1090";

export const API_BASE_URL = LOCALHOST;

// OLD CODE (broken — do not use):
// const jwt = localStorage.getItem("jwtToken");  // ❌ wrong key: auth actions save under "jwt", not "jwtToken"
// const api = axios.create({
//     baseURL: API_BASE_URL,
//     headers: {
//         "Authorization": `Bearer ${jwt}`,        // ❌ read once at module load, before login — always null
//         'Content-Type': 'application/json'
//     }
// })
//
// Problems with the old code:
// 1. Key mismatch — Auth/Action.ts writes localStorage.setItem("jwt", ...) but this read "jwtToken", so the token was never found.
// 2. Module-load timing — axios.create() runs once when the file is first imported (before the user logs in),
//    so even with the correct key the token would be null. It would only work after a full page reload post-login.

// Authorization header is NOT set here because axios.create() runs once at module load,
// before the user has logged in. Any token read here would be null or stale.
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

// The interceptor runs before every request, so it always picks up the current token.
// The key "jwt" matches what Auth/Action.ts writes via localStorage.setItem("jwt", ...).
api.interceptors.request.use((config) => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
        config.headers.Authorization = `Bearer ${jwt}`;
    }
    return config;
})

export default api;