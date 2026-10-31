import type { LinkItem } from "@/data/profile";
import LinkCard from "./LinkCard";

type LinkListProps = {
  links: LinkItem[];
};

export default function LinkList({ links }: LinkListProps) {
  return (
    <ul className="flex flex-col gap-3">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard title={link.title} url={link.url} />
        </li>
      ))}
    </ul>
  );
}
