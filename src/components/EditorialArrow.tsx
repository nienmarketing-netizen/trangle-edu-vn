export function FeatherArrow({ className = "w-5 h-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25.631 18.231"
      className={`${className} transform -rotate-90 inline-block`}
      fill="none"
      stroke="currentColor"
    >
      <g transform="translate(24.924 0.354) rotate(90)">
        <path
          d="M0,24.924V0"
          transform="translate(8.762 0)"
          strokeLinejoin="round"
          strokeWidth="1.2"
        />
        <path d="M17.524,8.762,8.762,0,0,8.762" strokeWidth="1.2" />
      </g>
    </svg>
  );
}
