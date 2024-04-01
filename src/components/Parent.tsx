import { memo } from "react";
import ColorComponent from "./ColorComponent";
import DummyComponent from "./DummyComponent";

const MemoedDummyComponent = memo(DummyComponent);
const MemoedColorComponent = memo(ColorComponent);

const Parent = () => {
  return (
    <ul>
      <li>
        <DummyComponent />
      </li>
      <li>
        <MemoedDummyComponent />
      </li>
      <li>
        <ColorComponent />
      </li>
      <li>
        <MemoedColorComponent />
      </li>
    </ul>
  );
};

export default Parent;
