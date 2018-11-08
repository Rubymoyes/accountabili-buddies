exports.seed = function (knex, Promise) {
    return knex("questions")
        .del()
        .then(function () {
            return knex("questions").insert([
                { id: 1, question: 'What is the meaning of life?', response: '' },
                { id: 2, question: 'What is the speed velocity of an unladen swallow?', response: '' },
                { id: 3, question: 'Do you enjoy these surveys?', response: '' },
                { id: 4, question: '왜이 질문을 읽을 수 없습니까?', response: '' }
            ]);
        });
};