import { SVGProps } from "react";

const OtherToolIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    height={45}
    viewBox="0 0 30 30"
    {...props}
  >
    <path
      stroke="currentColor"
      fill="none"
      d="M13.563 3c-.918 0-1.719.626-1.942 1.516L11.5 5H3a2 2 0 0 0-2 2v5h5.277c.347-.595.985-1 1.723-1 .738 0 1.376.405 1.723 1h10.554c.346-.595.986-1 1.725-1 .739 0 1.376.405 1.723 1H29V7a2 2 0 0 0-2-2h-8.5l-.121-.484A2 2 0 0 0 16.439 3h-2.877zM2 14v9a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2v-9h-4.277A1.99 1.99 0 0 1 22 15a1.992 1.992 0 0 1-1.723-1H9.723c-.347.595-.985 1-1.723 1a1.993 1.993 0 0 1-1.723-1H2z"
    />
  </svg>
);
export default OtherToolIcon;
