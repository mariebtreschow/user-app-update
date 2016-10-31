const fs = require('fs');

var users = JSON.parse(fs.readFileSync('users.json'));

//write the whole module here that will be requested in index.js
//write the search function here also

module.exports = {
    getUser: function() {
      return users;
    },

    searchUser: function(query) {
      var results = [];
      for (var i = 1; i < users.length; i++) {
        if (searchFirstName(query, users[i]) || searchLastName(query, users[i])) {
            result.push(users[i]);
          }
        }

      return results;
    },

    addUser: function(userObject) {
    users.push(userObject);

    fs.writeFile('users.json', JSON.stringify(users), (error, data) => {
      if (error) {
        throw error;
      }
    });
  }
};



function searchFirstName(input, user) {
    return user.firstname.toLowerCase().includes(input.toLowerCase());
}

function searchLastName(input, user) {
    return user.lastname.toLowerCase().includes(input.toLowerCase());
}
