import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTrash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={25} height={29} fill="none" {...props}>
    <path
      fill="#263B3B"
      fillRule="evenodd"
      d="M.217 5.546c0-.897.727-1.624 1.624-1.624h21.254a1.624 1.624 0 0 1 0 3.248H1.84A1.624 1.624 0 0 1 .217 5.546"
      clipRule="evenodd"
    />
    <path
      fill="#263B3B"
      fillRule="evenodd"
      d="M9.74 1.921c-.748 0-1.354.606-1.354 1.354v1.14a.812.812 0 1 1-1.624 0v-1.14A2.98 2.98 0 0 1 9.739.297h5.458a2.98 2.98 0 0 1 2.978 2.978V4.58a.812.812 0 0 1-1.624 0V3.274c0-.747-.606-1.353-1.354-1.353zM2.094 8.89h20.835l-1.747 17.652a2 2 0 0 1-1.99 1.803H5.602a2 2 0 0 1-1.992-1.828zm6.31 2.958a.812.812 0 0 0-1.62.116l.95 13.225a.812.812 0 0 0 1.62-.116zm8.084 14.095a.81.81 0 0 0 .869-.751l.952-13.225a.812.812 0 0 0-1.62-.117l-.953 13.225a.81.81 0 0 0 .752.868m-3.13-14.022a.812.812 0 0 0-1.625 0v13.14a.812.812 0 0 0 1.624 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTrash;
