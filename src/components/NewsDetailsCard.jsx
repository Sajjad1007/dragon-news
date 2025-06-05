import { Link } from "react-router";
import { GoArrowLeft } from "react-icons/go";

const NewsDetailsCard = ({ news }) => {
  const { title, thumbnail_url, details, category_id } = news;

  return (
    <div className="mt-4 border border-base-200 rounded-sm p-5 space-y-4 text-left">
      <img
        src={thumbnail_url}
        alt="Thumbnail"
        className="rounded-sm w-full object-cover h-52 sm:h-88 md:h-80 lg:h-104 xl:h-128 2xl:h-152"
      />
      <h1 className="text-primary font-semibold text-xl">{title}</h1>
      <p className="text-accent text-justify">{details}</p>
      <Link
        to={`/category/${category_id}`}
        className="btn btn-secondary text-white"
      >
        <GoArrowLeft size={20} />
        All news in this category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
