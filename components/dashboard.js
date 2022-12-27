import { useState } from "react";

import Image from "next/image";
import SelectTip from "./selectTip";
import NumberOfPeople from "./numberOfPeople";
import Result from "./result";

export default function Dashboard() {
  const [bill, setBill] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [tip, setTip] = useState(0);

  const [custom, setCustom] = useState("");

  function reset() {
    setBill("");
    setNumberOfPeople("");
    setTip(0);
    setCustom("");
    const arr = [5, 10, 15, 25, 50];
    for (let i = 0; i < 5; i++) {
      document.getElementById(`${arr[i]}`).classList.remove("active");
    }
  }

  function valueHandler(e, type) {
    switch (type) {
      case "bill":
        setBill(e.target.value);
        break;
      case "numberOfPeople":
        setNumberOfPeople(e.target.value);
        break;
      case "tip":
        setTip(e);
        break;
    }
  }

  return (
    <main
      className={
        "flex rounded-3xl justify-between h-[460px] w-[860px] bg-white p-[30px] font-default text-dark-grayish-cyan font-bold"
      }
    >
      <section className={"w-[350px]"}>
        <div className={"flex flex-col h-[80px]"}>
          <h1>Bill</h1>
          <Image
            className={"absolute mt-[35px] ml-[20px]"}
            src={"icon-dollar.svg"}
            width={12}
            height={12}
            alt={""}
          />
          <input
            type={"number"}
            className={
              "text-very-dark-cyan px-3 bg-very-light-grayish-cyan h-[40px] rounded-l font-default text-right text-2xl focus:outline-strong-cyan"
            }
            onChange={(e) => {
              valueHandler(e, "bill");
            }}
            value={bill}
            placeholder={"0"}
          />
        </div>
        <SelectTip
          value={custom}
          customHandler={(value) => setCustom(value)}
          handler={valueHandler}
        />
        <NumberOfPeople value={numberOfPeople} handler={valueHandler} />
      </section>
      <section
        className={"w-[400px] h-[400px] bg-very-dark-cyan rounded-xl"}
        onClick={() => {
          console.log(bill, numberOfPeople, tip);
        }}
      >
        <Result
          resetHandler={reset}
          bill={bill}
          tip={tip}
          numberOfPeople={numberOfPeople}
        />
      </section>
    </main>
  );
}
