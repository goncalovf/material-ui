import * as React from 'react';
import { useTheme } from '@mui/material/styles';

function SvgPencil(props: React.SVGProps<SVGSVGElement>) {
  const theme = useTheme();
  if (theme.palette.mode === 'dark') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={28}
        height={28}
        viewBox="0 0 28 28"
        fill="none"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.577 9.064A1 1 0 004 9.97v16.46a1 1 0 001.423.906l18-8.4A1 1 0 0024 18.03V1.57a1 1 0 00-1.423-.906l-18 8.4z"
          fill="#0059B3"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.192 9.05l8.846 8.846-.142 2.687-2.687.141-8.845-8.845 2.828-2.829zm-1.414-1.414l-.707-.707a2 2 0 00-2.828 2.828l.707.708 2.828-2.829zm-3.546 4.94l-1.404-1.404a4 4 0 015.657-5.657L22.461 16.49c.395.396.604.94.575 1.498l-.19 3.599a1 1 0 01-.946.946l-3.598.19a1.972 1.972 0 01-1.498-.576l-9.551-9.55a.735.735 0 01-.02-.021z"
          fill="#80BFFF"
        />
      </svg>
    );
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      {...props}
    >
      <rect width={28} height={28} rx={2} fill="#fff" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.577 9.064A1 1 0 004 9.97v16.46a1 1 0 001.423.906l18-8.4A1 1 0 0024 18.03V1.57a1 1 0 00-1.423-.906l-18 8.4z"
        fill="#C2E0FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.192 9.05l8.846 8.846-.142 2.687-2.687.141-8.845-8.845 2.828-2.829zm-1.414-1.414l-.707-.707a2 2 0 00-2.828 2.828l.707.708 2.828-2.829zm-3.546 4.94l-1.404-1.404a4 4 0 015.657-5.657L22.461 16.49c.395.396.604.94.575 1.498l-.19 3.599a1 1 0 01-.946.946l-3.598.19a1.972 1.972 0 01-1.498-.576l-9.551-9.55a.735.735 0 01-.02-.021z"
        fill="url(#svg-pencil-linear1)"
      />
      <defs>
        <linearGradient
          id="svg-pencil-linear1"
          x1={23.038}
          y1={22.725}
          x2={4.657}
          y2={4.343}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0059B3" />
          <stop offset={1} stopColor="#007FFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgPencil;
