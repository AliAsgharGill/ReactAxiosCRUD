import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Read = () => {
  const handelAddNewUser = () => {
    navigate("/");
  };
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, [data]);
  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };
  const getData = () => {
    axios
      .get("https://65784a9df08799dc8044d036.mockapi.io/CRUD-One")
      .then((res) => {
        setData(res.data);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://65784a9df08799dc8044d036.mockapi.io/CRUD-One/${id}`)
      .then(getData());
  };
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="h-screen flex justify-center items-center ">
        <div>
          <button
            className="text-white bg-gradient-to-br font-bold from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  text-sm  text-center me-2 mb-2 bg-gray-700 hover:bg-blue-700 m-4font-bold py-2 px-4 rounded focus:shadow-outline"
            type="button"
            onClick={() => {
              handelAddNewUser();
            }}
          >
            Add New User
          </button>
          <h2 className="text-center font-bold text-2xl  text-white bg-gradient-to-br from-gray-600 to-gray-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg px-5 py-2.5 me-2 mb-5 ">
            Front-end Programmers
          </h2>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Edit
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((user, id) => (
                  <tr
                    key={id}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {user.id}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 ">
                      <Link to="/update">
                        <FaEdit
                          className="fill-blue-600 cursor-pointer text-lg"
                          onClick={() =>
                            setToLocalStorage(user.id, user.name, user.email)
                          }
                        />
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <MdDelete
                        className="fill-red-600 cursor-pointer text-lg"
                        onClick={() => handleDelete(user.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Read;
