import { SVGProps } from "react";

const FrontendIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={44} height={37} {...props}>
    <title>Frontend</title>
    <g
      fill="none"
      fillRule="evenodd"
      stroke="currentColor" // Use currentColor to inherit the color
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.563}
    >
      <path d="M43.094 9.406H.906h42.188ZM40.75 1.594H3.25A2.344 2.344 0 0 0 .906 3.937v29.688a2.344 2.344 0 0 0 2.344 2.344h37.5a2.344 2.344 0 0 0 2.344-2.344V3.937a2.344 2.344 0 0 0-2.344-2.343h0Z" />
      <path d="M38.406 5.5a.78.78 0 1 1-1.56.001.78.78 0 0 1 1.56-.001h0ZM33.719 5.5a.78.78 0 1 1-1.561.001.78.78 0 0 1 1.56-.001h0ZM29.031 5.5a.78.78 0 1 1-1.56.001.78.78 0 0 1 1.56-.001h0ZM16.531 18.781l-4.687 3.907 4.687 3.906M27.469 18.781l4.687 3.907-4.687 3.906M19.656 29.719l4.688-14.063-4.688 14.063Z" />
    </g>
  </svg>
);
export default FrontendIcon;
