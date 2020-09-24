/**
 * Check the user's information and create a session if the user is authenticated
 *
 * @param {object} req - request object
 * @param {object} res - response object
 */
exports.loginSubmit = async (req, res) => {
  let { username, password } = req.body;
  if(username == 'admin' && password == 'admin'){

    //creating user session - example
    req.session.user = {
      name: 'ADMIN',
      address: 'Sao Paulo, SP, Brazil',
      job: 'developer'
    }

    res.status(200).json({
      success: true,
      message: 'OK'
    });

  } else {

    //remove session
    req.session.user = null;

    res.status(200).json({
      success: false,
      message: 'Incorrect username or password.'
    });

  }
};
