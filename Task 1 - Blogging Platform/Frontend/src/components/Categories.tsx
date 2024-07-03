import { categories } from "@utils/category";

export default function Categories() {
  return (
    <div className="p-2 bg-white shadow-2xl">
      <h1 className="p-2 pb-0 pl-1 mb-2 text-xl font-semibold uppercase open-sans text-stone-950">
        Categories
      </h1>
      {categories.map((category, index) => {
        return (
          <div key={index} className="flex justify-between p-1 py-2 border-b-2">
            <span>{category}</span>
            <span>(100)</span>
          </div>
        );
      })}
    </div>
  );
}
