var tweetbook = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  },
};

// Puts all user IDs into an array. USEFUL

function collectUserIDs(networkData) {
  var userIDs = [];
  for (var user in networkData) {
    userIDs.push(user);
  }
  return userIDs;
}

// Puts all user names into a string. NOT USEFUL YET

function listUsersByName(networkData) {
  var listOfUsersNames = [];
  for (var users in networkData) {
    var user = networkData[users];
    listOfUsersNames.push(user.name);
  }
  return listOfUsersNames.join(", ");
}

// List everyone and for each of them, list the names of who they follow and who follows them

function listUsers(networkData) {
  var theirName = "";
  var whoTheyFollow = "";
  var theirFollowers = "";

  for (var users in networkData) {
    var userID = networkData[users];
    theirName = userID.name;



    console.log(theirName, "follows", whoTheyFollow, "and", theirFollowers, "follow them.");
  }
}

listUsers(tweetbook);


// Identify who follows the most people


// Identify who has the most followers


// Identify who has the most followers over 30


// Identify who follows the most people over 30


// List those who follow someone that doesn't follow them back


// List everyone and their reach (sum of # of followers and # of followers of followers)

