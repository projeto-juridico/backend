db = db.getSiblingDB('auth-service');

db.createCollection('Auth');

db.User.insertMany([
  {
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    age: 25
  }
]);
