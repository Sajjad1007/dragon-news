import { Link } from "react-router";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegBookmark, FaEye, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { id, title, author, thumbnail_url, details, rating, total_view } =
    news;
  const formattedDate = new Date(author.published_date).toLocaleDateString();

  return (
    <div className="border border-base-200 rounded-md">
      <div className="flex items-center justify-between bg-base-200 px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt="Author"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col">
            <h4 className="text-primary font-semibold text-base text-left">
              {author.name}
            </h4>
            <p className="text-accent text-sm text-left">{formattedDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <FaRegBookmark size={18} className="cursor-pointer" />
          <IoShareSocialOutline size={22} className="cursor-pointer" />
        </div>
      </div>
      <div className="p-4 text-left space-y-4">
        <h2 className="font-semibold text-primary text-lg">{title}</h2>
        <img
          src={thumbnail_url}
          alt="Thumbnail"
          className="rounded-md w-full h-52 sm:h-80 md:h-56 lg:h-68 xl:h-80 2xl:h-88 object-cover"
        />
        <div className="text-accent">
          {details.length > 160 ? (
            <>
              {details.slice(0, 160)}...&nbsp;
              <Link
                to={`/news-details/${id}`}
                className="text-primary font-semibold cursor-pointer hover:underline"
              >
                Read More
              </Link>
            </>
          ) : (
            details
          )}
        </div>
      </div>
      <div className="flex justify-between items-center p-4 border-t border-base-200">
        <div className="flex items-center gap-1 text-orange-400">
          {Array.from({ length: rating.number }).map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-2 text-gray-600">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
