const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types: { ObjectId } } = Schema;
const commentSchema = new Schema({
    commenter: {
        type: ObjectId,//ref 스키마의 사용자 ObjectId가 들어감,join과 비슷한 기능
        required: true,
        ref: 'User',
    },
    comment: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Comment', commentSchema);
//첫 번째 인자 : 컬렉션 이름, comments가 됨,세 번째 인자로 컬렉션 이름 지정가능