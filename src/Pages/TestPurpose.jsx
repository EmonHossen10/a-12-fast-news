import   { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TestPurpose = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalShown, setModalShown] = useState(false);

  useEffect(() => {
    if (!modalShown) {
      const timeoutId = setTimeout(() => {
        setShowModal(true);
        setModalShown(true);
      }, 10000); // 10 seconds

      return () => {
        // Clear the timeout if the component unmounts or the effect re-runs
        clearTimeout(timeoutId);
      };
    }
  }, [modalShown]); // Run the effect whenever modalShown changes

  const closeModal = () => {
    setShowModal(false);
  };

  // Function to dynamically change the text content
  const changeText = () => {
    // You can implement your logic to change the text here
    // For simplicity, let's just reverse the words
    const h2Text = "Why Go Premium?".split(" ").reverse().join(" ");
    const p1Text =
      "Unlimited Access: Dive deep into a treasure trove of articles, no restrictions!"
        .split(" ")
        .reverse()
        .join(" ");
    const p2Text =
      "Ad-Free Experience: Say goodbye to interruptions and enjoy seamless reading."
        .split(" ")
        .reverse()
        .join(" ");

    return { h2Text, p1Text, p2Text };
  };

  const { h2Text, p1Text, p2Text } = changeText();

  return (
    <div>
      {/* Your TestPurpose content goes here */}

      {/* Modal */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-500">{h2Text}</h2>
            <p className="text-green-500">{p1Text}</p>
            <p className="text-purple-500">{p2Text}</p>
            <div className="flex justify-around mt-5">
              <button className="btn btn-error" onClick={closeModal}>
                Cancel
              </button>
              <Link to="/subscription">
                <button className="btn btn-accent">Subscription</button>
              </Link>
            </div>
            {/* Add your subscription form or any other content for the modal */}
          </div>
        </div>
      )}
    </div>
  );
};

export default TestPurpose;
