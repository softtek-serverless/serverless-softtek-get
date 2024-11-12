import { StarWarsApiClient } from '../infrastructure/StarWarsApiClient';
import { PlanetStarwars } from '../domain/PlanetStarwars';
import { PlanetStarwarsRepository } from '../domain/repository/PlanetStarwarsRepository';
import { PlanetToSpanish } from '../domain/mapper/PlanetToSpanish';
import { mapToSpanishAttributes } from '../domain/mapper/mapToSpanishAttributes';

export class FindPlanetUseCase {
    constructor(private readonly planetRepository: PlanetStarwarsRepository) {}

    async execute(id: string): Promise<PlanetToSpanish> {
        
            const planet =  await this.planetRepository.find(id);

            return planet;

    }

   
}
