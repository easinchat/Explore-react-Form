import React, { use } from "react";
import { MoneyContext } from "../FamilyTree/FamilyTree";

const Friend = () => {
  const [money, setMoney] = use(MoneyContext);
  return (
    <div>
      <h3>Friend</h3>
      <p>Family Got: {money}</p>
      <button onClick={() => setMoney(money + 2000)}>Add 2000 Taka</button>
    </div>
  );
};

export default Friend;
