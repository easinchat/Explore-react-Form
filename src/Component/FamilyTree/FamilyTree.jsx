import React from "react";
import Grandpa from "./Grandpa";
import "./Family.css";

const FamilyTree = () => {
  const asset = "Diamond";
  return (
    <div className="family-tree">
      <h2>Family Tree</h2>
      <Grandpa></Grandpa>
    </div>
  );
};

export default FamilyTree;
