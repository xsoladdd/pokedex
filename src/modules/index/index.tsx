import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Layout from "../../components/layout/Layout";
import Loading from "../../components/Loading/Loading";
import PokemonThumbnail from "../../components/PokemonTumbnail/PokemonThumbnail";
import { useDebounce } from "../../helper/hooks/useDebounce";
import { getPokemonsResult, PokemonInterface } from "../../types/pokemon";
import Pagination from "./Pagination";
import PokemonModal from "./PokemonInfo/PokemonModal";
import SearchInput from "./SearchInput";

const Index: React.FC = ({}) => {
  const [offset, setOffset] = useState(0);
  const [limit] = useState(30);
  const [search, setSearch] = useState("");
  const searchDebounce = useDebounce(search, 500);
  const [isFetching, setIsFetching] = useState(true);
  const [modalInfo, setModalInfo] = useState<{
    status: boolean;
    pokemon: PokemonInterface | undefined;
  }>({
    status: false,
    pokemon: undefined,
  });

  useEffect(() => {
    if (offset === 0) {
      query.refetch();
      setIsFetching(true);
    } else {
      setOffset(0);
      setIsFetching(true);
    }
  }, [searchDebounce]);

  const query = useQuery(
    ["pokemons", [offset]],
    async () => {
      const res = await Axios({
        url: `/api/pokemon/getPokemons?offset=${offset}&limit=${limit}&search=${search}`,
        method: "get",
      });
      return res.data as getPokemonsResult;
    },
    {
      keepPreviousData: false,
      onSuccess: () => setIsFetching(false),
    }
  );

  return (
    <Layout>
      {modalInfo.status && typeof modalInfo.pokemon !== "undefined" && (
        <PokemonModal
          pokemon={modalInfo.pokemon}
          status={modalInfo.status}
          dismissedModal={() =>
            setModalInfo((oldProps) => ({
              ...oldProps,
              status: false,
              pokemon: undefined,
            }))
          }
        />
      )}
      {/* Wrapper */}
      <div className="">
        {/* Search Wrapper */}
        <SearchInput
          search={search}
          setSearch={setSearch}
          setLoading={() => setIsFetching(true)}
        />

        {query.isLoading || isFetching ? (
          <div className="py-8 mx-auto">
            <Loading />
          </div>
        ) : typeof query.data?.count === "undefined" ? (
          <p>Something went wrong</p>
        ) : (
          <>
            {/* Pokemon Container */}
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              {query.data?.pokemons.map((pokemon, idx) => {
                const {
                  sprites: { front_default },
                  name,
                  id,
                } = pokemon;
                const img: string = front_default
                  ? front_default
                  : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/641-therian.png";
                return (
                  <button
                    key={idx}
                    onClick={() =>
                      setModalInfo({
                        status: true,
                        pokemon: pokemon,
                      })
                    }
                  >
                    <PokemonThumbnail
                      img={img}
                      title={name}
                      // id={id}
                    />
                  </button>
                );
              })}
            </div>
            <Pagination
              handleNext={() => {
                setOffset(offset + limit);
              }}
              hasNext={query.data?.pokemons.length === limit}
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
