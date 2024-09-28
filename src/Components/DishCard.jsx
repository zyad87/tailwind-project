import React from "react";
export default function DishCard(props) {
  let review = "hidden";
  if (props.review) {
    review = "";
  }
  return (
    <div className=" flex flex-col">
      <img className="max-md:w-[55%] max-sm:w-full" src={props.img} alt="" />
      <p className="text-3xl font-Fraunces font-semibold my-5 max-md:text-2xl max-sm:text-xl text-[#131516]">{props.title}</p>
      <p className="text-[#707c84] tracking-wider font-Montserrat">{props.text}</p>
      <p className={review + " my-8 text-xs font-bold flex items-center text-[#BE7C68] hover:text-black cursor-pointer font-Montserrat tracking-widest"}>
        READ MORE{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          stroke="#BE7C68"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right mx-1 hover:stroke-black">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l14 0" />
          <path d="M15 16l4 -4" />
          <path d="M15 8l4 4" />
        </svg>
      </p>
    </div>
  );
}
