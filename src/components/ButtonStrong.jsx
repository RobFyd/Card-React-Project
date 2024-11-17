export function ButtonStrong({ children }) {
  return (
    <button onClick={() => alert("STROG click")}>
      <strong>{children}</strong>
    </button>
  );
}
