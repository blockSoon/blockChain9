import UserService from "./service/user.service";
import Strategy from "./strategy/strategy";
import { GoogleAuthentiactor } from "./strategy/google.strategy";
import { KakaoAuthentiactor } from "./strategy/kakao.strategy";
import { EmailAuthenticator } from "./strategy/email.strategy";
import UserController from "./user.controller";

// 전략 패턴 객체 생성
const strategy = new Strategy();
// { strategy : {}, set() , login() }

strategy.set("email", new EmailAuthenticator());

// { strategy : {EmailAuthenticator{ authentcate }}, set() , login() }

strategy.set("kakao", new KakaoAuthentiactor());

// { strategy : {EmailAuthenticator{ authentcate }, KakaoAuthentiactor { authentcate }}, set() , login() }

strategy.set("google", new GoogleAuthentiactor());
// { strategy : {EmailAuthenticator{ authentcate }, KakaoAuthentiactor { authentcate }, GoogleAuthentiactor { authentcate } }, set() , login() }

// 완성된 객체를 유저 서비스 클래스 생성자의 매개변수로 전달 및 유저 서비스 객체 생성
const userService = new UserService(strategy)

// 유저 로그인 로직 클래스 생성 및 유저 서비스 로직 객체 생성자 매개변수로 전달
const userController = new UserController(userService);

userController.signin("email");

