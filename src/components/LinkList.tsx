"use client";

import { useEffect, useState } from "react";
import type { LinkItem } from "@/data/profile";
import LinkCard from "./LinkCard";

type LinkListProps = {
  links: LinkItem[];
};

type ClickCounts = Record<string, number>;

export default function LinkList({ links }: LinkListProps) {
  // 데이터를 받기 전에는 모든 카드가 0회로 표시됩니다.
  const [counts, setCounts] = useState<ClickCounts>({});

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => (res.ok ? res.json() : {}))
      .then((data: ClickCounts) => setCounts((prev) => ({ ...data, ...prev })))
      .catch(() => {});
  }, []);

  function handleClick(id: string) {
    // 링크는 새 탭에서 열리므로, 화면의 숫자를 먼저 올리고 서버 값으로 맞춥니다.
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    fetch(`/api/clicks/${id}`, { method: "POST", keepalive: true })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { count: number } | null) => {
        if (data) setCounts((prev) => ({ ...prev, [id]: data.count }));
      })
      .catch(() => {});
  }

  return (
    <ul className="flex flex-col gap-3">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            title={link.title}
            url={link.url}
            clickCount={counts[link.id] ?? 0}
            onClick={() => handleClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
