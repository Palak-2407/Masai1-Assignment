function fetchUserData(url) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const users = [
          { id: 1, name: "John Doe", email: "john.doe@example.com", age: 30 },
          { id: 2, name: "Jane Smith", email: "jane.smith@example.com", age: 25 },
          { id: 3, name: "Mary Johnson", email: "mary.johnson@example.com", age: 22 },
          { id: 4, name: "James Brown", email: "james.brown@example.com", age: 40 }
        ];
        resolve(users);
      }, 1000); 
    });
  }
  
  function processUsers(users, minAge) {
    return users
      .filter(user => user.age >= minAge)
      .map(user => ({ name: user.name, email: user.email }));
  }
  
  function createUserManager() {
    let usersList = [];
  
    return {
      addUser(user) {
        usersList = [...usersList, user];
      },
      
      getUsers() {
        return usersList.map(user => {
          const { email, ...rest } = user;
          return rest; 
        });
      },
  
      
      findUserByName(name) {
        const user = usersList.find(user => user.name === name);
        return user ? user : "User not found";
      }
    };
  }
  
  console.log("Before fetchUserData() call");
  
  fetchUserData('https://api.example.com/users')
    .then(users => {
      console.log("Fetched users:", users);
  
      const processedUsers = processUsers(users, 30);
      console.log("Processed users (min age 30):", processedUsers);
  
      const userManager = createUserManager();
      processedUsers.forEach(user => userManager.addUser(user));
  
      console.log("After adding users to the manager:");
      console.log("Users (with hidden emails):", userManager.getUsers());
      console.log("Find user by name 'John Doe':", userManager.findUserByName('John Doe'));
      console.log("Find user by name 'Nonexistent User':", userManager.findUserByName('Nonexistent User'));
    })
    .catch(error => console.error("Error fetching user data:", error));
  
  console.log("After fetchUserData() call");