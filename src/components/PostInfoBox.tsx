import { Calendar, User } from "lucide-react";

const PostInfoBox = ({
  icon,
  text,
}: {
  icon: "author" | "date";
  text: string;
}) => {
  const icons = {
    author: <User className="w-[18px] h-[18px]" />,
    date: <Calendar className="w-[18px] h-[18px]" />,
  };
  return (
    <div className="date flex items-center gap-1.5 text-sm text-gray-100">
      {icons[icon]}
      <span>{text}</span>
    </div>
  );
};

export default PostInfoBox;
