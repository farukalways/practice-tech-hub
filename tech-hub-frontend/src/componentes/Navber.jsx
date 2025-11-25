import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <div className="flex items-center justify-between py-5 bg-amber-200 px-10 mb-5">
      <h2 className="text-3xl text-fuchsia-700">Tech Hub</h2>

      <ul className="flex items-center justify-center gap-3  text-xl text-black">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/addProduct"}>Add Product</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navber;
