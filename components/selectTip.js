import { useEffect, useState } from "react";

function Cell(props) {
  function handlerClick() {
    const arr = [5, 10, 15, 25, 50];
    for (let i = 0; i < 5; i++) {
      document.getElementById(`${arr[i]}`).classList.remove("active");
    }

    const element = document.getElementById(props.value);
    element.classList.add("active");

    props.handler(props.value);
  }

  return (
    <td
      className={
        "h-[40px] w-[100px] bg-very-dark-cyan text-white rounded hover:bg-strong-cyan hover:text-very-dark-cyan"
      }
    >
      <button
        id={props.value}
        className={"h-full w-full"}
        onClick={handlerClick}
      >
        {props.value}%
      </button>
    </td>
  );
}

export default function SelectTip(props) {
  function handler(value) {
    props.customHandler("");

    props.handler(value, "tip");
  }

  function handlerCustom(e) {
    const arr = [5, 10, 15, 25, 50];
    for (let i = 0; i < 5; i++) {
      document.getElementById(`${arr[i]}`).classList.remove("active");
    }

    props.customHandler(e.target.value);

    props.handler(e.target.value, "tip");
  }

  return (
    <div className={"mt-4"}>
      <h1 className={"mb-3 font-bold"}>Select Tip %</h1>
      <table className={"w-full overflow-hidden"}>
        <tbody>
          <tr className={"flex justify-between mr-1 mb-5"}>
            <Cell value={"5"} handler={handler} />
            <Cell value={"10"} handler={handler} />
            <Cell value={"15"} handler={handler} />
          </tr>
          <tr className={"flex justify-between mr-1 mb-1"}>
            <Cell value={"25"} handler={handler} />
            <Cell value={"50"} handler={handler} />
            <td>
              <input
                className={
                  "text-very-dark-cyan h-[40px] w-[100px] outline-none rounded text-center border-none outline-offset-0 outline-2 bg-very-light-grayish-cyan focus:outline-strong-cyan"
                }
                placeholder={"Custom"}
                onChange={(e) => {
                  handlerCustom(e);
                }}
                type={"number"}
                value={props.value}
                id={"customValue"}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
