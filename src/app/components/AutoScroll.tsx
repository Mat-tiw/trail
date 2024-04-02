import React, { useEffect } from "react";
import UserComment from "./UserComment";

export const AutoScroll = () => {
  useEffect(() => {
    const ul1 = document.getElementById("infinite-scroll1");
    if (ul1) {
      const clone1 = ul1.cloneNode(true);
      const parentNode1 = ul1.parentNode;
      if (parentNode1) {
        parentNode1.appendChild(clone1);
      }
    }
  
    const ul2 = document.getElementById("infinite-scroll2");
    if (ul2) {
      const clone2 = ul2.cloneNode(true);
      const parentNode2 = ul2.parentNode;
      if (parentNode2) {
        parentNode2.appendChild(clone2);
      }
    }
    
  }, []);

  return (
    <div className="w-full">
      <div className="inline-flex flex-nowrap overflow-hidden">
        <div className="flex items-center">
          <ul
            id="infinite-scroll1"
            className="flex items-center justify-start [&_li] animate-infinite-scroll-left"
            aria-hidden="true"
          >
            {[...Array(5)].map((_, index) => (
              <li className="[&_li] m-1" key={index}>
                <UserComment />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="inline-flex flex-nowrap overflow-hidden">
        <div className="flex items-center justify-end ml-auto">
          <ul
            id="infinite-scroll2"
            className="flex items-center justify-start [&_li] animate-infinite-scroll-right"
            aria-hidden="true"
          >
            {[...Array(5)].map((_, index) => (
              <li className="[&_li] m-1" key={index}>
                <UserComment />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
