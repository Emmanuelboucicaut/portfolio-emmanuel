import { SVG } from "./SVG";

export function Dots({ className, styleProps }) {
  return (
    <div className={className}>
      <SVG styleProps={{ styleProps }} />
    </div>
  );
}
