import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed   text-white pt-6 my-20">
      <SectionTitle
        heading={"Featured Item"}
        subHeading={"Check It Out"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-opacity-30 bg-slate-500 pb-20 pt-10 px-36 gap-5">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div>
          <p>Aug 20, 29</p>
          <p className="uppercase">Where i can get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            nulla quae veniam tempora, pariatur laborum modi accusantium eum id
            earum nisi ea officiis assumenda, fugit impedit similique amet
            laboriosam neque?
          </p>
          <button className="btn btn-outline border-0 border-b-4 my-3">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
