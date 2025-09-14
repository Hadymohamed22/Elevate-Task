export interface PaginateBtnState {
  data:
    | "arrow left"
    | "arrow right"
    | "double right arrow"
    | "double left arrow"
    | number;
  active?: boolean;
  onClickFn: () => void;
}
