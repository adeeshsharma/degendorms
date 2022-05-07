import React from "react";
import team from "data/team.json";

const Team = () => {
  return (
    <section className="bg-primary text-black py-20 px-12 grid place-items-center">
      <div className="flex flex-col gap-16 items-start w-fit">
        <h1 className="text-[10vw] font-medium">Team</h1>
        <ul className="grid gap-16">
          {team?.map((member, index) => (
            <li key={index} className="flex items-center gap-6 md:gap-20">
              <img
                className="rounded-[20px] shadow-avatar h-[15vh]"
                src={member?.src}
                alt=""
              />
              <div className="flex flex-col md:flex-row md:gap-6 md:items-center">
                <h3 className="md:min-w-[160px] text-[200%] font-medium">{member?.name}</h3>
                <p className="text-2xl">{member?.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Team;
