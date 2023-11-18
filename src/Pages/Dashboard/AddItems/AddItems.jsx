import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <SectionTitle
        subHeading="what's new?"
        heading="add an item"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} />

          <select
            {...register("category")}
            className="select select-bordered w-full max-w-xs"
            defaultValue="" // Use defaultValue prop here
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="salad">Salad</option>
            <option value="pizza">Pizza</option>
            <option value="soup">Soup</option>
            <option value="dessert">Dessert</option>
            <option value="drink">Drink</option>
          </select>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
