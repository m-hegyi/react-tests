import React, { useState } from "react";

const Button = ({ title = "", onPress }) => {
  const [active, setActive] = useState(false);
  return (
    <button
      onClick={onPress}
      className={active ? "btn btn-active" : "btn"}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {title}
    </button>
  );
};

export default Button;
