import React from "react";

interface LogoProps {
  iconSize?: number;
  fontSize?: number;
  color?: string;
  accentColor?: string;
}

export default function Logo({
  iconSize = 26,
  fontSize = 15,
  color = "#fff",
  accentColor = "#6B82C4",
}: LogoProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      {/* Globe icon */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer circle */}
        <circle cx="16" cy="16" r="14.5" stroke={accentColor} strokeWidth="1.2" />

        {/* Horizontal latitude lines */}
        <ellipse cx="16" cy="10" rx="13.2" ry="0.8" stroke={accentColor} strokeWidth="0.6" opacity="0.5" />
        <ellipse cx="16" cy="16" rx="14.2" ry="0.8" stroke={accentColor} strokeWidth="0.6" opacity="0.4" />
        <ellipse cx="16" cy="22" rx="13.2" ry="0.8" stroke={accentColor} strokeWidth="0.6" opacity="0.5" />

        {/* Vertical longitude ellipses */}
        <ellipse cx="16" cy="16" rx="5" ry="14.2" stroke={accentColor} strokeWidth="0.7" opacity="0.6" />
        <ellipse cx="16" cy="16" rx="10" ry="14.2" stroke={accentColor} strokeWidth="0.6" opacity="0.4" />

        {/* Tilted orbital ring */}
        <ellipse
          cx="16"
          cy="16"
          rx="18"
          ry="4"
          stroke={accentColor}
          strokeWidth="0.8"
          opacity="0.35"
          transform="rotate(-20 16 16)"
        />

        {/* Small satellite dot on orbit */}
        <circle cx="28" cy="10.5" r="1.3" fill={accentColor} opacity="0.7" />

        {/* City dots */}
        <circle cx="12" cy="11" r="0.9" fill={accentColor} opacity="0.8" />
        <circle cx="18" cy="13" r="0.9" fill={accentColor} opacity="0.9" />
        <circle cx="22" cy="18" r="0.9" fill={accentColor} opacity="0.7" />
        <circle cx="10" cy="19" r="0.9" fill={accentColor} opacity="0.6" />
        <circle cx="16" cy="22" r="0.9" fill={accentColor} opacity="0.7" />

        {/* Subtle inner glow */}
        <circle cx="16" cy="16" r="10" fill="url(#globeGlow)" />
        <defs>
          <radialGradient id="globeGlow" cx="0.4" cy="0.35" r="0.65">
            <stop offset="0%" stopColor={accentColor} stopOpacity="0.06" />
            <stop offset="100%" stopColor={accentColor} stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      {/* Text */}
      <span
        style={{
          color,
          fontWeight: 700,
          fontSize,
          letterSpacing: 3,
          textTransform: "uppercase" as const,
          lineHeight: 1,
        }}
      >
        GLP
        <span style={{ color: accentColor, margin: "0 1px", fontWeight: 400 }}>-</span>
        PLANET
      </span>
    </div>
  );
}
