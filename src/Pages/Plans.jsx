import SectionTitle from "../Hooks/SectionTitle";

const Plans = () => {
  return (
    <div>
      <SectionTitle heading="plans"></SectionTitle>
      <section className="grid grid-cols-3   gap-10 ">
        <div className="card card-compact  bg-black p-5  text-white border-sky-500 border-2 shadow-xl">
          <p className="badge badge-accent p-5 m-3">Free For 1 months</p>

          <div className="card-body ">
            <div className="flex items-center gap-44  ">
              <h2 className="card-title">
                Premium <br /> Indivisual
              </h2>
              <p>
                <span className="font-bold">Free</span> <br />{" "}
                <small>for one months</small>{" "}
              </p>
            </div>

            <li>One premium Account</li>
            <li>15 hour / month</li>
            <li>cancel anytime</li>

            <div className="card-actions py-3 ">
              <button className="btn btn-accent  w-full rounded-3xl">
                Try Free For 1 months
              </button>
            </div>
            <p className="text-center">
              {" "}
              <small>
                Free for one months. then $15/months .its better for you ,
                service provided by us is very good{" "}
              </small>
            </p>
          </div>
        </div>
        {/* 2nd */}
        <div className="card card-compact   p-5 bg-black  text-white border-sky-500 border-2 shadow-xl">
          <div className="card-body">
            <div className="flex items-center gap-44  ">
              <h2 className="card-title">
                Premium <br /> Membership
              </h2>
              <p>
                <span className="font-bold">$15.99</span> <br />{" "}
                <small>per/months</small>
              </p>
            </div>
             <li>2 premium Account</li>
              <li>40 hour / month</li>
              <li>cancel anytime</li>
            

            <div className="card-actions pt-20 pb-2 flex-1 ">
              <button className="btn btn-warning  w-full rounded-3xl">
                Get premium Membership
              </button>
            </div>
            <p className="text-center">
              <small>
                Free for one months. then $15/months .its better for you ,
                service provided by us is very good{" "}
              </small>
            </p>
          </div>
        </div>
        {/* 3rd */}
        <div className="card card-compact   p-5 bg-black  text-white border-sky-500 border-2 shadow-xl">
          <div className="card-body">
            <div className="flex items-center gap-44  ">
              <h2 className="card-title">
                Premium <br /> Membership Family
              </h2>
              <p>
                <span className="font-bold">$150</span> <br />{" "}
                <small>per/year</small>
              </p>
            </div>
             <li>6 premium Account</li>
              <li>80 hour / month</li>
              <li>cancel anytime</li>
            

            <div className="card-actions pt-[65px] pb-2 flex-1 ">
              <button className="btn bg-[#86A7FC] hover:bg-[#7997e3]   w-full rounded-3xl">
                Get premium Membership
              </button>
            </div>
            <p className="text-center">
              <small>
                Free for one months. then $150/year .its better for you ,
                service provided by us is very good{" "}
              </small>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;
