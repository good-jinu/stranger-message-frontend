import React from "react";

const useToggle = () => {
  const [toggle, setToggle] = React.useState<boolean>(false);

  const handleToggle = (event: React.MouseEvent<HTMLElement>) => {
    setToggle(!toggle);
  };

  return {
    toggle,
    handleToggle
  };
};

export default useToggle;