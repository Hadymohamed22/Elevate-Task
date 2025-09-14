import { Link } from "react-router";
import { TableCell } from "./ui/table";
import type { tablePostCellType } from "@/types/tablePostCellType";

const TablePostCell = ({ id, title }: tablePostCellType) => {
  return (
    <TableCell className="p-0 border-b border-black/15 text-sm md:text-base font-medium duration-300 hover:bg-white/50 w-full block">
      <Link
        to={`/posts/${id}`}
        className="block w-full h-full py-[18px] px-4 text-wrap"
      >
        {title}
      </Link>
    </TableCell>
  );
};

export default TablePostCell;
