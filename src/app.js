// Challenge 1: Store the user's data in localStorage
const storeUserData = (userData) => {
  Object.entries(userData).forEach(([key, value]) => {
      localStorage.setItem(key, JSON.stringify(value));
  });
  console.log(localStorage);
};

// Challenge 2: Get the user's data from localStorage and print
const getUserData = () => {
  const retrievedUserData = {};
  Object.keys(userData).forEach(key => {
      retrievedUserData[key] = JSON.parse(localStorage.getItem(key));
  });
  console.log(retrievedUserData);
};

// Challenge 3: Remove "state" data from localStorage
const removeStateFromLocalStorage = () => {
  localStorage.removeItem('state');
  console.log(localStorage);
};

// Challenge 4: Clear all data from localStorage
const clearLocalStorage = () => {
  localStorage.clear();
  console.log(localStorage);
};

// Challenge 5: Convert object to string using JSON.stringify()
const stringifyObject = (obj) => {
  const stringify = JSON.stringify(obj);
  console.log(stringify);
};

// Usage of the above functions
const userData = {
  firstName: 'Dhanush',
  lastName: 'kalki',
  age: 18,
  country: 'India',
  state: 'Tamil Nadu',
};

storeUserData(userData);
getUserData();
removeStateFromLocalStorage();
clearLocalStorage();

const userObject = {
  firstName: 'Rajat',
  age: 25,
  skills: ['HTML', 'CSS', 'JS', 'React'],
};

stringifyObject(userObject);

// Continue with the rest of the code for other challenges...
