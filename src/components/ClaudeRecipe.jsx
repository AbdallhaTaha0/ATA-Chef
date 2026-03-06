import React from "react";
import ReactMarkdown from "react-markdown";

const ClaudeRecipe = (props) => {
  return (
    <section className="w-full mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <article className="prose prose-slate prose-a:text-teal-600 prose-headings:text-slate-800 prose-ul:list-disc hover:prose-a:text-teal-500 max-w-none p-6 sm:p-10 bg-white rounded-3xl shadow-sm border border-slate-100 ring-1 ring-teal-50">
        <ReactMarkdown>{props.recipe}</ReactMarkdown>
      </article>
    </section>
  );
};

export default ClaudeRecipe;
