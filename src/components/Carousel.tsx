import Carousel from "../components/Card";
import { destinations } from "../Data";

export default function carousel() {
  return (
    <div className="">
      <Carousel destinations={destinations} />
    </div>
  );
}