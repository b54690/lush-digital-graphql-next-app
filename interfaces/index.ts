export type ProductDescriptionBlock = {
  data: { text: string };
};

export type Category = {
  id: string;
  name: string;
};

export type Product = {
  node: {
    id: string;
    name: string;
    thumbnail?: { url: string };
    category: Category;
    description: {
      blocks?: ProductDescriptionBlock[];
    };
  };
};
