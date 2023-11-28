export interface Props {
  width?: string;
  height?: string;
  color?: string;
}

function Logo({ width = "100", height = "50", color = "#F5CDA7" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 200 100"
    >
      {/* Círculo transparente con sombra */}
      <circle cx="50%" cy="50%" r="40" fill="transparent" />

      {/* Círculo con relleno y opacidad detrás del texto */}
      <circle cx="50%" cy="50%" r="40" fill="#667eea" fillOpacity="0.2" />

      {/* Círculo con borde y sin relleno */}
      <circle
        cx="50%"
        cy="50%"
        r="40"
        fill="transparent"
        stroke="#F5CDA7"
        strokeWidth="5"
      />

      {/* Texto */}
      <text
        x="50%"
        y="50%"
        fontSize="30"
        fontFamily="cursive"
        fontStyle="italic"
        fill={color}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        RnF
      </text>
    </svg>
  );
}

export default Logo;
