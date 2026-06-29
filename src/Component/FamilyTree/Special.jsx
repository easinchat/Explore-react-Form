import React, { useContext } from "react";
import { AssetContext } from "./FamilyTree";

const Special = ({ name, asset }) => {
  const Asset = useContext(AssetContext);
  console.log(Asset, "New Asset ");
  return (
    <div>
      <h3>Special: {name}</h3>
      <p>Asset: {asset}</p>
      <p>New Asset: {Asset}</p>
    </div>
  );
};

export default Special;
