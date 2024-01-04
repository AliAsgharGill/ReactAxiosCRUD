import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const header = { "Access-Control-Allow-Origin": "*" };
  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://65784a9df08799dc8044d036.mockapi.io/CRUD", {
      name: name,
      email: email,
      header,
    });
    history("/read");
  };
  const handleShowList = () => {
    history("/read");
  };
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen ">
        <div className="w-full max-w-xs  ">
          <div className="bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="text-white bg-gradient-to-br font-bold from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  text-sm  text-center me-2 mb-2 bg-gray-700 hover:bg-blue-700 m-4font-bold py-2 px-4 rounded focus:shadow-outline focus:shadow-outline"
                type="button"
                onClick={handleSubmit}
              >
                Submit
              </button>
              <button
                className="text-white bg-gradient-to-br font-bold from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  text-sm  text-center me-2 mb-2 bg-gray-700 hover:bg-blue-700 m-4font-bold py-2 px-4 rounded focus:shadow-outline focus:shadow-outline"
                type="button"
                onClick={handleShowList}
              >
                Show List
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
