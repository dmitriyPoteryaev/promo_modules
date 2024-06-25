import * as React from "react";
import type { SVGProps } from "react";
const SvgCounterMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}
  >
    <circle cx={11.223} cy={11.32} r={11.043} fill="#4DBDB6" />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M4.766 11.32c0-.828.614-1.5 1.373-1.5h10.17c.758 0 1.373.672 1.373 1.5 0 .829-.615 1.5-1.373 1.5H6.139c-.759 0-1.373-.671-1.373-1.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCounterMinus;
