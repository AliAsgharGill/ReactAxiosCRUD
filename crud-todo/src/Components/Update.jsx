import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);
  const handleBack = () => {
    navigate("/read");
  };
  const handleUpdate = () => {
    axios
      .put(`https://65784a9df08799dc8044d036.mockapi.io/CRUD-One/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        navigate("/read");
      });
  };
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen ">
        <div className="w-full max-w-xs  ">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
                value={name}
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
                value={email}
                placeholder=""
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="text-white bg-gradient-to-br font-bold from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  text-sm  text-center me-2 mb-2 bg-gray-700 hover:bg-blue-700 m-4font-bold py-2 px-4 rounded focus:shadow-outline focus:shadow-outline"
                type="button"
                onClick={() => {
                  handleUpdate(id);
                }}
              >
                Submit
              </button>
              <button
                className=" text-white bg-gradient-to-br font-bold from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  text-sm  text-center me-2 mb-2 bg-gray-700 hover:bg-blue-700 m-4font-bold py-2 px-4 rounded focus:shadow-outline focus:shadow-outline"
                type="button"
                onClick={() => {
                  handleBack();
                }}
              >
                Back to List
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;
