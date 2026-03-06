import React from "react";

const IngredientsList = (props) => {
  const ingredientsListItems = props.ingredients.map((item, idx) => {
    return (
      <li
        key={idx}
        className="flex items-center gap-3 text-slate-700 py-2 border-b border-slate-100 last:border-0"
      >
        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-xs font-bold">
          {idx + 1}
        </span>
        <span className="capitalize font-medium">{item}</span>
      </li>
    );
  });

  return (
    <section>
      <h2 className="font-bold text-2xl text-slate-800 mb-6 flex items-center gap-2">
        Ingredients on hand
        <span className="bg-teal-100 text-teal-700 text-sm py-1 px-3 rounded-full">
          {props.ingredients.length}
        </span>
      </h2>

      <ul className="flex flex-col">{ingredientsListItems}</ul>
    </section>
  );
};

export default IngredientsList;
