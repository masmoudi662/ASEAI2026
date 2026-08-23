import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

const Speakers = () => {
  const plenarySpeakers: Array<{
    name: string;
    title: string;
    image: string;
    website: string;
  }> = [];

  return (
    <section id="speakers" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Plenary Speakers</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          {plenarySpeakers.length === 0 ? (
            <Card className="border-dashed border-2 max-w-2xl mx-auto">
              <CardContent className="p-12 text-center space-y-4">
                <Users className="h-10 w-10 mx-auto text-muted-foreground/40" />
                <p className="text-muted-foreground">[SPEAKER LINEUP — PENDING APPROVAL]</p>
                <p className="text-sm text-muted-foreground/70">
                  Confirmed speakers will be announced here once approved by the program chairs.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {plenarySpeakers.map((speaker, index) => (
                <Card key={index} className="border-0 shadow-lg overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="p-4 space-y-1">
                    <h3 className="font-bold text-sm">{speaker.name}</h3>
                    <p className="text-xs text-muted-foreground">{speaker.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Speakers;