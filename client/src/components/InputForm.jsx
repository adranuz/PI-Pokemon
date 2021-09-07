const InputForm = ({ children, type="text", onchage }) => (
  <div className="form-control">
    <label htmlFor="">{children}:</label>
    <input
      
      type="text"
      // value=
      onChange={(e) => onchange(e)}
      // className={errors.password && "danger"}
    />
    {/* <p className="danger">error message</p> */}
  </div>
);

export default InputForm;