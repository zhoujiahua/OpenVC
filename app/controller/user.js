const { Controller } = require('egg');

class UserController extends Controller {
  userLogin() {
    const { ctx } = this;
    const username = process.env.ADMIN_USERNAME || 'admin';
    const password = process.env.ADMIN_PASSWORD || '123123';
    ctx.body = {
      code: 0,
      message: 'success',
      // result: ctx.request.body,
      result: {
        username,
        password,
      },
    };
  }

  userInfo() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      message: 'success',
      result: ctx.request.query,
    };
  }

  userRegister() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      message: 'success',
      result: ctx.request.body,
    };
  }
}

module.exports = UserController;
