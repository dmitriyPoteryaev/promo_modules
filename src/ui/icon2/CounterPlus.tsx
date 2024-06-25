import * as React from "react";
import type { SVGProps } from "react";
const SvgCounterPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}
  >
    <circle
      cx={11.309}
      cy={11.32}
      r={11.043}
      fill="#32BD94"
      transform="rotate(-180 11.309 11.32)"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M4.252 11.32a1.5 1.5 0 0 1 1.5-1.5h11.111a1.5 1.5 0 0 1 0 3H5.752a1.5 1.5 0 0 1-1.5-1.5"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M11.309 18.375a1.5 1.5 0 0 1-1.5-1.5V5.764a1.5 1.5 0 0 1 3 0v11.111a1.5 1.5 0 0 1-1.5 1.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCounterPlus;
