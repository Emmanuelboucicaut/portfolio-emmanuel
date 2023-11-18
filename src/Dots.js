import { SVG } from "./SVG";

export function Dots({ className, styleProps }) {
  return (
    <div class={className}>
      <SVG styleProps={{ styleProps }} />
    </div>
  );
}
