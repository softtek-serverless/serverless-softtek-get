import { Request, Response } from "express";
import { PlanetRepositoryImpl } from "../../../infrastructure/PlanetRepositoryImp";
import { dynamoDbClient } from "../../../infrastructure/DynamoDbClient";
import { FindPlanetUseCase } from "../../../application/FindPlanetUseCase";



export async function FindPlanetStarwarsController(
  req: Request,
  res: Response
): Promise<void> {
  const planetRepository = new PlanetRepositoryImpl(dynamoDbClient);
  const findPlanetUseCase = new FindPlanetUseCase(planetRepository);

  try {
    const { id } = req.params
    const result = await findPlanetUseCase.execute(id);
    res.status(201).json({
      message : "Planeta encontrado",
      status : 200,
      result
    });
  } catch (error) {
    
    res.status(500).json({
      message : "Error al buscar el planeta",
      status : 500,
      result : null
    });
  }
}
