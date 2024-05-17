// Task Three


let userIdCounter = 1;

// Function to create user profiles
function createUserProfiles(originalNames, modifiedNames) {
  const userProfiles = [];
  for (let i = 0; i < originalNames.length; i++) {
    userProfiles.push({
      originalName: originalNames[i],
      modifiedName: modifiedNames[i],
      id: userIdCounter++
    });
  }
  return userProfiles;
}

module.exports = {
  createUserProfiles
};
