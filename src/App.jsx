import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Leaf, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function App() {
  const [monthlyBill, setMonthlyBill] = useState(0);
  const [systemSize, setSystemSize] = useState(0);
  const [estimatedCost, setEstimatedCost] = useState(0);
  const [monthlySavings, setMonthlySavings] = useState(0);
  const [requiredPanels, setRequiredPanels] = useState(0);

  const handleSimulation = () => {
    const size = monthlyBill / 300;
    const panelWattage = 590;
    const panelCost = 9500;
    const panels = Math.ceil((size * 1000) / panelWattage);
    const cost = panels * panelCost;
    const savings = monthlyBill * 0.9;
    setSystemSize(size.toFixed(1));
    setEstimatedCost(cost.toLocaleString("es-MX", { style: "currency", currency: "MXN" }));
    setMonthlySavings(savings.toLocaleString("es-MX", { style: "currency", currency: "MXN" }));
    setRequiredPanels(panels);

    // Aquí podrías conectar con Google Sheets si deseas
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 space-y-10">
      <header className="text-center space-y-4">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl font-bold">
          Tu Perfil Energía
        </motion.h1>
        <p className="text-lg max-w-2xl mx-auto">
          Energía solar inteligente para empresas, hogares y comunidades. Cotiza en minutos, ahorra por años.
        </p>
        <Button className="text-lg px-8 py-4">Cotiza tu proyecto</Button>
      </header>
    </div>
  );
}
