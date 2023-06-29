import React from "react";

const Button: React.FC<{
  title: string;
  onClick: () => void;
  isFetching?: boolean;
}> = ({ onClick, title, isFetching }) => {
  return <button onClick={onClick}>{isFetching ? "Loading..." : title}</button>;
};

export default Button;
