import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Read = () => {
  return (
    <>
      <table className="table-auto ">
        <caption className="caption-top">Reterive Data</caption>
        <thead className="border  ">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action 1</th>
            <th>Action 2</th>
          </tr>
        </thead>
        <tbody className="border">
          <tr className="border">
            <td>#</td>
            <td>Name</td>
            <td>Email</td>
            <td>
              <FaEdit className="fill-blue-600 cursor-pointer" />
            </td>
            <td>
              <MdDelete className="fill-red-700 cursor-pointer" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Read;
