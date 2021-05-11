import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  //se destructuran los argumentos del componente. Lo que sea que hayamos enviado en el componente AddCategory lo recibiremos aca como argumetp
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    //console.log("submit hecho");

    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={HandleSubmit}>
      <h1 >{inputValue}</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
    </form>
  );
};

AddCategory.propType = {
  //esta es la definiocion delpropTypes; por eso la primera p es con minusc
  setCategories: PropTypes.func.isRequired, // aca etamos haciendo referencia al paquete PropTypes que importamos; por eso las dos co mayuacula
};
