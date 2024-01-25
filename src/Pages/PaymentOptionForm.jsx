import { useState } from "react";
import { Link } from "react-router-dom";
 

 

const PaymentOptionForm = () => {
    const [selectedValue, setSelectedValue] = useState("");
    const handleChange = (e) => {
      setSelectedValue(e.target.value);
    };
  
    const handleSubmitMoney = (e) => {
      e.preventDefault();
      const price = parseInt(selectedValue);
      console.log(price);
      // Add your logic for handling the selected value here
    };
  
    return (
        <div>
            {/* payment here */}

      <form onSubmit={handleSubmitMoney}>
        <div className="max-w-md mx-auto my-5">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="select"
          >
            Select Option:
          </label>
          <div className="relative">
            <select
              id="select"
              name="select"
              value={selectedValue}
              onChange={handleChange}
              className="block appearance-none w-full bg-white border border-indigo-500 text-indigo-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-indigo-700"
            >
              <option className="text-green-500">Select Any Option</option>
              <option value="5" className="text-green-500">
                1 minutes $5
              </option>
              <option value="500" className="text-blue-500">
                5 days $ 500
              </option>
              <option value="900" className="text-purple-500">
                10 days $900
              </option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-indigo-700">
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          {/* Submit button */}
          <Link to='/payment' ><button
            type="submit"
            className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo active:bg-indigo-700"
          >
            Subscribe
          </button></Link>
        </div>
      </form> 
       
        </div>
    );
};

export default PaymentOptionForm;