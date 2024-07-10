import * as React from "react";
import type { SVGProps } from "react";
const SvgBasket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={29}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M27.103 7.496H6.544L9.115 18.37l16.021-1.838a1.13 1.13 0 0 0 .95-.789l2.096-6.784a1.13 1.13 0 0 0-1.08-1.463"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M.46 3.973c0-.624.507-1.13 1.13-1.13h3.163a2.26 2.26 0 0 1 2.186 1.69l.479 1.838h19.686a2.26 2.26 0 0 1 2.158 2.926l-1.08-.334 1.08.334-2.095 6.784a2.26 2.26 0 0 1-1.901 1.578L10.48 19.355l.177.824h14.571a1.13 1.13 0 0 1 0 2.26H10.658a2.26 2.26 0 0 1-2.21-1.787l-.434-2.03-2.565-10.85-.696-2.67H1.59A1.13 1.13 0 0 1 .46 3.974M7.974 8.63l2.011 8.508 15.024-1.724 2.096-6.784z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      d="M13.966 26.036a2.27 2.27 0 1 1-4.54 0 2.27 2.27 0 0 1 4.54 0M25.6 26.036a2.27 2.27 0 1 1-4.54 0 2.27 2.27 0 0 1 4.54 0"
    />
    <path
      fill="#FF007D"
      stroke="#fff"
      strokeWidth={2}
      d="M32.13 6.784a5.222 5.222 0 1 1-10.443 0 5.222 5.222 0 0 1 10.444 0Z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={2}
      d="M24.678 6.781h4.461M26.908 4.555v4.461"
    />
  </svg>
);
export default SvgBasket;
