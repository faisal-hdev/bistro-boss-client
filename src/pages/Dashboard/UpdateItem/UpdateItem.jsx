import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosOpen from "../../../hooks/useAxiosOpen";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { name, category, recipe, price, _id } = useLoaderData();
  const axiosPublic = useAxiosOpen();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    // reset
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // Now send the menu item data to the server with the image url
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      // menu response
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        // reset();
        // show success popup
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is updated to the menu`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    // console.log("With image url", res.data);
  };

  return (
    <div className="w-full">
      <SectionTitle heading="Update Item" subHeading="Refresh Info" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full">
          <div className="label">
            <span className="label-text font-medium">Recipe Name*</span>
          </div>
          <input
            defaultValue={name}
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
              defaultValue={category}
              {...register("category", { required: true })}
              className="select select-bordered w-full"
            >
              <option disabled value={"default"}>
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
              defaultValue={price}
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
              defaultValue={recipe}
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
        <button className="btn">Update Menu Item</button>
      </form>
    </div>
  );
};

export default UpdateItem;
