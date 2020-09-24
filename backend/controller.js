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

/**
 * Logout the user by removing his session
 *
 * @param {object} req - request object
 * @param {object} res - response object
 */
exports.logout = async (req, res) => {
    //remove session
    req.session.user = null;

    res.status(200).json({
      success: true,
      message: 'logged out'
    });
};

/**
 * Check if the user is logged in
 *
 * @param {object} req - request object
 * @param {object} res - response object
 */
exports.loginCheck = async (req, res) => {
  if(req.session.user){
    res.status(200).json({
      success: true,
      message: 'user is logged in'
    });
  } else {
    res.status(200).json({
      success: false,
      message: 'user is not logged in'
    });
  }
};

exports.getData = async (req, res) => {
  if(req.session.user){
    res.status(200).json({
      success: true,
      data:[
        {
          name: 'Linkedin',
          url: 'https://www.linkedin.com/in/rodrigosurita/'
        },
        {
          name:'Instagram',
          url:'https://www.instagram.com/rodrigosurita/'
        }
      ]
    });
  } else {
    res.status(200).json({
      success: false,
      message: 'user is not logged in'
    });
  }
};

