import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLocation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="none" {...props}>
    <circle cx={12.781} cy={12.297} r={11.5} stroke="#919191" />
    <path
      fill="#919191"
      fillRule="evenodd"
      d="m12.879 19.568-3.772-9.107a4 4 0 0 1-.275-1.982c.56-4.783 7.56-4.51 7.918.291a4 4 0 0 1-.272 1.776zm-.095-8.192a2.404 2.404 0 0 0 2.393-2.415 2.404 2.404 0 0 0-2.393-2.414A2.404 2.404 0 0 0 10.39 8.96a2.404 2.404 0 0 0 2.393 2.415"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLocation;
