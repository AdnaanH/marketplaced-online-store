import React from "react";
import { nunito } from "../fonts";
import SelectItem from "./SelectItem";

type Item = {
  value: string;
  label: string;
  disabled?: boolean;
};

type Category = {
  value: string;
  label: string;
  items: Item[];
};

type CategorySelectProps = {
  categories: Category[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const CategorySelector: React.FC<CategorySelectProps> = ({ categories, onChange }) => {
  return (
    <div className="rounded-2xl w-full md:w-2/6 lg:w-auto mb-4 md:mb-0">
        <select
          className={`${nunito.className} w-full rounded-2xl scroll-container font-bold px-4 py-2 capitalize leading-tight bg-neutral focus:outline-none`}
          aria-label="Category"
          onChange={onChange}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <optgroup
              key={category.label}
              label={category.label}
              className={`${nunito.className} font-normal border-b-2`}
            >
              {category.items.map((item) => (
                <SelectItem
                  key={item.value}
                  value={item.value}
                  disabled={item.disabled}
                >
                  {item.label}
                </SelectItem>
              ))}
            </optgroup>
          ))}
        </select>
    </div>
  );
};

export default CategorySelector;
