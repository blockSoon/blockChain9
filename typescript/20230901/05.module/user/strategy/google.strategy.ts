import {UserParams} from "../interfaces/login.request"
import {AuthenticatonResponse, Authenticator} from "./Authenticator"

// 검증 객체 구조 상속
export class GoogleAuthentiactor implements Authenticator {
    async authentcate(credentials: UserParams): Promise<AuthenticatonResponse> {
        // 구글 로그인 로직 작성 부분
        console.log(credentials)
        console.log("google login 성공");
        // 반환값의 객체는 AuthenticatonResponse 인터페이스로 구조 정의 해놓은 것. 
        return {success : true}
    }
}