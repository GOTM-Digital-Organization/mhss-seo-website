import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import HydraulicHoseRepair from "./pages/HydraulicHoseRepair";
import PressureWasherRepair from "./pages/PressureWasherRepair";
import PressureWashingSupply from "./pages/PressureWashingSupply";
import RigBuilds from "./pages/RigBuilds";
import EmergencyService from "./pages/EmergencyService";
import About from "./pages/About";
import Contact from "./pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/hydraulic-hose-repair-sarasota" component={HydraulicHoseRepair} />
      <Route path="/pressure-washer-repair-sarasota" component={PressureWasherRepair} />
      <Route path="/pressure-washing-supply-store" component={PressureWashingSupply} />
      <Route path="/pressure-washing-rig-builds" component={RigBuilds} />
      <Route path="/emergency-mobile-hose-repair" component={EmergencyService} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
