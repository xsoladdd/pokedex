import Image from "next/image";
import React from "react";
import { PokemonInterface } from "../../../types/pokemon";
import Modal from "../../../ui/Modal/Modal";
import TableData from "./TableData";

interface PokemonModalProps {
  status: boolean;
  dismissedModal: () => void;
  pokemon: PokemonInterface;
}

const PokemonModal: React.FC<PokemonModalProps> = ({
  dismissedModal,
  status,
  pokemon,
}) => {
  console.log(pokemon);
  return (
    <>
      <Modal
        status={status}
        dismiss={dismissedModal}
        title={`Pokemon No. ${pokemon.id}`}
      >
        {/* {JSON.stringify(pokemon)} */}
        <div>
          <div className="w-full  flex-col flex  gap-2">
            <div className=" flex place-items-center place-content-center">
              {/* Image Wrapper */}
              <div className="">
                {pokemon?.sprites?.front_default && (
                  <Image
                    src={pokemon?.sprites?.front_default}
                    alt="aw"
                    height="120"
                    width="120"
                  />
                )}
              </div>
            </div>
            <div className="">
              <table className="table-auto border-gray-200 border-2 round-xl  w-full">
                <tbody>
                  <tr>
                    <TableData>
                      <span className="font-bold">Name</span>
                    </TableData>
                    <TableData>
                      <span className="capitalize">{pokemon?.name}</span>
                    </TableData>
                  </tr>
                  <tr>
                    <TableData>
                      <span className="font-bold">Weight</span>
                    </TableData>
                    <TableData>{pokemon?.weight}</TableData>
                  </tr>
                  <tr>
                    <TableData>
                      <span className="font-bold">Height</span>
                    </TableData>
                    <TableData>{pokemon?.height}</TableData>
                  </tr>
                  <tr>
                    <TableData>
                      <span className="font-bold">Type</span>
                    </TableData>
                    <TableData>
                      <span className="capitalize">
                        {pokemon.types
                          .map(({ type: { name } }) => name)
                          .join(", ")}
                      </span>
                    </TableData>
                  </tr>
                  <tr>
                    <TableData>
                      <span className="font-bold">Moves</span>
                    </TableData>
                    <TableData>
                      <span className="capitalize">
                        {pokemon?.moves
                          .map(({ move: { name } }) => name)
                          .join(", ")}
                      </span>
                    </TableData>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default PokemonModal;
