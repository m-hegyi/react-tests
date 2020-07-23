export const validation = ({ minLength = null, maxLength = null }) => {
  const checkMinLength = (length) => {
    if (length >= minLength) {
      return true;
    }

    return false;
  };

  const checkMaxLength = (length) => {
    if (length <= maxLength) {
      return true;
    }

    return false;
  };

  const check = (value) => {
    const length = value.length;
    if (minLength !== null) {
      if (!checkMinLength(length)) {
        return false;
      }
    }

    if (maxLength !== null) {
      if (!checkMaxLength(length)) {
        return false;
      }
    }

    return true;
  };

  return (value) => {
    return check(value);
  };
};
