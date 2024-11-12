import { PlanetStarwars } from '../PlanetStarwars';
import { PlanetToSpanish } from './PlanetToSpanish';

export function mapToSpanishAttributes(data: Record<string, any>): PlanetToSpanish {
    return {
        nombre: data.name.S,
        periodo_rotacion: data.rotation_period.S,
        periodo_orbital: data.orbital_period.S,
        diametro: data.diameter.S,
        clima: data.climate.S,
        gravedad: data.gravity.S,
        terreno: data.terrain.S,
        agua_superficie: data.surface_water.S,
        poblacion: data.population.S,
        residentes: data.residents.L.map((item: any) => item.S),
        peliculas:data.films.L.map((item: any) => item.S),
        creado: data.created.S,
        editado: data.edited.S,
        url: data.url.S
    };
}
