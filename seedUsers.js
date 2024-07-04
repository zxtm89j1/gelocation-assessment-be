const User = require("./models/User");
const bcrypt = require("bcrypt");

const seedUsers = async () => {
  try {
    await User.deleteMany({});

    const users = [
      { username: "user1", email: "user1@example.com", password: "password1" },
      { username: "user2", email: "user2@example.com", password: "password2" },
    ];

    for (let user of users) {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      await User.create({
        email: user.email,
        password: hashedPassword,
      });
    }

    console.log("Users seeded successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { seedUsers };
