import { useContext } from "react";
import { ColorContext } from "../App";

const Component = () => {
  const color = useContext(ColorContext);
  return <div style={{ color }}>Hello {color}</div>;
};

export default Component;
