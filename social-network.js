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

// Checks who follows a given userid.

function whoFollowsMe(userid, networkData) {
// Sets an array of all users ids in the social network.
  var theUsers = collectUserIDs(networkData);
// Receives a userID to check if they are being followed by each user.
  var checkThisID = userid;
  var theFollowers = [];
    for (var users in networkData) {
      var theirID = networkData[users];
      theirID['follows'].forEach(function(following) {
        if (checkThisID === following) {
          theFollowers.push(theirID['name'])
        }
      });
    }
  // Return an array with each name of who follows the given user.
  return theFollowers;
}

// List everyone and for each of them, list the names of who they follow and who follows them

function listUsers(networkData) {

  for (var users in networkData) {
    var userID = networkData[users];
    var theirName = userID.name;
    var whoTheyFollowArray = [];
    var theirFollowersArray = whoFollowsMe(users, networkData);
    // Adds the names of their followers to an array.
    userID['follows'].forEach(function(user){
      var theirID = networkData[user];
      whoTheyFollowArray.push(theirID['name']);
    });
    console.log("User: " + theirName);
    console.log("They follow: " + whoTheyFollowArray.join(", "));
    console.log("Their followers: " + theirFollowersArray.join(", "));
  }
}

// listUsers(tweetbook);


// Identify who follows the most people

function whoFollowsTheMost(networkData) {

  var theUsers = collectUserIDs(networkData);

  var followsMost;
  var howManyTheyFollow = 0;

  for (var users in networkData) {
    var userID = networkData[users];
    var theirName = userID.name;
    var theyFollow = userID['follows'];

    if (theyFollow.length > howManyTheyFollow) {
      followsMost = theirName;
      howManyTheyFollow = theyFollow.length;
    }
  }
  console.log(followsMost + " follows the most users.");
}

whoFollowsTheMost(tweetbook);


// Identify who has the most followers


// Identify who has the most followers over 30


// Identify who follows the most people over 30


// List those who follow someone that doesn't follow them back


// List everyone and their reach (sum of # of followers and # of followers of followers)

// Puts all user names into a string. NOT USEFUL YET

function listUsersByName(networkData) {
  var listOfUsersNames = [];
  for (var users in networkData) {
    var user = networkData[users];
    listOfUsersNames.push(user.name);
  }
  return listOfUsersNames.join(", ");
}
