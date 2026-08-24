import { Card, CardContent } from "@/components/ui/card";

const invitedSpeakers = [
  { name: "Emad Shihab", affiliation: "Concordia University, Canada", status: "Accepted" },
  { name: "Michel Chaudron", affiliation: "Eindhoven University of Technology, Netherlands", status: "Invited" },
  { name: "Omar", affiliation: "Trent University, Canada", status: "Accepted" },
  { name: "Foutse Khomh", affiliation: "Polytechnique Montréal, Canada", status: "Invited" },
  { name: "Coen De Roover", affiliation: "Vrije Universiteit Brussel, Belgium", status: "Invited" },
  { name: "Bram Adams", affiliation: "Queen's University, Canada", status: "Invited" },
  { name: "Gopi Krishnan Rajbahadur", affiliation: "Huawei, Canada", status: "Invited" },
  { name: "David Lo", affiliation: "Singapore", status: "Invited" },
  { name: "Yutaro Kashiwa", affiliation: "Nara Institute of Science and Technology, Japan", status: "Accepted — In-person" },
  { name: "Ghizlane El Boussaidi", affiliation: "ÉTS, Canada", status: "Accepted" },
  { name: "Sarah Nadi", affiliation: "New York University Abu Dhabi, UAE", status: "Invited" },
  { name: "Damian Andrew Tamburri", affiliation: "Università del Sannio, Italy", status: "Invited" },
  { name: "Ahmed E. Hassan", affiliation: "Queen's University, Canada", status: "Invited" },
  { name: "Mohamed Kassab", affiliation: "Boston University, USA", status: "Invited" },
  { name: "Shane McIntosh", affiliation: "University of Waterloo, Canada", status: "Invited" },
  { name: "Ahmed Abdellatif", affiliation: "University of Calgary, Canada", status: "Invited" },
  { name: "Aymen Saied", affiliation: "Université Laval, Canada", status: "Invited" },
  { name: "Youssef Essediq", affiliation: "Huawei, Canada", status: "Invited" },
  { name: "Eray Tuzun", affiliation: "[Affiliation — pending]", status: "Accepted" },
  { name: "Mounir Ghogho", affiliation: "[Affiliation — pending]", status: "Invited" },
  { name: "Walid Gaaloul", affiliation: "[Affiliation — pending]", status: "Invited" },
  { name: "Mariam Guizani", affiliation: "Queen's University", status: "Invited" },
  { name: "Bruce Maxim", affiliation: "University of Michigan-Flint", status: "Invited" },
  { name: "Houari Sahraoui", affiliation: "University of Montréal", status: "Invited" },
  { name: "Fabio Palomba", affiliation: "[Affiliation — pending]", status: "Invited" },
  { name: "Zadia Codabux", affiliation: "University of Saskatchewan", status: "Invited" },
  { name: "Filipe Cogo", affiliation: "Queen's University", status: "Invited" },
  { name: "Suhaib Mujahid", affiliation: "Mozilla", status: "Invited" },
];

const Speakers = () => {
  return (
    <section id="speakers" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Invited Speakers</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              These speakers have been invited and have not declined. Full details (photo, talk title,
              abstract, delivery mode) are pending final confirmation by the program chairs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {invitedSpeakers.map((speaker, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-4 space-y-1">
                  <h3 className="font-bold text-sm">{speaker.name}</h3>
                  <p className="text-xs text-muted-foreground">{speaker.affiliation}</p>
                  <p className="text-xs text-primary font-medium">{speaker.status}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;