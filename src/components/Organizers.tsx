import { Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Organizers = () => {
  const mainOrganizers = [
    { name: "[ORGANIZER — PENDING APPROVAL]", title: "[AFFILIATION — PENDING]" },
    { name: "[ORGANIZER — PENDING APPROVAL]", title: "[AFFILIATION — PENDING]" },
    { name: "[ORGANIZER — PENDING APPROVAL]", title: "[AFFILIATION — PENDING]" },
    { name: "[ORGANIZER — PENDING APPROVAL]", title: "[AFFILIATION — PENDING]" },
  ];

  return (
    <section id="organizers" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Organizing Committee</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="text-sm text-muted-foreground">
              [2026 governance chart — pending confirmation]
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainOrganizers.map((organizer, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden opacity-60">
                <div className="aspect-square overflow-hidden bg-muted flex items-center justify-center">
                  <Mail className="h-10 w-10 text-muted-foreground/40" />
                </div>
                <CardContent className="p-4 space-y-3">
                  <h3 className="text-lg font-bold">{organizer.name}</h3>
                  <p className="text-xs text-muted-foreground min-h-[40px]">{organizer.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organizers;