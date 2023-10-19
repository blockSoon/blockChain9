// interface는 객체의 구조를 정의하는 "타입"

interface IBlock {
    id : number
    title : string
    content : string
    date : number
    like : number
    // 객체의 구조에서 hit가 없어도 가능한 정의
    hit?: number
}

const Block : IBlock = {
    id : 0,
    title : "",
    content : "",
    date : 0,
    like : 0,
    hit : 0
}

const Block2 : IBlock = {
    id : 0,
    title : "",
    content : "",
    date : 0,
    like : 0
}

// 추상
// interface
// class

// implements
// implements 키워드는 class에 구조가 만족하는지 여부 체크
// interface IProduct {
//     name : string
//     price?: number
// }

// class product implements IProduct {
//     name: string
//     constructor(name: string, price: number){
//         this.name = name;
//     }
// }

