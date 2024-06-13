import React from "react";
import { useState } from "react";
export const Modals = ({
  handleOpen,
  handleClose,
  names,
  types,
  keys,
  movies,
  setMovies,
  index,

  // open information editor
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const setEdit = () => {
    setIsEditing(true);
    setShow(!show);
  };

  // event name change
  const [nameChange, handleNameChange] = useState(names);
  const newName = () => {
    const updateName = [...movies];
    updateName[index].name = nameChange;
    setMovies(updateName);
    handleClose();
  };
  //show button
  const [show, setShow] = useState(true);

  return (
    <>
      <button onClick={handleClose}>close</button>
      <form className="card-body">
        <h5 className="card-title">
          {""}
          {isEditing && (
            <input
              type="text"
              className="form-control"
              defaultValue={names}
              onChange={(e) => {
                handleNameChange(e.target.value);
              }}
            />
          )}
        </h5>
        <p className="card-text">#00{keys}</p>
        <div>{types}</div>
      </form>

      {show && <button onClick={setEdit}> Edit Information</button>}
      {!show && (
        <button onClick={newName} type="submit">
          save
        </button>
      )}
    </>
  );
};
