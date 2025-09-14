import { Plus } from "lucide-react";
import { Link } from "react-router";
import { Button } from "./ui/button";
import SectionTitle from "./SectionTitle";

const TitleContainer = ({
  title,
  titleIcon,
  link,
  linkText,
}: {
  title: string;
  titleIcon: "posts list" | "notebook";
  link?: string;
  linkText?: string;
}) => {
  return (
    <div className="title-container bg-white py-4 px-[18px] rounded-t-lg border-b border-black/15 flex justify-between items-center">
      <SectionTitle icon={titleIcon} title={title} />
      {link && (
        <Link to={link}>
          <Button
            variant="outline"
            className="border-0 text-[#808080] font-normal text-sm md:text-base cursor-pointer shadow-none"
          >
            <Plus />
            {linkText}
          </Button>
        </Link>
      )}
    </div>
  );
};

export default TitleContainer;
