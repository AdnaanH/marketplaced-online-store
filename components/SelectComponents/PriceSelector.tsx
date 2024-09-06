import { nunito } from '../fonts';
import SelectItem from './SelectItem';

type Price = {
  value: string;
  label: string;
};

type PriceSelectProps = {
  prices: Price[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const PriceSelector: React.FC<PriceSelectProps> = ({ prices, onChange }) => (
  <div className="w-full md:w-2/6 lg:w-auto mb-4 md:mb-0">
    <select
      className={`${nunito.className} w-full font-bold px-4 py-2 capitalize rounded leading-tight bg-neutral focus:outline-none`}
      aria-label="Price"
      onChange={onChange}
    >
      <option value="" disabled selected className={`${nunito.className} font-normal`}>
        Price Range
      </option>
      {prices.map((price) => (
        <SelectItem key={price.value} value={price.value}>
          {price.label}
        </SelectItem>
      ))}
    </select>
  </div>
);

export default PriceSelector;
