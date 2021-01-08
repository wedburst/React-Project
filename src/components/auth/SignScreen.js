import React from "react";
import { Registro } from "./Registro";
import { SignUser } from "./SignUser";

export const SignScreen = () => {
  return (
    <div className="mb-5">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <SignUser />
          <Registro />
        </div>
      </div>
    </div>
  );
};
