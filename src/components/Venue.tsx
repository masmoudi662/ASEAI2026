import { MapPin, Train, Car, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Venue = () => {
  return (
    <section id="venue" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Venue</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          {/* Venue Info */}
          {/* TODO(assets): no approved ENSIAS/Rabat venue photo yet — using the built-in placeholder.svg
              rather than carrying the old Sousse cityscape image forward. */}
          <Card className="border-0 shadow-lg overflow-hidden" style={{ boxShadow: "var(--card-shadow)" }}>
            <div className="relative h-64 md:h-80 bg-muted flex items-center justify-center">
              <img
                src={`${import.meta.env.BASE_URL}placeholder.svg`}
                alt="[PLACEHOLDER — venue photo pending approval]"
                className="h-24 w-24 opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            </div>
            <CardHeader className="-mt-16 relative z-10">
              <CardTitle className="text-2xl">ENSIAS, Mohammed V University</CardTitle>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>Rabat, Morocco</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {/* TODO(content-decision): venue description, rooms, accessibility, and accommodation
                    info pending — brief requires these but they are not yet confirmed. */}
                <p className="text-foreground/80 leading-relaxed">
                  [VENUE DESCRIPTION — PENDING APPROVAL]. As a hybrid event, participants can join us
                  either in person at ENSIAS, Mohammed V University in Rabat, Morocco, or remotely from
                  anywhere in the world.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {/* TODO(content-decision): 2026 map link pending — old Novation City map link removed */}
                <Button disabled>
                  <MapPin className="h-4 w-4" />
                  Map — [PENDING]
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Transportation */}
          {/* TODO(content-decision): the 2025 transportation section below was entirely Tunisia-specific
              (Tunis–Sousse train, local taxi fares in TND, a Tunisian car-rental company) and has been
              replaced with placeholders. Needs confirmed Rabat travel info (airport transfer, local
              transit, accessibility) per the brief's Venue requirements. */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center">How to Reach the Venue</h3>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg" style={{ boxShadow: "var(--card-shadow)" }}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Train className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold">By Public Transit</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <p className="text-foreground/80">[PENDING APPROVAL — Rabat transit directions]</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg" style={{ boxShadow: "var(--card-shadow)" }}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Car className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold">By Taxi</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <p className="text-foreground/80">[PENDING APPROVAL — local taxi guidance for Rabat]</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg" style={{ boxShadow: "var(--card-shadow)" }}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold">By Car-Sharing</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <p className="text-foreground/80">[PENDING APPROVAL — car-rental/sharing options for Rabat]</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;