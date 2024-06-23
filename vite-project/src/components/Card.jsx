import { useState } from "react";
import { Modals } from "./Modals/Modals";
const Card = ({ images, names, types, pokemons, setPokemons, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="col-md-2 m-2 p-3">
        <div className="card w-100 h-100 m-3 rounded-4 ">
          <div onClick={handleOpen} className="border-0 accordion-flush">
            <img
              className="mx-auto p-3 card-img-top img-fluid bg-light  "
              style={{ borderTopRightRadius: 16, borderTopLeftRadius: 16 }}
              src={images}
              alt="..."
            />

            <h5 className="card-title p-2 d-flex justify-content-center ">
              <b>{names}</b>
            </h5>
          </div>

          {isOpen && (
            <Modals
              handleOpen={handleOpen}
              handleClose={handleClose}
              keys={index + 1}
              names={names}
              types={types}
              pokemons={pokemons}
              setPokemons={setPokemons}
              index={index}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
