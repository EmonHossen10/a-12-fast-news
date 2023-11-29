import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div className="flex items-center w-11/12 mx-auto bg-gray-300 h-16 mt-4 rounded-xl">
      <button className="btn btn-warning text-white ml-5 mr-6">
        Breaking News
      </button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link to="/" className="mr-10">
          In a groundbreaking announcement today, scientists have unveiled a
          potential game-changer in healthcare. A newly identified biomarker
          could transform disease diagnosis and treatment.{" "}
        </Link>
        <Link to="/" className="mr-10">
          Financial markets globally are in flux due to unexpected economic
          shifts. High-profile mergers, acquisitions, and policy changes are
          causing seismic changes. Analysts scramble to assess short- and
          long-term implications, leaving investors on edge and world leaders in
          urgent discussions.
        </Link>
        <Link to="/" className="mr-10">
          In a surprising turn, diplomats from conflicting nations have brokered
          a peace agreement, averting a potential international crisis.
          Closed-door negotiations over the past week have laid the groundwork
          for improved relations and cooperation. Leaders express optimism for
          lasting peace, with the international community cautiously welcoming
          the news.
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
