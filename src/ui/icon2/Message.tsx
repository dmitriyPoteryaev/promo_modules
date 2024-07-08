import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMessage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="none" {...props}>
    <circle cx={12.781} cy={12.566} r={11.5} stroke="#919191" />
    <path
      fill="#919191"
      fillRule="evenodd"
      d="m19.137 8.621-6.386 4.752a661 661 0 0 1-4.637-3.47c-.66-.499-1.227-.933-1.673-1.282zm.628.78-3.73 2.775 3.73 3.711zm-.793 7.108-3.749-3.73-2.174 1.618-.298.222-.298-.222c-.774-.574-1.537-1.142-2.265-1.685L6.53 16.509zm-13.175-.68 3.583-3.72c-.671-.504-1.302-.978-1.87-1.408-.663-.502-1.247-.95-1.713-1.314z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMessage;
