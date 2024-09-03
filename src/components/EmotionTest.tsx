import { PropsWithChildren, useState } from "react";
import { css } from "@emotion/react";

const style = css`
  color: hotpink;
`;

const SomeComponent = ({ children }: PropsWithChildren) => (
  <div css={style}>
    Some hotpink text.
    {children}
  </div>
);

const anotherStyle = css({
  textDecoration: "underline",
});

const AnotherComponent = () => {
  const [s, setS] = useState(true);
  const toggleS = () => {
    setS(!s);
  };
  return (
    <>
      <div>
        <input type="checkbox" checked={s} onChange={toggleS} />
        <label>Toggle Style</label>
      </div>
      <div css={s ? style : anotherStyle}>Some dynamic styled text.</div>
    </>
  );
};

function EmotionTest() {
  return (
    <SomeComponent>
      <AnotherComponent />
    </SomeComponent>
  );
}

export default EmotionTest;
