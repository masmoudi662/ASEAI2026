import { TrendingUp, Users, Globe, Sparkles, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import flyerImage from "@/assets/aseai-flyer.jpg";

const About = () => {
  const stats = [
    {
      icon: Users,
      value: "2,400+",
      label: "AI Companies in Africa",
    },
    {
      icon: TrendingUp,
      value: "$8.75B",
      label: "Expected Market by 2028",
    },
    {
      icon: Globe,
      value: "30+",
      label: "AI Communities",
    },
    {
      icon: Sparkles,
      value: "Hybrid",
      label: "Event Format",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16 md:mb-24">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <CardContent className="p-6 text-center">
                <stat.icon className="h-8 w-8 md:h-10 md:w-10 mx-auto mb-4 text-primary" />
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Shaping Africa's Software Engineering and AI Future</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

                   <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            {/* TODO(content-decision): mission text adapted to avoid "Winter School" wording (open conflict, see Hero.tsx). Replace with the approved 2026 concept note text once available. */}
            <p>
              ASEAI brings world-class scholars from the globe to Africa, to share knowledge, inspire
              creativity, and build lasting collaborations. Through interactive sessions, mentoring, and cutting-edge
              talks, the mission of the event is to empower the next generation of students, researchers, and
              professionals with hands-on knowledge and deep insights into the future of Software Engineering in the era
              of AI.
            </p>
          </div>

                    {/* Event Flyer */}
          {/* TODO(assets): 2026 flyer not yet designed/approved. 2025 flyer shown as a dimmed placeholder only. */}
          <div className="mt-12 space-y-6">
            <img
              src={flyerImage}
              alt="[PLACEHOLDER — 2025 flyer shown pending the approved 2026 flyer]"
              className="w-full rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 opacity-50"
            />
            <div className="flex justify-center">
              <Button size="lg" className="gap-2" disabled>
                <ExternalLink className="h-5 w-5" />
                Event Flyer — [PENDING 2026 FLYER]
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
