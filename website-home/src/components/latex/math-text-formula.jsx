import MathText from "./math-text";

export default function MathTextFormula({ children }) {
  return (
    <MathText>{`$$ ${children} $$`}</MathText>
  )
}
