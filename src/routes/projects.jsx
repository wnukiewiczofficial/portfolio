import { useSpring, animated } from "react-spring";

export default function Projects({ match }) {
  console.log(match);
  const popProps = useSpring({ scale: 1, from: { scale: 0 }, delay: 500 });
  return (
    <div className="w-full h-full">
      <h1>Something about me</h1>
    </div>
  );
}
