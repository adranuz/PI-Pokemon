import React, { useState } from 'react';
import InputForm from './InputForm'

const FormNew = () => {



  // const [errors, setErrors] = useState({});

  // const handleInputChange = (e) => {
  //   // el primer prop de setState es su currentValue
  //   setInput((prevState) => {
  //     // creando nuevo estado
  //     const newState = {
  //       ...prevState,
  //       [e.target.name]: e.target.value,
  //     };

  //     // valida el nuevo estado y se asignan los errores al estado
  //     setErrors(validate(newState));

  //     // retorna el estado
  //     return newState;
  //   });
  // };
  /* 
  const [form, setform] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: ""
    types: []
  });
  */
  return (
    <form onSubmit={handlerSubmit}>
       <InputForm value={} type={}  >name</InputForm>
       <InputForm value={} type={}  >hp</InputForm>
       <InputForm value={} type={}  >attack</InputForm>
       <InputForm value={} type={}  >defense</InputForm>
       <InputForm value={} type={}  >speed</InputForm>
       <InputForm value={} type={}  >height</InputForm>
       <InputForm value={} type={}  >weight</InputForm>
       <InputForm value={} type={}  >types</InputForm>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  )
};

export default FormNew;

