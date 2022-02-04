import { NextApiRequest, NextApiResponse } from "next";
import { getPokemonsResult } from "../../../types/pokemon";
import { pokemonData } from "../../../utils/pokemon-data";
const getPokemons = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    console.log(_req.query);
    const limit = _req.query.limit ? parseInt(_req.query.limit as string) : 10;
    const offset = _req.query.offset
      ? parseInt(_req.query.offset as string)
      : 0;
    const search: string | null = _req.query.search
      ? _req.query.search.toString()
      : null;
    if (!Array.isArray(pokemonData)) {
      throw new Error("Something went wrong");
    }

    let sorted = pokemonData;
    if (search) {
      sorted = sorted.filter(({ name }) => name.includes(search));
    }
    sorted = sorted.slice(offset, offset + limit);

    const result: getPokemonsResult = {
      count: pokemonData.length,
      status: 200,
      pokemons: sorted,
    };
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ statusCode: 500 });
  }
};

export default getPokemons;
