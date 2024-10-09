import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    {...props}
  >
    <title>Sats</title>
    <path d="M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5Z"></path>
    <path d="M8.86072 8.01115L16.4986 10.0743"></path>
    <path d="M13.0888 7.2701L13.4955 5.49606"></path>
    <path d="M10.5031 18.5043L10.9112 16.7306"></path>
    <path d="M8.17914 10.9685L15.8161 13.0351"></path>
    <path d="M7.50006 13.9249L15.1378 15.9888"></path>
  </svg>
);

export default SvgComponent;
