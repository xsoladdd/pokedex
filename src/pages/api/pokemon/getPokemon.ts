import { NextApiRequest, NextApiResponse } from "next";
import { PokemonInterface } from "../../../types/pokemon";
import { pokemonData } from "../../../utils/pokemon-data";
const getPokemon = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    console.log(`_req.query`, _req.query);
    // const id = 24;
    const id = parseInt(_req.query.id as string);
    if (!id) {
      throw new Error("Please provide an ID");
    }
    if (!Array.isArray(pokemonData)) {
      throw new Error("Something went wrong");
    }
    const pokemon = pokemonData.find(({ id: pid }) => pid === id);
    console.log(pokemon);
    if (!pokemon) {
      throw new Error("No data found with that ID");
    }

    const result: { status: number; pokemon: PokemonInterface } = {
      status: 200,
      pokemon: pokemon,
    };
    return res.status(200).json(result);
  } catch (err) {
    const { message } = err as { message: string };
    return res.status(500).json({ statusCode: 500, error: message });
  }
};

export default getPokemon;
