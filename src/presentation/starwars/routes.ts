import { Router } from 'express';
import { FindPlanetStarwarsController } from './controllers/FindPlanetStarwarsController';




export class PalnetRoutes {


  static get routes(): Router {

    const router = Router();
    router.get('/:id', FindPlanetStarwarsController );

    return router;
  }


}

