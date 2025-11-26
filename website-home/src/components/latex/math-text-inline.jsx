import MathText from "./math-text";

export default function MathTextInline({ children }) {
  return (
    <MathText>{`\\( ${children} \\)`}</MathText>
  )
}
