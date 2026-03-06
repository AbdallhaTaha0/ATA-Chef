import React, { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../ai.js";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (formData) => {
    const data = Object.fromEntries(formData);
    if (data.ingredient && data.ingredient.trim() !== "") {
      setIngredients([...ingredients, data.ingredient.trim()]);
    }
  };

  async function getRecipeResponse() {
    setLoading(true);
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown || "");
    setLoading(false);
  }

  return (
    <main className="pb-16 pt-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <form
          action={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 justify-center mb-10"
        >
          <input
            className="flex-1 px-5 py-3.5 bg-white rounded-2xl shadow-sm border border-teal-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-200"
            name="ingredient"
            placeholder="e.g. fresh oregano"
            aria-label="Add ingredient"
            type="text"
            required
          />
          <button className="py-3.5 px-8 font-medium bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 cursor-pointer">
            + Add Item
          </button>
        </form>

        {ingredients.length > 0 && (
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 sm:p-8 mb-8">
            <IngredientsList ingredients={ingredients} />
            {ingredients.length > 3 && (
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl border border-teal-100/50">
                <div className="flex flex-col mb-4 sm:mb-0 text-center sm:text-left">
                  <h3 className="text-xl font-semibold text-slate-800 mb-1">
                    Ready for a recipe?
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Generate a culinary masterpiece from your ingredients.
                  </p>
                </div>
                <button
                  onClick={getRecipeResponse}
                  disabled={loading}
                  className="w-full sm:w-auto bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-500 hover:to-blue-500 text-white font-medium py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Cooking...
                    </span>
                  ) : (
                    "Get Recipe"
                  )}
                </button>
              </div>
            )}
          </div>
        )}

        {!loading && recipe && (
          <ClaudeRecipe recipe={recipe} ingredients={ingredients} />
        )}
      </div>
    </main>
  );
};

export default Main;
