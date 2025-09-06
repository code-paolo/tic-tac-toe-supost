import { TicTacToe } from "@/components/game/TicTacToe";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-chart-2/20 via-transparent to-transparent p-6 sm:p-10">
      <TicTacToe />
    </div>
  );
}
