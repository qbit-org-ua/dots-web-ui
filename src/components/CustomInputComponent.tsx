const CustomInputComponent = ({
  field,
  form: { touched, errors },
  ...props
}) => {
  return (
    <>
      <input type="text" {...field} {...props} />
      {touched[field.name] && errors[field.name] && (
        <div className="input-error">{errors[field.name]}</div>
      )}
    </>
  );
};

export default CustomInputComponent;
