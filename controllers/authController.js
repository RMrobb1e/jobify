const register = (req, res) => {
  res.send('register user');
};

const login = (req, res) => {
  res.send('login user');
};

const updateUser = (req, res) => {
  res.send('update user');
};

export { login, register, updateUser };
