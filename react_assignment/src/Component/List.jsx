import React from "react";

export default function List() {
  const items = ["Apple", "Oranges", "Kiwi", "Pineapple", "Mango"];
  return (
    <>
      <div className="listView">
        <h1>The "React Way" to render a List</h1>
        {items.map((data) => {
          return <li key={data}>{data}</li>;
        })}
      </div>
    </>
  );
}
