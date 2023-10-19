const Sequelize = require("sequelize");
// 폴더까지 경로 : index.js 파일 찾아서 index.js 파일에서 내보낸 객체
const config = require("../config");
const User = require("./users");

const sequelize = new Sequelize(
    config.dev.database,
    config.dev.username,
    config.dev.password,
    config.dev
)

const db = {};

db.sequelize = sequelize;
db.User = User;

// 테이블 초기화
User.init(sequelize);

module.exports = db;