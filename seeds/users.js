exports.seed = function (knex, Promise) {
    return knex("users")
        .del()
        .then(function () {
            return knex("users").insert([
                { id: 1, description: "Ruby", user_id: 99901 },
                { id: 2, description: "Joan", user_id: 99902 },
                { id: 3, description: "Brandon", user_id: 99903 },
                { id: 4, description: "Bobbi", user_id: 99904 }
            ]);
        });
};