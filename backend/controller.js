exports.loginSubmit = async (req, res) => {
  console.log(req.body);
  let { username, password } = req.body;
  if(username == 'admin' && password == 'admin'){
    res.status(200).json({
      success: true,
      message: 'OK'
    });
  } else {
    res.status(200).json({
      success: false,
      message: 'Incorrect username or password.'
    });
  }
};
