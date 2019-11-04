import { Request, Response, NextFunction } from 'express';
import { get, post, controller, use, bodyValidator } from './decorators';

function logger(req: Request, res: Response, next: NextFunction) {
  console.log('Request was made!!!');
  next();
}

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

@controller('/auth')
export class LoginController {
  // @get('/add')
  // add(a: number, b: number): number {
  //   return a + b;
  // }

  @get('/login')
  @use(logger)
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="POST">
        <div>
          <label>Email</label>
          <input name="email" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" />
        </div>
        <button>Submit</button>
      </form>
    `);
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: RequestWithBody, res: Response): void {
    const { email, password } = req.body;
    if (email === 'hi@hi.com' && password === 'password') {
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('Invalid email or password');
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }
}
