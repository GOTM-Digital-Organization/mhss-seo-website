import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

import Home from "./pages/Home";
import PressureWashers from "./pages/PressureWashers";
import Pumps from "./pages/Pumps";
import PressureWasherParts from "./pages/PressureWasherParts";
import SurfaceCleaners from "./pages/SurfaceCleaners";
import AirlessSprayers from "./pages/AirlessSprayers";
import HoseReels from "./pages/HoseReels";
import HydraulicHose from "./pages/HydraulicHose";
import PestControlSprayers from "./pages/PestControlSprayers";
import DecoProducts from "./pages/DecoProducts";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PumpsAndParts from "./pages/PumpsAndParts";
import PressureWashingRigs from "./pages/PressureWashingRigs";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/pressure-washers" component={PressureWashers} />
      <Route path="/pumps" component={Pumps} />
      <Route path="/pumps-parts" component={PumpsAndParts} />
      <Route path="/pressure-washing-rigs" component={PressureWashingRigs} />
      <Route path="/pressure-washer-parts" component={PressureWasherParts} />
      <Route path="/surface-cleaners" component={SurfaceCleaners} />
      <Route path="/airless-sprayers" component={AirlessSprayers} />
      <Route path="/hose-reels" component={HoseReels} />
      <Route path="/hydraulic-hose" component={HydraulicHose} />
      <Route path="/pest-control-sprayers" component={PestControlSprayers} />
      <Route path="/deco-products" component={DecoProducts} />
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
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
