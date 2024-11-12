import { PlanetToSpanish } from "../mapper/PlanetToSpanish";
import { PlanetStarwars } from "../PlanetStarwars";

export interface PlanetStarwarsRepository {
    find(id: string): Promise<PlanetToSpanish>;
}
