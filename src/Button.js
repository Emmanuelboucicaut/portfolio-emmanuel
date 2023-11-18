export function Button({ text, href, className }) {
  return (
    <a
      class={className} //
      href={href}
    >
      {text}
    </a>
  );
}
