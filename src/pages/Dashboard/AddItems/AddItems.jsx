import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";
import { FaUtensils } from "react-icons/fa";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full">
      <SectionTitle heading={"add an item"} subHeading={"what's new?"} />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
            <div className="label">
              <span className="label-text font-medium">Recipe Name*</span>
            </div>
            <input
              required
              type="text"
              placeholder="Type here"
              {...register("name", { required: true })}
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex flex-col md:flex-row w-full gap-10 my-6">
            {/* Category */}
            <div className="w-full">
              <div className="label">
                <span className="label-text font-medium">Category*</span>
              </div>
              <select
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled selected>
                  Select a category
                </option>
                <option value="Salad">Salad</option>
                <option value="Pizza">Pizza</option>
                <option value="Dessert">Dessert</option>
                <option value="Soup">Soup</option>
                <option value="Drinks">Drinks</option>
              </select>
            </div>
            {/* price */}
            <div className="w-full">
              <div className="label">
                <span className="label-text font-medium">Price*</span>
              </div>
              <input
                type="number"
                placeholder="Type here"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div>
            <label className="form-control">
              <div className="label">
                <span className="label-text font-medium">Recipe Details*</span>
              </div>
              <textarea
                type="text"
                {...register("recipe")}
                className="textarea textarea-bordered h-24"
                placeholder="Recipe Details"
              ></textarea>
            </label>
          </div>
          <div className="w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input"
            />
          </div>
          {/* <input className="btn btn-wide" type="submit" /> */}
          <button className="btn">
            Add Item <FaUtensils className="ml-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;