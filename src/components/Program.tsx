import { Card, CardContent } from "@/components/ui/card";
import { CalendarClock } from "lucide-react";

type Session = { time: string; title: string; speaker: string; type: string };
type ProgramDay = { day: string; sessions: Session[] };

const Program = () => {
  const schedule: ProgramDay[] = [];

  return (
    <section id="program" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Program</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          {schedule.length === 0 ? (
            <Card className="border-dashed border-2 max-w-2xl mx-auto">
              <CardContent className="p-12 text-center space-y-4">
                <CalendarClock className="h-10 w-10 mx-auto text-muted-foreground/40" />
                <p className="text-muted-foreground">[FULL PROGRAM SCHEDULE — PENDING APPROVAL]</p>
                <p className="text-sm text-muted-foreground/70">
                  September 28-30, 2026 — the detailed session-by-session schedule will be published
                  once approved by the organizers.
                </p>
              </CardContent>
            </Card>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Program;