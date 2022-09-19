'use strict';
const User = _model.user;

const { signToken } = _lib('jwt');
const bcrypt = require('bcrypt');

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    let findEmail = await User.findOne({
      where: {
        email,
      },
    });
    // const genSalt = await bcrypt.genSalt(10);
    // const hash = await bcrypt.hash("123", genSalt);
    // console.log(hash, "hash")
    if (findEmail && findEmail.dataValues) {
      const isPasswordMatch = await bcrypt.compare(
        password,
        findEmail.dataValues.password,
      );
      if (isPasswordMatch) {
        const user_token = await signToken({
          payload: { id: findEmail.dataValues.id },
        });
        req.body.token = user_token;
        req.body.id = findEmail.dataValues.id;
        res.success(req.body);
      } else {
        res.errorClient('password salah');
      }
    } else {
      res.errorClient('akun tidak terdaftar');
    }
  } catch (err) {
    console.log(err);
    res.error(err);
  }
};
