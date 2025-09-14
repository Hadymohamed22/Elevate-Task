import SelectAuthor from "./SelectAuthor";

const SelectFilter = () => {
  return (
    <div className="filter flex items-center gap-1.5">
      <span>Author: </span>{" "}
      <SelectAuthor
        placeholder="All"
        classname="w-[153px] min-h-[51px] p-2.5 bg-white text-black rounded-xl"
        defaultValue="All"
        options={["All", "Hady", "Sara", "Mohamed", "Hassan"]}
      />
    </div>
  );
};

export default SelectFilter;
