import * as React from "react";
import type { SVGProps } from "react";
const SvgTelephone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <circle cx={12.781} cy={12.805} r={11.5} stroke="#919191" />
    <path
      fill="#919191"
      fillRule="evenodd"
      d="M8.389 6.453h8.785v12.703H8.389zm1.205 1.262h6.375v8.514H9.594zM12.78 18.4a.772.772 0 1 0 0-1.545.772.772 0 0 0 0 1.545"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTelephone;
