import { useEffect, useRef } from "react";

export default function MathText({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const renderMath = () => {
        if (window.MathJax && containerRef.current) {
          window.MathJax.typesetPromise([containerRef.current]);
        }
      }

      renderMath();
  }, [children]); // re-typeset on content change

  return <span ref={containerRef}>{children}</span>;
}
