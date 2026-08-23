import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import registrationQR from "@/assets/registration-qr.png";

const Registration = () => {
  const nonResidentFees = [
    { category: "🌐 Remote Participant", fee: "[Free or reduced rate — à décider, per source]" },
  ];

  const residentFees = [
    { category: "🎓 PhD Student", fee: "500 MAD" },
    { category: "🎓 Master's / Final-Year Engineering Student", fee: "500 MAD" },
    { category: "🧑‍🏫 Researcher / Faculty", fee: "500 MAD" },
    { category: "🌍 International (non-Moroccan)", fee: "500 MAD" },
    { category: "🏢 Industry Professional", fee: "500 MAD — professional rate à décider, per source" },
  ];

  return (
    <section id="registration" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Registration</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground mt-4">
              Secure your spot at Africa's premier AI & Software Engineering event
            </p>
          </div>

          <Card className="border-2 border-primary/20 shadow-lg" style={{ boxShadow: "var(--card-shadow)" }}>
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-center md:text-left space-y-4">
                  <h3 className="text-2xl font-bold">Ready to Register?</h3>
                  <p className="text-muted-foreground">
                    Fill out our registration form to join this transformative event. 
                    Early registration is recommended as spots are limited.
                  </p>
                  <Button size="lg" className="gap-2" asChild>
                    <a href="#" aria-disabled="true" onClick={(e) => e.preventDefault()}>
                      Register Now [REGISTRATION URL — PENDING]
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
                <div className="flex-shrink-0">
                  <div className="block">
                    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <img
                        src={registrationQR}
                        alt="[PLACEHOLDER] Registration Form QR Code — pending 2026 registration URL"
                        className="w-32 h-32 md:w-40 md:h-40 opacity-40"
                      />
                      <p className="text-xs text-center mt-2 text-muted-foreground">QR pending final registration URL</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg" style={{ boxShadow: "var(--card-shadow)" }}>
            <CardHeader>
              <CardTitle className="text-2xl">Registration Fees</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Remote Participation</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">Category</th>
                        <th className="text-right py-3 px-4 font-semibold">Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      {nonResidentFees.map((item, index) => (
                        <tr key={index} className="border-b last:border-0">
                          <td className="py-3 px-4">{item.category}</td>
                          <td className="py-3 px-4 text-right font-semibold text-primary">{item.fee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">On-Site Participation</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">Category</th>
                        <th className="text-right py-3 px-4 font-semibold">Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      {residentFees.map((item, index) => (
                        <tr key={index} className="border-b last:border-0">
                          <td className="py-3 px-4">{item.category}</td>
                          <td className="py-3 px-4 text-right font-semibold text-primary">{item.fee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg space-y-3">
                <h4 className="font-semibold">What's Included</h4>
                <p className="text-sm">
                  The registration fee covers participation in all sessions, access to materials and certificates, 
                  welcome kit, coffee breaks, lunch, and networking events.
                </p>
                <p className="text-sm font-medium text-muted-foreground">
                  Note: Participants are responsible for their own travel and accommodation expenses unless 
                  otherwise indicated by a sponsorship grant.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Card className="inline-block border-0 shadow-lg" style={{ boxShadow: "var(--card-shadow)" }}>
              <CardContent className="p-6 space-y-4">
                <p className="text-lg">
                  <span className="text-muted-foreground">Registration opens:</span>{" "}
                  <span className="font-bold text-primary text-xl">August 3, 2026</span>
                </p>
                <p className="text-lg">
                  <span className="text-muted-foreground">Application deadline:</span>{" "}
                  <span className="font-bold text-primary text-xl">September 15, 2026 (or capacity)</span>
                </p>
                <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-lg">
                  <p className="text-sm font-medium text-amber-900 dark:text-amber-100">
                    ⚠️ Note: We have a limited number of places. The registration for in-person attendance will be closed as soon as the number of available places is filled.
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Applications are reviewed in weekly batches; admitted participants are notified by email
                  within 10 days of their batch. A place is guaranteed only after payment; unpaid seats
                  are released after 7 days.
                </p>
                <p className="text-sm text-muted-foreground">
                  Application requires: identity, institution, category, a motivation statement (200
                  words max), a CV (PDF), and — optionally — a poster/demo abstract.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 shadow-lg" style={{ boxShadow: "var(--card-shadow)" }}>
            <CardHeader>
              <CardTitle className="text-2xl">Payment Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted/50 p-6 rounded-lg">
                <p className="text-sm text-muted-foreground">[PAYMENT DETAILS — PENDING APPROVAL]</p>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="text-sm font-medium">
                  Please send a copy of the payment receipt to:{" "}
                  <a href="mailto:[CONTACT EMAIL — PENDING APPROVAL]" className="text-primary hover:underline">
                    [CONTACT EMAIL — PENDING APPROVAL]
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default Registration;