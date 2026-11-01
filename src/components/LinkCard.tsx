type LinkCardProps = {
  title: string;
  url: string;
  clickCount: number;
  onClick: () => void;
};

export default function LinkCard({ title, url, clickCount, onClick }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="relative block w-full rounded-xl border border-gray-200 bg-white px-16 py-4 text-center font-medium text-gray-800 shadow-sm transition hover:-translate-y-0.5 hover:border-green-500 hover:shadow-md active:translate-y-0"
    >
      {title}
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-normal text-gray-400">
        {clickCount}회
      </span>
    </a>
  );
}
