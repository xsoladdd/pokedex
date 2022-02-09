import { NextPage, NextPageContext } from "next";
import { PokemonInterface } from "../../types/pokemon";
import { commonErrorReturnStructure } from "../../types/types";
import { PokemonApiRoute } from "../../utils/res";

interface slugProps {
  pokemon?: PokemonInterface;
  error?: string;
}

const Slug: NextPage<slugProps> = ({ pokemon, error }) => {
  console.log(pokemon);
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      <p>lorem</p>
      <h2>{JSON.stringify(pokemon)}</h2>
    </div>
  );
};

Slug.getInitialProps = async (ctx: NextPageContext): Promise<slugProps> => {
  console.log(`ctx.query.slug`, ctx.query.slug);
  try {
    const res = await fetch(
      `${PokemonApiRoute}api/pokemon/getPokemon?id=${ctx.query.slug}`
    );
    const json: {
      status?: number;
      pokemon?: PokemonInterface;
    } & commonErrorReturnStructure = await res.json();
    if (json.statusCode === 500) {
      return {
        error: json.error,
      };
    }
    return {
      pokemon: json.pokemon,
    };
  } catch (error) {
    const { message } = error as { message: string };
    return {
      error: message,
    };
  }
};

export default Slug;
