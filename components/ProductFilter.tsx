import { useState } from "react";
import { useRouter } from "next/router";
import React from "react";
import { Category } from "../interfaces";

// Would ideally get this via a 'Get Categories' query to the GraphQL endpoint, but didn't seem to be available
const productCategories = [
  { id: "", name: "All" },
  { id: "Q2F0ZWdvcnk6MTg=", name: "Fragrance" },
  { id: "Q2F0ZWdvcnk6OTI=", name: "Handmade Soap " },
  { id: "Q2F0ZWdvcnk6Nw==", name: "Soap" },
  { id: "Q2F0ZWdvcnk6Ng==", name: "Bath" },
  { id: "Q2F0ZWdvcnk6Mg==", name: "Face" },
  { id: "Q2F0ZWdvcnk6Mw==", name: "Hair" },
  { id: "Q2F0ZWdvcnk6NjI=", name: "Mouth" },
  { id: "Q2F0ZWdvcnk6MQ==", name: "Body" },
  { id: "Q2F0ZWdvcnk6OQ==", name: "Shower" },
  { id: "Q2F0ZWdvcnk6MjE=", name: "Gifts" },
  { id: "Q2F0ZWdvcnk6NjE=", name: "Makeup" },
  { id: "Q2F0ZWdvcnk6NjA=", name: "Sundries" },
  { id: "Q2F0ZWdvcnk6MTE=", name: "Hand & Body" },
  { id: "Q2F0ZWdvcnk6MTY=", name: "Massage" },
];

const ProductFilter: React.FC<{}> = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category["id"]>();

  const router = useRouter();

  const handleCategoryChange = (e: { target: { value: any } }) => {
    const categoryValue = e.target.value;
    setSelectedCategory(categoryValue);

    // Update the URL query parameter with the selected category
    router.push({
      query: {
        category: categoryValue !== "All" ? categoryValue : "",
      },
    });
  };

  // Would change this to a multi-select had time not been an issue
  return (
    <div className="product-filter">
      <select
        id="category"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        {productCategories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductFilter;
