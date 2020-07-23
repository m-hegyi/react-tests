import React from "react";

const Input = () => {
  const [value, setValue] = React.useState("");

  return (
    <div>
      <input type="text" value={value} onChange={setValue} />
    </div>
  );
};

export default Input;
