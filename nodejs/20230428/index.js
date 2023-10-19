//TCP server 만들어 봅시다~

// nodejs로 만들거임

// 내장 모듈로 사용할건 net

// net 이라는 모듈을 사용하면 TCP 소켓을 만들어서 사용할수있어요
// TCP 연결을 맺어주는 프로토콜
// TCP 소캣을 생성하고 서버와 클라이언트간의 응답 요청을 맺을수 있다.

// 내장 모듈 net을 가져옴
const net = require("net")
const PORT = 8080;

// 서버 객체를 생성
// createServer메서드로 콜백함수를 전달함.
// 클라이언트가 접속시 콜백함수 실행
const server = net.createServer((client)=>{
    // 클라이언트가 접속시 실행

    // 클라이언트가 데이터를 보내서 데이터를 받으면 어떻게하지?.
    client.on('data',(data)=>{
        // 클라이언트가 보낸 데이터

        // 네트워크를 통해 전송되는 데이터
        // 바이너리 형식으로 전송된다. 즉
        // 클라이언트가 보낸 데이터는 Buffer 형태로 전송이 되며
        // 서버는 해석해서 문자열로 변환 해주면 된다.
        // 출력된 데이터는 Buffer 형식으로 인코딩 해서 우리가 보낸 데이터처럼 보이는것.
        console.log(data.toString());

        // GET / HTTP/1.1
        // Host: localhost:8080
        // Connection: keep-alive
        // Cache-Control: max-age=0
        // sec-ch-ua: "Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"
        // sec-ch-ua-mobile: ?0
        // sec-ch-ua-platform: "Windows"
        // Upgrade-Insecure-Requests: 1
        // User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36
        // Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
        // Sec-Fetch-Site: none
        // Sec-Fetch-Mode: navigate
        // Sec-Fetch-User: ?1
        // Sec-Fetch-Dest: document
        // Accept-Encoding: gzip, deflate, br
        // Accept-Language: ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7

        // body의 내용
        
    })
}) // TCP의 내용을 만들어 준것.

// 서버를 대기상태로~
server.listen(PORT, ()=>{
    console.log("서버 잘 열렸음");
})
// node 파일의 경로