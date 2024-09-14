import { SVGProps } from "react";

const BackendIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={35} height={44} {...props}>
    <title>{"db"}</title>
    <g
      fill="none"
      fillRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.563}
    >
      <path d="M33.813 5.688c0 2.588-6.915 4.687-16.407 4.687S1 8.275 1 5.687C1 3.1 7.914 1 17.406 1c9.492 0 16.407 2.1 16.407 4.688h0Z" />
      <path d="M33.813 6v10.938c0 2.588-6.915 4.687-16.407 4.687S1 19.525 1 16.937V6M33.813 27v10.938c0 2.588-6.915 4.687-16.407 4.687S1 40.525 1 37.937V27" />
      <path d="M33.813 17v10.938c0 2.588-6.915 4.687-16.407 4.687S1 30.525 1 27.937V17" />
    </g>
  </svg>
);
export default BackendIcon;
