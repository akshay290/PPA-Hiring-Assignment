import React from "react";

interface Props {
  className: any;
}

export const Icon = ({ className }: Props): JSX.Element => {
  return <div className={`w-px h-px ${className}`} />;
};
