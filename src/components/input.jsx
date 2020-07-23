import React from "react";

const Input = ({
  validation = null,
  initValue = "",
  onChange = null,
  label = "",
  placeholder = ""
}) => {
  const [value, setValue] = React.useState(initValue);
  const [error, setError] = React.useState("");

  const onChangeHandler = (val) => {
    if (validation) {
      const err = validation(val);

      setError(err);
    }

    if (onChange) {
      onChange();
    }

    setValue(val);
  };

  return (
    <div>
      <label>
        {label}
        <input
          type="text"
          value={value}
          onChange={(e) => onChangeHandler(e.target.value)}
          placeholder={placeholder}
        />
      </label>
      <div>{error}</div>
    </div>
  );
};

export default Input;
