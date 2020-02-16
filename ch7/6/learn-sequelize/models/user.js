module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {//첫번째 인자 : 테이블이름, 복수형으로 변환
      name: {
        type: DataTypes.STRING(20),//VARCHAR
        allowNull: false,//NOTNULL
        unique: true,//UNIQUE
      },
      age: {
        type: DataTypes.INTEGER.UNSIGNED,//INT
        allowNull: false,
      },
      married: {
        type: DataTypes.BOOLEAN,//TINYINT
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,//DATETIME
        allowNull: false,
        defaultValue: sequelize.literal('now()'),//기본값
        // defaultValue: DataTypes.NOW,//기본값
      },
    }, {//테이블 옵션
      timestamps: false,//true시 createdAt, updatedAt 컬럼추가, paranoid : deletedAt 컬럼 추가
    });
};