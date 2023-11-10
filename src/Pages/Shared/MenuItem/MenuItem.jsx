const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-2">
      <img
        style={{ borderRadius: "0px 200px 200px 200px" }}
        className="w-[80px]"
        src={image}
        alt=""
      />
      <div>
        <h1 className="uppercase">{name}----------</h1>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">{price}</p>
    </div>
  );
};

export default MenuItem;
