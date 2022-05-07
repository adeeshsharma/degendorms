import React from "react";
import collections from "data/collections.json";

const Collection = () => {
  return (
    <section className="grid md:place-items-center px-10 py-10 md:py-20">
      <div className="flex flex-col">
        <h1 className="text-[8vh] md:text-[13vh] text-left mt-10 mb-4">Collection</h1>
        <ul className="grid gap-10 md:gap-4">
          {collections?.map((collection) => (
            <li
              key={collection?.id}
              className="flex flex-col md:flex-row gap-4 md:gap-20"
            >
              <img
                className="rounded-[40px] rounded-tr-none h-[20vh] w-[20vh] "
                src={collection?.avatar}
                alt="Degen Dorms"
              />
              <img
                className="rounded-[40px] rounded-tl-none h-[17vw] object-cover"
                src={collection?.src}
                alt=""
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Collection;
