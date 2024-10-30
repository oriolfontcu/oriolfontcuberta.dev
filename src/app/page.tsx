import { Header } from "./components/Header";
import { Work } from "./components/Work";

export default function Home() {
  return (
      <div className="bg-background my-40">
        <Header />
        <Work />
      </div>
  );
}
