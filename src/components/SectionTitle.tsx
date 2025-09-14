import { NotebookPen, ScrollText } from "lucide-react";

const SectionTitle = ({
  icon,
  title,
}: {
  icon: "posts list" | "notebook";
  title: string;
}) => {
  const icons = {
    "posts list": <ScrollText />,
    notebook: <NotebookPen />,
  };
  return (
    <h2 className="title h2-styles flex items-center gap-2.5">
      {icons[icon]}
      <span className="text capitalize">{title}</span>
    </h2>
  );
};

export default SectionTitle;
