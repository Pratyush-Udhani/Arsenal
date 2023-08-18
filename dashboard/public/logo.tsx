import * as React from "react";

function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={90} cy={90} r={90} fill="#76FEAA" />
      <g filter="url(#prefix__filter0_d_17_8)">
        <path
          d="M64 35c0-2.761 2.236-5 4.998-5H98.3C126.1 30 140 41.356 140 64.069c0 10.513-2.354 19.727-7.062 27.644-2.466 4.284-6.277 7.723-11.434 10.319-5.156 2.465-11.377 3.698-18.663 3.698H77.956v55.546a5 5 0 01-5 5H69a5 5 0 01-5-5V35zm34.3-1.69H79.957a2 2 0 00-2 2v64.722a2 2 0 002 2h22.885c15.805-.779 23.708-12.135 23.708-37.574 0-10.383-2.354-18.364-7.062-23.945-4.708-5.71-11.882-7.203-21.186-7.203z"
          fill="#000"
        />
        <path
          d="M127.77 65.623l-10.245 12.523a10 10 0 01-7.74 3.668H94.762a10 10 0 01-7.84-3.792l-9.819-12.4"
          stroke="#000"
        />
        <path
          d="M127.77 65.623l-10.248 12.235a10 10 0 01-7.666 3.58H94.692a10 10 0 01-7.768-3.703l-9.82-12.112"
          stroke="#000"
        />
        <path
          d="M127.77 65.623l-10.253 11.95a9.997 9.997 0 01-7.589 3.488H94.619a10 10 0 01-7.693-3.611l-9.823-11.827"
          stroke="#000"
        />
        <path
          d="M127.77 65.623l-10.259 11.665a9.999 9.999 0 01-7.509 3.396H94.545a10 10 0 01-7.614-3.517l-9.828-11.544"
          stroke="#000"
        />
        <path
          d="M127.77 65.623l-10.267 11.382a10 10 0 01-7.426 3.303H94.469a10 10 0 01-7.532-3.423l-9.834-11.262"
          stroke="#000"
        />
        <path
          d="M127.77 65.623l-10.277 11.102a10 10 0 01-7.338 3.206H94.392a10 10 0 01-7.447-3.326l-9.841-10.982"
          stroke="#000"
        />
        <path
          d="M105.931 157.033a2 2 0 01-.173.814L102 166.276l-3.755-8.344a2.001 2.001 0 01-.176-.821v-86.42a2 2 0 01.173-.814L102 61.448l3.758 8.429c.114.256.173.534.173.814v86.342z"
          fill="#000"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d_17_8"
          x={60}
          y={30}
          width={84}
          height={144.276}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_17_8" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_17_8"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default Logo;
