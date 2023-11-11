const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl  h-96">
        <figure>
          <img src={image} alt="Shoes" className="w-full h-48 object-cover" />
        </figure>
        <p className="absolute right-0 bg-slate-900 px-4 mr-4 mt-4 text-white rounded-md">
          ${price}
        </p>
        <div className="card-body flex flex-col items-center p-4">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline bg-slate-100 border-orange-500 border-0 border-b-4 my-3">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
