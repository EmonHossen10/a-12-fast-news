import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import SectionTitle from "../Hooks/SectionTitle";

const Counter = () => {
  const [counter, setCounter] = useState(false);
  return (
    <>
     <SectionTitle heading="Statistic"></SectionTitle>
      <div className="bg-black text-white p-10 w-11/12 mx-auto rounded-xl ">
       
        <ScrollTrigger
          onEnter={() => setCounter(true)}
          onExit={() => setCounter(false)}
        >
          <section className="flex justify-around">
            <div className="text-3xl font-bold space-y-4">
              <h3 className="text-xl md:text-3xl">All Users</h3>
              <p className="text-4xl text-center">
                {" "}
                {counter && (
                  <CountUp start={0} end={600} duration={2} delay={0} />
                )}{" "}
                +
              </p>
            </div>
            {/* 2nd part  */}
            <div className="text-3xl font-bold space-y-4">
              <h3 className="text-xl md:text-3xl">Normal User</h3>
              <p className="text-4xl text-center">
                {" "}
                {counter && (
                  <CountUp start={0} end={400} duration={2} delay={0} />
                )}{" "}
                +
              </p>
            </div>
            {/* 3rd */}
            <div className="text-3xl font-bold space-y-4">
              <h3 className="text-xl md:text-3xl">Premium User</h3>
              <p className="text-4xl text-center">
                {" "}
                {counter && (
                  <CountUp start={0} end={200} duration={2} delay={0} />
                )}{" "}
                +
              </p>
            </div>
          </section>
        </ScrollTrigger>
      </div>
    </>
  );
};

export default Counter;
