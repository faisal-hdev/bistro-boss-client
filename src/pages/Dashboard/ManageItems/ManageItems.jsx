import { MdDeleteForever } from "react-icons/md";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { FaEdit } from "react-icons/fa";

const ManageItems = () => {
  const [menu] = useMenu();

  const handleDeleteItem = (item) => {};

  return (
    <div className="w-full">
      <SectionTitle heading="MANAGE ALL ITEMS" subHeading="Hurry Up!" />
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>UPDATE</th>
                <th>DELETE</th>
                {/* <th></th> */}
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>$ {item.price}</td>
                  <td>
                    <button
                      //   onClick={() => handleMakeAdmin(user)}
                      className="p-3 rounded btn-ghost bg-yellow-500 hover:bg-yellow-600"
                    >
                      <FaEdit className="text-sm text-white" />
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="p-3 rounded btn-ghost bg-red-500 hover:bg-red-600"
                    >
                      <MdDeleteForever className="text-lg text-white" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
