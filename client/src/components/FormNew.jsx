import React, { useState } from 'react';
const FormNew = () => {

  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    // el primer prop de setState es su currentValue
    setInput((prevState) => {
      // creando nuevo estado
      const newState = {
        ...prevState,
        [e.target.name]: e.target.value,
      };

      // valida el nuevo estado y se asignan los errores al estado
      setErrors(validate(newState));

      // retorna el estado
      return newState;
    });
  };
  return (
    <form>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={input.username}
          onChange={(e) => handleInputChange(e)}
          className={errors.username && "danger"}
        />
        <p className="danger">{errors.username}</p>
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={input.password}
          onChange={(e) => handleInputChange(e)}
          className={errors.password && "danger"}
        />
        <p className="danger">{errors.password}</p>
      </div>
    </form>
  )
};

export default FormNew;

