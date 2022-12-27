import { useEffect, useState } from "react";

function ResultRow(props) {
  let amount = props.amount;
  if (
    isNaN(props.amount) ||
    props.amount === Infinity ||
    !props.amount ||
    props.numberOfPeople === 0
  ) {
    amount = 0;
  }

  return (
    <div className={"flex justify-between mb-10"}>
      <section>
        <h1 className={"text-white text-xl"}>{props.text}</h1>
        <p className={"grayish-cyan text-xs"}>/ person</p>
      </section>
      <section>
        <div className={"text-strong-cyan font-bold text-4xl"}>
          $ {amount.toFixed(2)}
        </div>
      </section>
    </div>
  );
}

export default function Result(props) {
  const [totalAmount, setTotalAmount] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(props.bill / props.numberOfPeople);
    setTipAmount(((props.bill / 100) * props.tip) / 4);
  }, [props.bill, props.numberOfPeople, props.tip]);

  return (
    <div className={"px-[30px] py-[60px]"}>
      <ResultRow
        text={"Tip Amount"}
        amount={tipAmount}
        numberOfPeople={props.numberOfPeople}
      />
      <ResultRow
        text={"Total"}
        amount={totalAmount}
        numberOfPeople={props.numberOfPeople}
      />
    </div>
  );
}
