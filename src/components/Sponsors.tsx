import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import acmLogo from "@/assets/acm.png";
import sigsoftLogo from "@/assets/sigsoft.png";

const Sponsors = () => {
  const sponsors = [
    { name: "ACM", logo: acmLogo, pending: false },
    { name: "SIGSOFT", logo: sigsoftLogo, pending: false },
  ];

  const pendingSlots = 3;

  return (
    <section id="sponsors" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4">Sponsors & Partners</h2>
        <p className="text-center text-muted-foreground mb-2 max-w-2xl mx-auto">
          We are grateful for the support of our sponsors and partners who make this event possible.
        </p>
        <p className="text-center text-sm text-muted-foreground mb-12 max-w-2xl mx-auto">
          [Additional 2026 sponsors — pending confirmation]
        </p>
        
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 3000 })]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {sponsors.map((sponsor, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <div className="bg-background rounded-lg p-8 h-40 flex items-center justify-center border shadow-sm hover:shadow-md transition-shadow">
                    <img src={sponsor.logo} alt={sponsor.name} className="max-w-full max-h-full object-contain" />
                  </div>
                </div>
              </CarouselItem>
            ))}
            {Array.from({ length: pendingSlots }).map((_, index) => (
              <CarouselItem key={`pending-${index}`} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <div className="bg-background rounded-lg p-8 h-40 flex items-center justify-center border border-dashed shadow-sm">
                    <span className="text-xs text-muted-foreground">[PENDING]</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Sponsors;