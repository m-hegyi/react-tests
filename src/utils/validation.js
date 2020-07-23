export const validation = ({ minLength = null, maxLength = null }) => {
  return (value) => {
    console.log("params");
    console.log(value);
    console.log(minLength, maxLength);
  };
};
