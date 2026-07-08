import { TRADE_NETWORK } from "@/lib/site";

const ICONS: Record<string, JSX.Element> = {
  hammer: (
    <path d="M14.5 3.5 20.5 9.5M17.5 6.5 8 16l-3 3M11 12l-4.5 4.5a2 2 0 1 0 2.5 2.5L13.5 14.5" />
  ),
  brush: (
    <path d="M18 3c1.5 0 3 1.5 3 3s-1.5 3-3 3l-6 6-3-3 6-6c0-1.5 1.5-3 3-3ZM8.5 14.5 5 18c-1 1-1 3 0 4s3 1 4 0l3.5-3.5" />
  ),
  layers: <path d="M3 12 12 17l9-5M3 7l9 5 9-5-9-5-9 5ZM3 17l9 5 9-5" />,
  home: <path d="M3 11 12 4l9 7M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />,
  bolt: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />,
  droplet: <path d="M12 3c3 4 6 7.5 6 11a6 6 0 1 1-12 0c0-3.5 3-7 6-11Z" />,
  wall: (
    <path d="M3 4h18v16H3V4ZM3 10h18M3 16h18M9 4v6M15 10v6M9 16v4M15 4v6" />
  ),
  grid: (
    <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" />
  ),
  door: (
    <path d="M5 21V4a1 1 0 0 1 1-1h9l4 4v14M5 21h14M9 21V6h6M14 13v.01" />
  ),
  leaf: (
    <path d="M4 20c8 1 15-4 16-16C10 4 4 10 4 20ZM6 18c3-4 7-7 12-9" />
  ),
  hvac: (
    <path d="M12 3v18M3 12h18M6.5 6.5l11 11M17.5 6.5l-11 11" />
  ),
  more: <path d="M12 5v14M5 12h14" />,
};

export default function TradeNetwork() {
  return (
    <div className="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-4 lg:grid-cols-6">
      {TRADE_NETWORK.map((trade) => (
        <div key={trade.name} className="flex flex-col items-center text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brass/40 bg-white">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8C6427"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {ICONS[trade.icon]}
            </svg>
          </span>
          <span className="mt-2 text-xs font-medium text-espresso">{trade.name}</span>
        </div>
      ))}
    </div>
  );
}
