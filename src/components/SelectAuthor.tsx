import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const SelectAuthor = ({
  defaultValue,
  options,
  classname = "",
  placeholder,
}: {
  defaultValue?: string;
  options: string[];
  classname?: string;
  placeholder: string;
}) => {
  return (
    <Select defaultValue={defaultValue}>
      <SelectTrigger className={classname}>
        <SelectValue placeholder={placeholder} className="!text-black" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option) => (
            <SelectItem value={option}>{option}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectAuthor;
