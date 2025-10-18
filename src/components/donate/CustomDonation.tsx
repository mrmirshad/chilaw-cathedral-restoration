import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, Building2, QrCode, Heart, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedProject, setSelectedProject] = useState("general");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [showThankYou, setShowThankYou] = useState(false);

  const presetAmounts = [1000, 3000, 5000, 10000];

  const projects = [
    { value: "general", label: "General Restoration Fund" },
    { value: "roof", label: "Roof of Unity" },
    { value: "statues", label: "Gallery of Statues" },
    { value: "wash", label: "Colour Wash" },
    { value: "wall", label: "Outside Protected Wall" },
  ];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmount = (value: string) => {
    const numValue = parseInt(value);
    if (numValue <= 999999 || value === "") {
      setCustomAmount(value);
      setSelectedAmount(null);
    }
  };

  const handleDonate = () => {
    const amount = selectedAmount || parseInt(customAmount);
    if (!amount || amount < 100) {
      toast({
        title: "Invalid Amount",
        description: "Please select or enter a valid donation amount (minimum LKR 100)",
        variant: "destructive",
      });
      return;
    }
    setShowThankYou(true);
    toast({
      title: "Thank You for Your Generosity!",
      description: `Your donation of LKR ${amount.toLocaleString()} will help restore the cathedral.`,
    });
  };

  if (showThankYou) {
    return (
      <div className="min-h-screen bg-gradient-sacred">
        <Navigation />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center pt-32 px-4 text-center"
        >
          <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-gold rounded-full mb-6 shadow-xl">
            <CheckCircle2 className="text-cathedral-blue w-12 h-12" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">
            Thank You for Your Sacred Gift
          </h1>
          <p className="text-xl italic font-crimson text-muted-foreground mb-6">
            "Every brick you give builds faith that lasts forever"
          </p>
          <Card className="bg-white/20 backdrop-blur-md shadow-lg max-w-md mx-auto">
            <CardContent className="space-y-4 pt-6">
              <p className="text-lg text-foreground font-inter">
                Your generous donation will help restore the glory of Chilaw Cathedral.
              </p>
              <div className="space-y-3">
                <Button
                  onClick={() => setShowThankYou(false)}
                  className="w-full bg-gradient-divine hover:opacity-90 shadow-lg font-inter"
                >
                  Make Another Donation
                </Button>
                <Button
                  variant="outline"
                  onClick={() => (window.location.href = "/")}
                  className="w-full font-inter"
                >
                  Return to Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-sacred">
      <Navigation />

      <div className="container mx-auto px-4 pt-32 pb-20">
        {/* --- Header --- */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <Heart className="w-16 h-16 mx-auto mb-4 text-cathedral-gold animate-bounce" />
          <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-2">
            Make Your Sacred Contribution
          </h1>
          <p className="text-xl italic font-crimson text-muted-foreground">
            Help restore our beloved cathedral and preserve faith for generations.
          </p>
        </motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* --- Donation Form --- */}
          <div className="lg:col-span-2 space-y-6">

            {/* Preset Amounts & Custom */}
            <Card className="bg-white/10 backdrop-blur-md border border-gold/40 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-foreground">Select Donation Amount</CardTitle>
                <CardDescription className="font-inter text-muted-foreground">
                  Choose a preset amount or enter a custom donation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {presetAmounts.map((amt) => (
                    <Button
                      key={amt}
                      variant={selectedAmount === amt ? "default" : "outline"}
                      onClick={() => handleAmountSelect(amt)}
                      className={`h-16 text-lg font-inter ${
                        selectedAmount === amt
                          ? "bg-gradient-gold shadow-lg text-cathedral-blue"
                          : "text-cathedral-blue"
                      }`}
                    >
                      LKR {amt.toLocaleString()}
                    </Button>
                  ))}
                </div>
                <div>
                  <Label htmlFor="custom-amount" className="font-inter">
                    Custom Amount (Max 999,999 LKR)
                  </Label>
                  <Input
                    id="custom-amount"
                    type="number"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => handleCustomAmount(e.target.value)}
                    max={999999}
                    className="mt-2 h-12 text-lg font-inter"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Project Selection */}
            <Card className="bg-white/10 backdrop-blur-md border border-gold/40 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-foreground">Choose a Project</CardTitle>
                <CardDescription className="font-inter text-muted-foreground">
                  Direct your donation to a specific restoration project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Select value={selectedProject} onValueChange={setSelectedProject}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select a project" />
                  </SelectTrigger>
                  <SelectContent className="bg-white/80">
                    {projects.map((p) => (
                      <SelectItem key={p.value} value={p.value}>{p.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card className="bg-white/10 backdrop-blur-md border border-gold/40 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-foreground">Payment Method</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                  <label className={`flex items-center p-4 rounded-lg border-2 transition-all cursor-pointer ${paymentMethod==="card" ? "border-gold bg-gold/20" : "border-border"}`}>
                    <RadioGroupItem value="card" />
                    <CreditCard className="ml-3 mr-2 text-cathedral-blue" /> Credit/Debit Card
                  </label>
                  <label className={`flex items-center p-4 rounded-lg border-2 transition-all cursor-pointer ${paymentMethod==="bank" ? "border-gold bg-gold/20" : "border-border"}`}>
                    <RadioGroupItem value="bank" />
                    <Building2 className="ml-3 mr-2 text-cathedral-blue" /> Bank Transfer
                  </label>
                  <label className={`flex items-center p-4 rounded-lg border-2 transition-all cursor-pointer ${paymentMethod==="qr" ? "border-gold bg-gold/20" : "border-border"}`}>
                    <RadioGroupItem value="qr" />
                    <QrCode className="ml-3 mr-2 text-cathedral-blue" /> QR Code Payment
                  </label>
                </RadioGroup>

                <Button
                  onClick={handleDonate}
                  className="w-full mt-4 bg-gradient-gold hover:opacity-90 shadow-lg h-12 text-lg font-inter"
                >
                  Complete Donation
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* --- Sidebar --- */}
          <div className="space-y-6">
            <Card className="bg-gradient-sacred shadow-lg border border-gold/40">
              <CardContent className="pt-6">
                <p className="text-center italic font-crimson text-lg text-foreground leading-relaxed">
                  "Every brick you give builds faith that lasts forever"
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border border-gold/40 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-playfair text-foreground">Share the Mission</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {["#RestoreTheGlory", "#ChilawCathedral", "#FaithAndFuture"].map(tag => (
                  <div key={tag} className="text-sm px-4 py-2 bg-gold/20 text-cathedral-blue rounded-full text-center font-inter hover:bg-gold/30 transition-colors cursor-pointer">
                    {tag}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
