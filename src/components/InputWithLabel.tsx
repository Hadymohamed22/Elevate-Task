import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

export function InputWithLabel({
  label,
  inputID,
  type,
  placeholder,
}: {
  label: string;
  inputID: string;
  type: "title" | "select" | "textarea";
  placeholder: string;
}) {
  return (
    <div className="grid w-full max-w-full items-center gap-2.5">
      <Label htmlFor={inputID}>{label}</Label>
      {type === "title" ? (
        <Input
          type={type}
          id={inputID}
          placeholder={placeholder}
          className="p-4 placeholder:text-black/50 bg-black/10 shadow-none"
        />
      ) : type === "select" ? (
        <Select defaultValue="Select Author">
          <SelectTrigger className="w-full text-black/50 p-4 bg-black/10 shadow-none">
            <SelectValue placeholder="Select Author" className="!text-black " />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Select Author" disabled>
                Select Author
              </SelectItem>
              <SelectItem value="Hady">Hady</SelectItem>
              <SelectItem value="Sara">Sara</SelectItem>
              <SelectItem value="Mohamed">Mohamed</SelectItem>
              <SelectItem value="Hassan">Hassan</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      ) : (
        type === "textarea" && (
          <Textarea
            placeholder="Enter Post Body."
            className="p-4 bg-black/10 placeholder:text-black/50 shadow-none min-h-[126px]"
          />
        )
      )}
    </div>
  );
}
