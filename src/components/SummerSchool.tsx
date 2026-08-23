import { HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SummerSchool = () => {
  // TODO(content-decision): program structure is "Decision required" per the ASEAI 2026 Shared Fact Sheet.
  // The concept note defines 5 pillars (emerging SE/AI trends, student mentoring, new-faculty mentoring,
  // poster/demo track, AI/SE certifications). The draft defines ~14 scientific tracks (LLM-powered
  // development, agentic software engineering, responsible AI, empirical methods, etc.) plus keynotes,
  // workshops, posters, demos, and a Doctoral Symposium. Whether the 14 tracks sit under the 5 pillars,
  // and whether certifications remain part of the 2026 program, is not yet confirmed. The 2025 site's
  // "four main pillars" wording was itself inconsistent with its own concept note's 5 pillars — not
  // carrying that error forward. Do not publish a specific structure until the organizers confirm one.
  const features = [
    { title: "[PROGRAM PILLAR/TRACK 1 — PENDING]" },
    { title: "[PROGRAM PILLAR/TRACK 2 — PENDING]" },
    { title: "[PROGRAM PILLAR/TRACK 3 — PENDING]" },
    { title: "[PROGRAM PILLAR/TRACK 4 — PENDING]" },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Topics
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              [PROGRAM STRUCTURE — PENDING APPROVAL: pillars vs. tracks, certification status]
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 pt-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg opacity-60"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <HelpCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SummerSchool;