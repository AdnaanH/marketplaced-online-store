import { nunito } from '../fonts';

type SelectItemProps = {
    children: React.ReactNode;
    value: string;
    disabled?: boolean;
  };
  
const SelectItem: React.FC<SelectItemProps> = ({ children, value, disabled }) => {
return (
        <option
        className={`${nunito.className} font-normal`}
        value={value}
        disabled={disabled}
        >
            {children}
        </option>
    );
};

export default SelectItem