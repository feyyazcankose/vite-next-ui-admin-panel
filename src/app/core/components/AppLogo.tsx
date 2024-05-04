import React from "react";

type Props = {
  className?: string;
};

const AppLogo: React.FC<Props> = ({ className }) => {
  return (
    <svg
      width="316"
      height="315"
      viewBox="0 0 316 315"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="315.294" height="314.018" rx="51" className="fill-current text-white dark:text-black" />
      <rect
        x="17"
        y="50.3569"
        width="50.0024"
        height="349.77"
        rx="25.0012"
        transform="rotate(-45 17 50.3569)"
        className="fill-current text-primary-500 dark:text-primary-400"
      />
      <rect
        x="17.2109"
        y="151.568"
        width="50.0024"
        height="206.636"
        rx="25.0012"
        transform="rotate(-45 17.2109 151.568)"
        className="fill-current text-primary-500 dark:text-primary-400"
      />
      <rect
        x="15"
        y="251.471"
        width="50.0024"
        height="67.2414"
        rx="25.0012"
        transform="rotate(-45 15 251.471)"
        className="fill-current text-primary-500 dark:text-primary-400"
      />
      <path
        d="M247.058 32.8028C256.842 23.0183 272.706 23.0183 282.49 32.8028C292.275 42.5874 292.275 58.4512 282.49 68.2357L209.346 141.38L191.629 123.664C181.845 113.879 181.845 98.0154 191.629 88.2309L247.058 32.8028Z"
        className="fill-current text-primary-500 dark:text-primary-400"
      />
      <path
        d="M282.578 144.144C292.362 153.929 292.362 169.793 282.578 179.577C272.793 189.362 256.929 189.362 247.145 179.577L191.717 124.149C181.932 114.365 181.932 98.5008 191.717 88.7163C201.501 78.9318 217.365 78.9318 227.149 88.7163L282.578 144.144Z"
        className="fill-current text-primary-500 dark:text-primary-400"
      />
    </svg>
  );
};

export default AppLogo;
