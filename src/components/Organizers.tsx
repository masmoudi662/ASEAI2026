import { Card, CardContent } from "@/components/ui/card";

const Organizers = () => {
  const honoraryChairs = [
    { name: "Prof. M. Rhachi", title: "Honorary Chair — President, UM5R" },
    { name: "Prof. A. Berqia", title: "Honorary Chair — Director, ENSIAS" },
  ];

  const generalChairs = [
    { name: "Prof. N. Kerzazi", title: "General Chair, ENSIAS" },
    { name: "Prof. R. Chihab", title: "General Chair, ENSIAS" },
    { name: "Prof. A. Elafia", title: "General Chair, ENSIAS" },
  ];

  const steeringCommittee = [
    { name: "Prof. A. Ouni", title: "Steering Committee, ÉTS" },
    { name: "Prof. M. Sayagh", title: "Steering Committee, ÉTS" },
    { name: "Prof. N. Kerzazi", title: "Steering Committee, ENSIAS" },
    { name: "[TBC]", title: "Steering Committee seat — pending confirmation" },
  ];

  const organizationCommittee = [
    { name: "W. Chaer", title: "Organization Committee & Volunteers, ENSIAS" },
    { name: "M. Boussrij", title: "Organization Committee & Volunteers, ENSIAS" },
    { name: "M. Jebraoui", title: "Organization Committee & Volunteers, ENSIAS" },
  ];

  const renderGroup = (title: string, people: { name: string; title: string }[]) => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-center">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {people.map((person, index) => (
          <Card key={index} className="border-0 shadow-lg" style={{ boxShadow: "var(--card-shadow)" }}>
            <CardContent className="p-4 space-y-1 text-center">
              <h4 className="text-base font-bold">{person.name}</h4>
              <p className="text-xs text-muted-foreground">{person.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <section id="organizers" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Organizing Committee</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          {renderGroup("Honorary Chairs", honoraryChairs)}
          {renderGroup("General Chairs", generalChairs)}
          {renderGroup("Steering Committee", steeringCommittee)}
          {renderGroup("Organization Committee", organizationCommittee)}

          <p className="text-center text-sm text-muted-foreground">
            [Scientific Program, Operations & Logistics, Outreach & Partners, and Finance & Compliance
            committee members — role assignments confirmed, individual names pending]
          </p>
        </div>
      </div>
    </section>
  );
};

export default Organizers;