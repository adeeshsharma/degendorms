import React from "react";
import faqs from "data/faqs.json";

const FAQ = () => {
  return (
    <section className="grid place-items-center gap-3 p-7 md:p-28">
      <h1 className="text-5xl">FAQ</h1>
      <ul>
        {faqs?.map((item, index) => (
          <li key={index} className="grid grid-cols-2 border-t border-t-[#555] pt-[1.5rem] pb-[3rem]">
            <h1 className="text-xl font-medium">{item?.question}</h1>
            <p className="text-base text-center text-[#aaa]">{item?.answer}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FAQ;
