import { NextPage, NextPageContext } from "next";
import Image from "next/image";
import Layout from "../../components/layout/Layout";
import { PokemonInterface } from "../../types/pokemon";
import { commonErrorReturnStructure } from "../../types/types";
import { PokemonApiRoute } from "../../utils/res";

interface indexProps {
  pokemon?: PokemonInterface;
  error?: string;
}

const Index: NextPage<indexProps> = ({ pokemon, error }) => {
  // console.log(pokemon);
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <Layout>
      <div>
        <div className="w-full bg-red-200 flex gap-2">
          <div className="w-1/2">
            {/* Image Wrapper */}
            <div className="">
              {pokemon?.sprites?.front_default && (
                <Image
                  src={pokemon?.sprites?.front_default}
                  alt="aw"
                  height="200"
                  width="200"
                />
              )}
            </div>
          </div>
          <div className="2-1/2">
            Info
            <h1>{pokemon?.name}</h1>
            <p>{pokemon?.height}</p>
            <p>{pokemon?.weight}</p>
            <p>{pokemon?.order}</p>
            <p>{JSON.stringify(pokemon?.types)}</p>
            {/* <p>{pokemon?.abilities}</p> */}
            {/* <p>{pokemon?.moves}</p> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

Index.getInitialProps = async (ctx: NextPageContext): Promise<indexProps> => {
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

export default Index;
