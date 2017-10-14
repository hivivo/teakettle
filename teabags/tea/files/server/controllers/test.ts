import { Request, Response, Router } from 'express';

export default class TestCtrl {

  constructor(router: Router) {
    router.route('/name').get(this.getName);
    // other routes
    // router.route('/path1').post(this.method1);
    // router.route('/path2').put(this.method2);
  }

  // Test function to get the name
  protected getName(req: Request, res: Response) {
    res.send('TEA');
  };

}
