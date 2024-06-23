import * as React from "react";
import type { SVGProps } from "react";
const SvgRadioButtonTickHover = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={15}
    fill="none"
    {...props}
  >
    <path
      stroke="#212529"
      strokeLinecap="square"
      strokeOpacity={0.2}
      d="m1.438 7.515 6.025 6.56 7.522-13.063"
    />
  </svg>
);
export default SvgRadioButtonTickHover;
