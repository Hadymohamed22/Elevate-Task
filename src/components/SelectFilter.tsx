import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const SelectFilter = () => {
  return (
    <div className="filter flex items-center gap-1.5">
      <span>Author: </span>{" "}
      <Select defaultValue="All">
        <SelectTrigger className="w-[153px] min-h-[51px] p-2.5 bg-white text-black rounded-xl">
          <SelectValue placeholder="All" className="!text-black" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectFilter;
