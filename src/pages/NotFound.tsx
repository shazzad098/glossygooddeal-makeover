import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedOrb from "@/components/AnimatedOrb";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative grid min-h-screen place-items-center overflow-hidden bg-hero px-6">
      <AnimatedOrb className="-top-32 left-1/3" size={520} />
      <AnimatedOrb className="bottom-[-180px] right-[-120px]" color="blue" size={460} />
      <div className="relative w-full max-w-xl text-center glass-strong rounded-3xl p-10 md:p-14">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Error 404</p>
        <h1 className="mt-3 font-display text-6xl font-bold tracking-tight md:text-7xl">
          <span className="text-primary">Page</span> not found
        </h1>
        <p className="mt-4 text-muted-foreground">
          The page you're looking for has moved, or never existed. Let's get you back on track.
        </p>
        <Button asChild size="lg" className="mt-8 bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg shadow-primary/20 hover:opacity-90">
          <Link to="/"><ArrowLeft className="mr-1.5 h-4 w-4" /> Return Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
