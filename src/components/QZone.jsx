import swimming from "../assets/swimming.png";
import classroom from "../assets/classroom.png";
import playground from "../assets/playground.png";

const QZone = () => {
  return (
    <div className="bg-base-200 mt-8 md:mt-4 lg:mt-8 p-4">
      <h2 className="font-semibold text-lg text-primary mb-2">Q-Zone</h2>
      <div className="space-y-4">
        <img src={swimming} alt="Swimming" className="mx-auto" />
        <img src={classroom} alt="Classroom" className="mx-auto" />
        <img src={playground} alt="Playground" className="mx-auto" />
      </div>
    </div>
  );
};

export default QZone;
