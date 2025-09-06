"use client";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ScoreboardProps = {
  raceTo: number;
  scores: { x: number; draw: number; o: number };
  activePlayer: "X" | "O";
  roundWinner: "X" | "O" | "draw" | null;
};

export function Scoreboard({ raceTo, scores, activePlayer, roundWinner }: ScoreboardProps) {
  return (
    <Card className="w-full md:w-[320px]">
      <CardHeader>
        <CardTitle>Scoreboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4 text-sm text-muted-foreground">
          Race to <span className="font-medium text-foreground">{raceTo}</span>
        </div>
        <div className="space-y-3">
          <div className={cn("flex items-center justify-between rounded-md border p-3", activePlayer === "X" && !roundWinner ? "ring-2 ring-chart-2" : "")}>
            <div className="flex items-center gap-2">
              <span className="grid size-6 place-items-center rounded bg-chart-2/15 text-chart-2 text-sm font-semibold">X</span>
              <span className="text-sm">Player 1</span>
            </div>
            <span className="text-lg font-semibold tabular-nums">{scores.x}</span>
          </div>
          <div className="flex items-center justify-between rounded-md border p-3">
            <div className="flex items-center gap-2">
              <span className="grid size-6 place-items-center rounded bg-muted text-foreground/70 text-sm font-semibold">=</span>
              <span className="text-sm">Draws</span>
            </div>
            <span className="text-lg font-semibold tabular-nums">{scores.draw}</span>
          </div>
          <div className={cn("flex items-center justify-between rounded-md border p-3", activePlayer === "O" && !roundWinner ? "ring-2 ring-chart-3" : "")}>
            <div className="flex items-center gap-2">
              <span className="grid size-6 place-items-center rounded bg-chart-3/15 text-chart-3 text-sm font-semibold">O</span>
              <span className="text-sm">Player 2</span>
            </div>
            <span className="text-lg font-semibold tabular-nums">{scores.o}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}


