import Footer from "./components/Footer";
import { Header } from "./components/Header";
import { Work } from "./components/Work";
import { Experience } from "./components/Experience";

import BlurFade from "@/components/ui/blur-fade";

export default function Home() {
  return (
      <div className="mt-40 mb-20 flex flex-col justify-center items-center gap-20">
        <BlurFade>
          <Header /> 
        </BlurFade>
        <BlurFade className="flex flex-col items-center">
          <Work />
        </BlurFade>
        <BlurFade>
          <Experience />
        </BlurFade>
        <Footer />
      </div>
  );
}
