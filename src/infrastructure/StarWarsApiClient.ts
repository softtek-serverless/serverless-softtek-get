import axios from "axios";
import { PlanetStarwars } from "../domain/PlanetStarwars";

export class StarWarsApiClient {
    private readonly baseUrl = "https://swapi.py4e.com/api";

    async getPlanet(id: number): Promise<PlanetStarwars> {
        const response = await axios.get<PlanetStarwars>(`${this.baseUrl}/planets/${id}`);
        return response.data;
    }
}
