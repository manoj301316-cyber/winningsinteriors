import Carousel from "./Carousel";
import { portfolioGroups } from "../data/portfolioData";

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      {portfolioGroups.map((group) => (
        <Carousel
          key={group.id}
          title={group.title}
          items={group.items}
        />
      ))}
    </section>
  );
}