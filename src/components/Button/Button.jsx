import React from "react";

const Button = ({ children }) => {
  return (
    <div className="text-center mb-12">
      <button className="btn btn-primary">{children}</button>
    </div>
  );
};

export default Button;
