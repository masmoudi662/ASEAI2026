import { Card, CardContent } from "@/components/ui/card";
import ahmedHassan from "@/assets/ahmed-hassan.jpg";
import michelChaudron from "@/assets/michel-chaudron.png";
import sarahNadi from "@/assets/sarah-nadi.jpg";
import bruceMaxim from "@/assets/bruce-maxim.jpg";
import houariSahraoui from "@/assets/houari-sahraoui.jpg";
import zadiaCodabux from "@/assets/zadia-codabux.png";

const invitedSpeakers = [
  { name: "Emad Shihab", affiliation: "Concordia University, Canada", status: "Accepted", image: null },
  { name: "Michel Chaudron", affiliation: "Eindhoven University of Technology, Netherlands", status: "Invited", image: michelChaudron },
  { name: "Omar", affiliation: "Trent University, Canada", status: "Accepted", image: null },
  { name: "Foutse Khomh", affiliation: "Polytechnique Montréal, Canada", status: "Invited", image: null },
  { name: "Coen De Roover", affiliation: "Vrije Universiteit Brussel, Belgium", status: "Invited", image: null },
  { name: "Bram Adams", affiliation: "Queen's University, Canada", status: "Invited", image: null },
  { name: "Gopi Krishnan Rajbahadur", affiliation: "Huawei, Canada", status: "Invited", image: null },
  { name: "David Lo", affiliation: "Singapore", status: "Invited", image: null },
  { name: "Yutaro Kashiwa", affiliation: "Nara Institute of Science and Technology, Japan", status: "Accepted — In-person", image: null },
  { name: "Ghizlane El Boussaidi", affiliation: "ÉTS, Canada", status: "Accepted", image: null },
  { name: "Sarah Nadi", affiliation: "New York University Abu Dhabi, UAE", status: "Invited", image: sarahNadi },
  { name: "Damian Andrew Tamburri", affiliation: "Università del Sannio, Italy", status: "Invited", image: null },
  { name: "Ahmed E. Hassan", affiliation: "Queen's University, Canada", status: "Invited", image: ahmedHassan },
  { name: "Mohamed Kassab", affiliation: "Boston University, USA", status: "Invited", image: null },
  { name: "Shane McIntosh", affiliation: "University of Waterloo, Canada", status: "Invited", image: null },
  { name: "Ahmed Abdellatif", affiliation: "University of Calgary, Canada", status: "Invited", image: null },
  { name: "Aymen Saied", affiliation: "Université Laval, Canada", status: "Invited", image: null },
  { name: "Youssef Essediq", affiliation: "Huawei, Canada", status: "Invited", image: null },
  { name: "Eray Tuzun", affiliation: "[Affiliation — pending]", status: "Accepted", image: null },
  { name: "Mounir Ghogho", affiliation: "[Affiliation — pending]", status: "Invited", image: null },
  { name: "Walid Gaaloul", affiliation: "[Affiliation — pending]", status: "Invited", image: null },
  { name: "Mariam Guizani", affiliation: "Queen's University", status: "Invited", image: null },
  { name: "Bruce Maxim", affiliation: "University of Michigan-Flint", status: "Invited", image: bruceMaxim },
  { name: "Houari Sahraoui", affiliation: "University of Montréal", status: "Invited", image: houariSahraoui },
  { name: "Fabio Palomba", affiliation: "[Affiliation — pending]", status: "Invited", image: null },
  { name: "Zadia Codabux", affiliation: "University of Saskatchewan", status: "Invited", image: zadiaCodabux },
  { name: "Filipe Cogo", affiliation: "Queen's University", status: "Invited", image: null },
  { name: "Suhaib Mujahid", affiliation: "Mozilla", status: "Invited", image: null },
];

const Speakers = () => {
  return (
    <section id="speakers" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Invited Speakers</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              These speakers have been invited and have not declined. Full details (talk title, abstract,
              delivery mode, photo where not yet available) are pending final confirmation by the program
              chairs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {invitedSpeakers.map((speaker, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <div className="aspect-square overflow-hidden bg-muted flex items-center justify-center">
                  <img
                    src={speaker.image ?? `${import.meta.env.BASE_URL}placeholder.svg`}
                    alt={speaker.image ? speaker.name : `[PLACEHOLDER — photo pending for ${speaker.name}]`}
                    className={speaker.image ? "w-full h-full object-cover" : "w-16 h-16 opacity-30"}
                  />
                </div>
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-lg font-bold">{speaker.name}</h3>
                  <p className="text-xs text-muted-foreground min-h-[40px]">
                    {speaker.affiliation}
                  </p>
                  <p className="text-xs text-primary font-semibold">{speaker.status}</p>
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