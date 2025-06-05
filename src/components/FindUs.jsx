import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold text-lg text-primary">Find Us On</h2>
      <div className="join join-vertical mt-4 w-full">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          className="btn join-item bg-base-100 text-sm py-5 justify-start text-accent font-medium flex items-center"
        >
          <img
            src={facebook}
            alt="Facebook"
            className="mr-1 bg-base-200 rounded-full px-2 py-1 w-6.5"
          />
          Facebook
        </a>
        <a
          href="https://x.com/"
          target="_blank"
          className="btn join-item bg-base-100 text-sm py-5 justify-start text-accent font-medium flex items-center"
        >
          <img
            src={twitter}
            alt="Twitter"
            className="mr-1 bg-base-200 rounded-full px-1 py-1.5 w-6.5"
          />
          Twitter
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          className="btn join-item bg-base-100 text-sm py-5 justify-start text-accent font-medium flex items-center"
        >
          <img
            src={instagram}
            alt="Instagram"
            className="mr-1 bg-base-200 rounded-full px-1.5 py-1.5 w-6.5"
          />
          Instagram
        </a>
      </div>
    </div>
  );
};

export default FindUs;
