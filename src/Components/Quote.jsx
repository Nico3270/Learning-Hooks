import { useEffect, useLayoutEffect, useRef, useState } from "react";

export const Quote = (props) => {
  const { data, counter } = props;
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });
  const pRef = useRef();

  useEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
  }, [props.quote]);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p ref={pRef} className="mb-1">{data[counter].quote}</p>
        <hr />
        <footer className="blockquote-footer">{data[counter].author}</footer>
        <hr />
      </blockquote>
      <p>{JSON.stringify(boxSize)}</p>
    </>
  );
};
