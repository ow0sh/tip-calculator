import Image from "next/image";

export default function NumberOfPeople(props) {
  function handlerChange(e) {
    let element = document.getElementById("people_input");
    let err = document.getElementById("error_message");

    if (!e.target.value || e.target.value === 0) {
      element.classList.add("focus:outline-red-500");
      err.classList.remove("hidden");
      element.classList.add("border-red-500");
      element.classList.add("border");
      element.classList.add("border-2");
    } else {
      err.classList.add("hidden");
      element.classList.remove("focus:outline-red-500");
      element.classList.remove("border-red-500");
      element.classList.remove("border");
      element.classList.remove("border-2");
    }

    props.handler(e, "numberOfPeople");
  }

  return (
    <div className={"mt-[97px]"}>
      <p
        className={"text-xs absolute  ml-[250px] mt-[8px] text-red-500 hidden"}
        id={"error_message"}
      >
        {"Can't be zero"}
      </p>
      <h1>Number Of People</h1>
      <Image
        className={"absolute mt-[10px] ml-[20px]"}
        src={"icon-person.svg"}
        alt={""}
        width={15}
        height={15}
      />
      <input
        type={"number"}
        id={"people_input"}
        className={
          "text-very-dark-cyan px-3 w-[350px] bg-very-light-grayish-cyan h-[40px] rounded-l font-default text-right text-2xl focus:outline-strong-cyan"
        }
        onChange={(e) => {
          handlerChange(e);
        }}
        placeholder={"0"}
        value={props.value}
      />
    </div>
  );
}
