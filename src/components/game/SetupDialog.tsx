"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type SetupDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  raceInput: string;
  setRaceInput: (value: string) => void;
  onStart: () => void;
};

export function SetupDialog({ open, onOpenChange, raceInput, setRaceInput, onStart }: SetupDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Race to how many points?</DialogTitle>
          <DialogDescription>First player to reach this score wins the series.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-3 py-4">
          <div className="grid gap-2">
            <Label htmlFor="raceTo">Points</Label>
            <Input
              id="raceTo"
              type="number"
              inputMode="numeric"
              min={1}
              max={20}
              value={raceInput}
              onChange={(e) => setRaceInput(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={onStart}>Start match</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}


