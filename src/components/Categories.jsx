import { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categoriesData.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);

  return (
    <div>
      <h2 className="font-semibold text-lg text-primary">
        All Categories ({categories.length})
      </h2>
      <div className="grid grid-cols-1 gap-2 mt-4 categories">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.id}`}
            key={category.id}
            className="text-accent font-medium btn py-6 bg-base-100 border-none shadow-none text-base"
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
