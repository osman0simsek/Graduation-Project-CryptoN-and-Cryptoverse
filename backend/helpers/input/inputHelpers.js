const bcrypt = require("bcryptjs");

const valideUserInput = (email, password) => {
  return email && password;
};
const comparePassword = (password, hashedpassword) => {
  return bcrypt.compareSync(password, hashedpassword);
};

module.exports = {
  valideUserInput,
  comparePassword
};
