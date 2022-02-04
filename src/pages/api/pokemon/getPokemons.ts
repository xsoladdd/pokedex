import { NextApiRequest, NextApiResponse } from "next";
import Axios from "axios";
import { PokemonApiRoute } from "../../../utils/res";
import { getPokemonsResult, PokemonInterface } from "../../../types/pokemon";
import { writeJsonFile } from "write-json-file";

const getPokemons = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const defaultLimit = 200;
    console.log(_req.query);
    const instance = Axios.create({
      baseURL: PokemonApiRoute,
      timeout: 1000000000, //timeout of 2 sec
    });

    const request = await instance.get(
      `?limit=${_req.query.limit ? _req.query.limit : defaultLimit}&offset=${
        1000
        // _req.query.offset ? _req.query.offset : 0
      }`
    );
    console.log(
      PokemonApiRoute,
      `?limit=${_req.query.limit ? _req.query.limit : defaultLimit}&offset=${
        _req.query.offset ? _req.query.offset : 0
      }`
    );
    const { count, next, previous, results } = request.data;
    const pokemonList: Array<PokemonInterface> = [];

    await Promise.all(
      results.map(async ({ name: pokeName }: { name: string }) => {
        const slug: { data: PokemonInterface } = await instance.get(
          `/${pokeName}`
        );
        const {
          forms,
          height,
          id,
          moves,
          name,
          location_area_encounters,
          abilities,
          order,
          species,
          sprites,
          types,
          weight,
        } = slug.data;
        const trimmed: PokemonInterface = {
          forms,
          height,
          id,
          moves: [
            ...moves
              .map(({ move }) => {
                return { move };
              })
              .slice(0, 4),
          ],
          name,
          location_area_encounters,
          abilities,
          order,
          species,
          sprites: {
            back_default: sprites.back_default,
            front_default: sprites.front_default,
          },
          types,
          weight,
        };
        pokemonList.push(trimmed);
      })
    );
    const sorted = pokemonList.sort((a, b) => {
      return a.id - b.id;
    });
    await writeJsonFile("pokemons.json", sorted);
    const result: getPokemonsResult = {
      count,
      next,
      previous,
      status: 200,
      // pokemons: pokemonList,
      //Sort pokemon by ID
      pokemons: sorted,
    };
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ statusCode: 500 });
  }
};

export default getPokemons;
