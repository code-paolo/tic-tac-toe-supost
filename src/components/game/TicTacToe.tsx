"use client";

import { useEffect, useMemo, useState } from "react";
import { Swords, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Board } from "@/components/game/Board";
import { Scoreboard } from "@/components/game/Scoreboard";
import { SetupDialog } from "@/components/game/SetupDialog";
import { SeriesWinnerDialog } from "@/components/game/SeriesWinnerDialog";
import { calculateWinner, type Mark } from "@/lib/tic-tac-toe";

export function TicTacToe() {
  const [board, setBoard] = useState<Mark[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [raceTo, setRaceTo] = useState<number>(3);
  const [setupOpen, setSetupOpen] = useState<boolean>(true);
  const [roundWinner, setRoundWinner] = useState<"X" | "O" | "draw" | null>(null);
  const [seriesWinner, setSeriesWinner] = useState<"X" | "O" | null>(null);
  const [scores, setScores] = useState<{ x: number; o: number; draw: number }>({ x: 0, o: 0, draw: 0 });
  const [raceInput, setRaceInput] = useState<string>("3");

  const { winner, line } = useMemo(() => calculateWinner(board), [board]);
  const activePlayer: "X" | "O" = xIsNext ? "X" : "O";

  useEffect(() => {
    if (winner && !roundWinner) {
      setRoundWinner(winner);
      setScores((s) => {
        const key = winner.toLowerCase() as "x" | "o";
        const next = { ...s, [key]: s[key] + 1 };
        if (next[key] >= raceTo) setSeriesWinner(winner);
        return next;
      });
    } else if (!winner && board.every((m) => m !== null) && !roundWinner) {
      setRoundWinner("draw");
      setScores((s) => ({ ...s, draw: s.draw + 1 }));
    }
  }, [winner, board, roundWinner, raceTo]);

  function handleSquareClick(index: number) {
    if (board[index] || roundWinner || seriesWinner) return;
    setBoard((prev) => {
      const next = [...prev];
      next[index] = xIsNext ? "X" : "O";
      return next;
    });
    setXIsNext((prev) => !prev);
  }

  function handleNextRound() {
    setBoard(Array(9).fill(null));
    setRoundWinner(null);
    setXIsNext((prev) => !prev);
  }

  function resetSeries(keepRace: boolean) {
    setBoard(Array(9).fill(null));
    setRoundWinner(null);
    setSeriesWinner(null);
    setScores({ x: 0, o: 0, draw: 0 });
    setXIsNext(true);
    if (!keepRace) {
      setRaceInput("3");
      setRaceTo(3);
      setSetupOpen(true);
    }
  }

  function startMatch() {
    const value = Math.max(1, Math.min(20, Number(raceInput) || 3));
    setRaceTo(value);
    setSetupOpen(false);
    resetSeries(true);
  }

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Swords className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-semibold tracking-tight">Tic-tac-toe</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" onClick={() => setSetupOpen(true)}>Change race</Button>
          <Button variant="outline" onClick={() => resetSeries(true)}>Reset scores</Button>
          <Button onClick={() => resetSeries(false)}>New series</Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <Board
          board={board}
          winningLine={line}
          activePlayer={activePlayer}
          onSquareClick={handleSquareClick}
          roundWinner={roundWinner}
          onNextRound={handleNextRound}
          onResetSeries={() => resetSeries(true)}
        />

        <Scoreboard
          raceTo={raceTo}
          scores={{ x: scores.x, draw: scores.draw, o: scores.o }}
          activePlayer={activePlayer}
          roundWinner={roundWinner}
        />
      </div>

      <SetupDialog
        open={setupOpen}
        onOpenChange={setSetupOpen}
        raceInput={raceInput}
        setRaceInput={setRaceInput}
        onStart={startMatch}
      />

      <SeriesWinnerDialog
        seriesWinner={seriesWinner}
        raceTo={raceTo}
        onOpenChange={(open) => { if (!open) setSeriesWinner(null); }}
        onKeepRaceReset={() => resetSeries(true)}
        onNewSeries={() => resetSeries(false)}
      />
    </div>
  );
}


