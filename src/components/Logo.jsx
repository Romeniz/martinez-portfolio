// The "n Bloom" mark: six n-shaped arch-and-legs units turned around a centre.
// Drawn as strokes so it stays crisp at any size and takes the colour of the surrounding text.
export const BLOOM_UNIT = "M-22 -71V-96A22 22 0 0 1 22 -96V-71";
export const BLOOM_ANGLES = [0, 60, 120, 180, 240, 300];

export default function Logo({ size = 36, className = "", title = "Romeniz logo", decorative = false }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="-130 -130 260 260"
      {...(decorative ? { "aria-hidden": true } : { role: "img", "aria-label": title })}
      fill="none"
      stroke="currentColor"
      strokeWidth="22"
      strokeLinecap="butt"
    >
      {BLOOM_ANGLES.map((a) => (
        <path key={a} d={BLOOM_UNIT} transform={`rotate(${a})`} />
      ))}
    </svg>
  );
}
