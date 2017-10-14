import * as express from 'express';

import TestCtrl from './controllers/test';

export default function setRoutes(app) {

  const router = express.Router();

  const testCtrl = new TestCtrl(router);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
