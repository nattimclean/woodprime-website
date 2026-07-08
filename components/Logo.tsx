export default function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  const textColor = variant === "light" ? "#FAF6F0" : "#14213D";
  return (
    <svg
      width="200"
      height="48"
      viewBox="0 0 200 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Wood Prime & Renovation logo"
    >
      <g transform="translate(0,4)">
        <path d="M20 2 L36 14 V38 H4 V14 Z" stroke="#B8863E" strokeWidth="2.5" fill="none" />
        <path d="M20 2 L36 14 H4 Z" fill="#B8863E" />
        <rect x="16" y="24" width="8" height="14" fill="#B8863E" />
      </g>
      <text x="48" y="20" fontFamily="Georgia, serif" fontSize="17" fontWeight="700" fill={textColor} letterSpacing="0.5">
        WOOD PRIME
      </text>
      <text x="48" y="35" fontFamily="Arial, sans-serif" fontSize="9.5" fontWeight="500" fill="#B8863E" letterSpacing="3">
        &amp; RENOVATION
      </text>
    </svg>
  );
}
