"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Trophy } from "lucide-react";

type SeriesWinnerDialogProps = {
  seriesWinner: "X" | "O" | null;
  raceTo: number;
  onOpenChange: (open: boolean) => void;
  onKeepRaceReset: () => void;
  onNewSeries: () => void;
};

export function SeriesWinnerDialog({ seriesWinner, raceTo, onOpenChange, onKeepRaceReset, onNewSeries }: SeriesWinnerDialogProps) {
  return (
    <Dialog open={!!seriesWinner} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-chart-4" />
            Series winner
          </DialogTitle>
          <DialogDescription>
            {seriesWinner ? (
              <>Player {seriesWinner === "X" ? "1" : "2"} ({seriesWinner}) wins the series to {raceTo}!</>
            ) : null}
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-end gap-2">
          <Button variant="outline" onClick={onKeepRaceReset}>Keep race & reset</Button>
          <Button onClick={onNewSeries}>New series</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}


