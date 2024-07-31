import * as React from "react";
import type { SVGProps } from "react";
const SvgUpArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={61}
    fill="none"
    {...props}
  >
    <circle cx={30} cy={30.766} r={30} fill="#193D5D" />
    <path
      stroke="#fff"
      strokeWidth={4.825}
      d="M15.404 37.406 30.001 24.11l14.596 13.296"
    />
  </svg>
);
export default SvgUpArrow;
