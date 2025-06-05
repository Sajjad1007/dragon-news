import { Outlet, useNavigation } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/LeftAside";
import RightAside from "./../components/RightAside";

const HomeLayout = () => {
  const { state } = useNavigation();

  return (
    <div className="px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20 container mx-auto">
      <header>
        <Header />
        <LatestNews />
        <Navbar />
      </header>

      <main className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 lg:gap-8 text-center mt-10 mb-6">
        <aside className="col-span-1 md:col-span-3 md:sticky md:-top-19.5 h-fit">
          <LeftAside />
        </aside>
        <section className="col-span-1 md:col-span-6">
          {state == "loading" ? (
            <div className="grid place-content-center w-full min-h-screen">
              <span className="loading loading-dots loading-xl"></span>
            </div>
          ) : (
            <Outlet />
          )}
        </section>
        <aside className="col-span-1 md:col-span-3 md:sticky md:-top-38 lg:-top-44 xl:-top-82 2xl:-top-88 h-fit">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
