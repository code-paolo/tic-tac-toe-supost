"use client";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";
import type { Mark } from "@/lib/tic-tac-toe";

type BoardProps = {
  board: Mark[];
  winningLine: number[] | null;
  activePlayer: "X" | "O";
  onSquareClick: (index: number) => void;
  roundWinner: "X" | "O" | "draw" | null;
  onNextRound: () => void;
  onResetSeries: () => void;
};

export function Board({ board, winningLine, activePlayer, onSquareClick, roundWinner, onNextRound, onResetSeries }: BoardProps) {
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Board</span>
          <span className="text-sm font-normal text-muted-foreground">
            Turn: <strong className={cn("ml-1", activePlayer === "X" ? "text-chart-2" : "text-chart-3")}>{activePlayer}</strong>
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mx-auto grid max-w-[420px] grid-cols-3 gap-3">
          {board.map((mark, idx) => {
            const isWinning = winningLine?.includes(idx);
            return (
              <button
                key={idx}
                type="button"
                aria-label={`Place ${activePlayer} at cell ${idx + 1}`}
                onClick={() => onSquareClick(idx)}
                disabled={!!roundWinner}
                className={cn(
                  "aspect-square w-full select-none rounded-lg border bg-secondary text-4xl sm:text-5xl font-semibold shadow-sm transition-all",
                  "hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  isWinning ? "ring-2 ring-chart-1" : "",
                  !mark ? "text-muted-foreground" : mark === "X" ? "text-chart-2" : "text-chart-3"
                )}
              >
                {mark}
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button onClick={onNextRound} disabled={!roundWinner}>Next round</Button>
          <Button variant="outline" onClick={onResetSeries}>Reset scores</Button>
        </div>

        {roundWinner && (
          <div className="mt-6 rounded-md border bg-accent p-4 text-center">
            {roundWinner === "draw" ? (
              <p className="text-sm">It's a draw. Start the next round!</p>
            ) : (
              <p className="text-sm">
                <span className="mr-2 inline-flex items-center gap-1"><Trophy className="h-4 w-4 text-chart-4" /> {roundWinner}</span>
                wins the round
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}


