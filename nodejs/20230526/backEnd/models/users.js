const Sequelize = require("sequelize");

class User extends Sequelize.Model {
    static init(seq){
        return super.init({
            name : {
                type : Sequelize.STRING(20),
                allowNull : false
            },
            age : {
                type : Sequelize.INTEGER,
                allowNull : false
            },
            user_id : {
                type : Sequelize.STRING(20),
                allowNull : true
            },
            user_pw : {
                type : Sequelize.STRING(64),
                allowNull : true
            }
        },{
            sequelize : seq,
            timestamps : true, // 추가 수정 자동 생성
            underscored : false, // 카멜 케이스 할거임?
            modelName : "User", // 노드 프로젝트에서 사용할 이름(조회 했을때 보임)
            tableName : "users", // 데이터 베이스 테이블의 이름
            paranoid : false, // 삭제 시간 표기 할거임?
            charset : "utf8", // 인코딩 방식은 꼭 작성 해야한다.
            collate : "utf8_general_ci", // 인코딩 방식은 꼭 작성 해야한다.
        })
    }
}

module.exports = User;