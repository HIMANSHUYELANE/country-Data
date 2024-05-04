import React from "react";

export default function Search({setQuery}) {
  return (
    <div>
      <input
        className="border-2 border-black px-4 py-1 rounded-md"
        type="text"
        placeholder="Search for a Country..."
        onChange={(e)=>setQuery(e.target.value.toLowerCase())}
      />
    </div>
  );
}
