import PropTypes from "prop-types";
import React from "react";

interface Props {
  type: "primary";
  size: "medium";
  state: "default";
  icon: "right" | "no";
  className: any;
  text: string;
}

export const Button = ({ type, size, state, icon, className, text = "Register" }: Props): JSX.Element => {
  return (
    <div
      className={`inline-flex items-center px-8 py-3.5 rounded justify-center bg-brandprimary relative ${
        icon === "right" ? "gap-2" : "gap-2.5"
      } ${className}`}
    >
      <div className="font-body-medium-body-2 w-fit mt-[-1.00px] tracking-[var(--body-medium-body-2-letter-spacing)] text-[length:var(--body-medium-body-2-font-size)] [font-style:var(--body-medium-body-2-font-style)] text-neutralwhite font-[number:var(--body-medium-body-2-font-weight)] text-center whitespace-nowrap leading-[var(--body-medium-body-2-line-height)] relative">
        {icon === "right" && <>Get a Demo</>}

        {icon === "no" && <>{text}</>}
      </div>
      {icon === "right" && <img className="relative w-4 h-4" alt="Element arrows directions" src="right.svg" />}
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["primary"]),
  size: PropTypes.oneOf(["medium"]),
  state: PropTypes.oneOf(["default"]),
  icon: PropTypes.oneOf(["right", "no"]),
  text: PropTypes.string,
};
