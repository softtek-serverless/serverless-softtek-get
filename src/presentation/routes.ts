import { Router } from 'express';
import { PalnetRoutes } from './starwars/routes';





export class AppRoutes {

  static get routes(): Router {

    const router = Router();
    
     router.use('/api/planet', PalnetRoutes.routes );
     
    return router;
  }


}

