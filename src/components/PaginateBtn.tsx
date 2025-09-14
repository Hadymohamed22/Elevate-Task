import { Button } from "./ui/button";
import styles from "../styles/paginateBtn.module.scss";
import type { PaginateBtnState } from "@/types/paginateBtnType";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

const PaginateBtn = ({ active, data, onClickFn }: PaginateBtnState) => {
  const icons = {
    "arrow left": <ChevronLeft />,
    "arrow right": <ChevronRight />,
    "double left arrow": <ChevronsLeft />,
    "double right arrow": <ChevronsRight />,
  };
  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={onClickFn}
      className={`${active && styles.active} ${
        styles.paginateBtn
      } size-8 rounded-full bg-transparent border border-[#F1F1F1] cursor-pointer text-[#333333] duration-300 hover:bg-[#2F80ED]/75 hover:text-white hover:border-[#2F80ED]/75 text-sm`}
    >
      {typeof data === "number" ? data : icons[data]}
    </Button>
  );
};

export default PaginateBtn;
