import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const AddProduct = () => {
  const queryClient = useQueryClient();
  const [state, setState] = useState({
    title: "",
    description: "",
    price: "",
    rating: "",
    thumbnail: "",
  });

  const mutation = useMutation({
    mutationFn: (newProduct) =>
      axios.post("http://localhost:3000/products", newProduct),
    onSuccess: queryClient.invalidateQueries(["products"]),
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "number" ? e.target.valueAsNumber : e.target.value;

    const newData = { ...state, [name]: value };

    setState(newData);
  };

  const handleFromSubmit = (event) => {
    event.preventDefault();
    const newProduct = { ...state, id: crypto.randomUUID().toString() };

    mutation.mutate(newProduct);
  };

  return (
    <div className="w-2/3 mx-auto flex flex-col gap-10">
      <h3 className="text-black text-4xl text-center">Add Product</h3>
      <form className="flex flex-col gap-4" onSubmit={handleFromSubmit}>
        <input
          type="text"
          className="w-full outline-none py-3 px-2 border"
          value={state.title}
          onChange={handleChange}
          name="title"
          placeholder="Product name"
        />

        <textarea
          type="text"
          className="w-full outline-none py-3 px-2 border"
          value={state.description}
          onChange={handleChange}
          name="description"
          placeholder="Product description"
        />

        <input
          type="url"
          className="w-full outline-none py-3 px-2 border"
          value={state.thumbnail}
          onChange={handleChange}
          name="thumbnail"
          placeholder="Product url"
        />

        <div className="flex items-center justify-between">
          <input
            type="number"
            className="w-5/11 outline-none py-3 px-2 border"
            value={state.price}
            onChange={handleChange}
            name="price"
            placeholder="Product price"
          />
          <input
            type="number"
            className="w-5/11 outline-none py-3 px-2 border"
            value={state.rating}
            onChange={handleChange}
            name="rating"
            placeholder="Product rating"
          />
        </div>
        <button
          type="submit"
          className="w-full py-5 text-3xl cursor-pointer rounded-2xl bg-[#E6D8C3]"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
