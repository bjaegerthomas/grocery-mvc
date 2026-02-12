// In-memory "database" (resets whenever server restarts)
const db = {
    users: [
      // { id: "1", email: "admin@grocery.com", passwordHash: "...", role: "admin" }
    ],
    groceries: [
      // { id: "1", name: "Milk", createdBy: "1" }
    ],
  };
  
  module.exports = { db };
  