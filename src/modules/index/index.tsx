import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Pagination from "./Pagination";
import PokemonThumbnail from "../../components/PokemonTumbnail/PokemonThumbnail";
import { useQuery } from "react-query";
import Axios from "axios";
import { getPokemonsResult } from "../../types/pokemon";
import SearchInput from "./SearchInput";
import { useDebounce } from "../../helper/hooks/useDebounce";
import Loading from "../../components/Loading/Loading";

const Index: React.FC = ({}) => {
  const [offset, setOffset] = useState(0);
  const [limit] = useState(30);
  const [search, setSearch] = useState("");
  const searchDebounce = useDebounce(search, 500);

  const query = useQuery(
    ["pokemons", [offset]],
    async () => {
      const res = await Axios({
        url: `/api/pokemons/getPokemons?offset=${offset}&limit=${limit}&search=${search}`,
        method: "get",
      });
      return res.data as getPokemonsResult;
    },
    {
      keepPreviousData: false,
    }
  );
  useEffect(() => {
    query.refetch();
  }, [searchDebounce]);

  return (
    <Layout>
      {/* Wrapper */}
      <div className="">
        {/* Search Wrapper */}
        <SearchInput search={search} setSearch={setSearch} />

        {query.isLoading ? (
          <div className="py-8 mx-auto">
            <Loading />
          </div>
        ) : typeof query.data?.count === "undefined" ? (
          <p>Something went wrong</p>
        ) : (
          <>
            {/* Pokemon Container */}
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              {query.data?.pokemons.map(
                ({ sprites: { front_default }, name }, idx) => {
                  const img: string = front_default
                    ? front_default
                    : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/641-therian.png";
                  return <PokemonThumbnail key={idx} img={img} title={name} />;
                }
              )}
            </div>
            <Pagination
              handleNext={() => {
                setOffset(offset + limit);
              }}
              handleBack={() => {
                if (offset >= limit) setOffset(offset - limit);
              }}
              count={query.data?.count}
              offset={offset}
              perPageCount={limit}
            />
          </>
        )}
      </div>
    </Layout>
  );
};
export default Index;
