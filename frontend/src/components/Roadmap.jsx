import React from "react";
import roadmap from "data/roadmap.json";

const Roadmap = () => {
  return (
    <section className="grid place-items-center py-10">
      <div className="pl-3 md:pl-28 w-fit">
        <h1 className="text-[10vh] text-center md:text-left md:text-[15vh] font-medium">Roadmap</h1>
        <ul className="grid gap-20 mt-20 md:pl-[10vh]">
          {roadmap?.map((item, index) => (
            <li key={index} className="flex gap-10 items-center">
              <h1 className="text-[11vh] md:text-[30vh] font-medium md:min-w-[150px] md:ml-[5vh] ">{item?.step}</h1>
              <ul className="list-disc grid gap-3">
                {item.steps?.map((item, index) => (
                  <li key={index}>
                    <p className="md:text-[4vh]">{item}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Roadmap;
