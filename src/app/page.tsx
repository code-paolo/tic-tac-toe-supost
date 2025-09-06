import { TicTacToe } from "@/components/game/TicTacToe";

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Game',
    name: 'Tic-Tac-Toe Game',
    description: 'Professional interactive tic-tac-toe game with race-to-points scoring system',
    applicationCategory: 'Game',
    operatingSystem: 'Web',
    genre: 'Strategy',
    numberOfPlayers: '2',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-chart-2/20 via-transparent to-transparent p-6 sm:p-10">
        <TicTacToe />
      </div>
    </>
  );
}
