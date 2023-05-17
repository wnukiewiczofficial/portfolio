export default function Card({ icon, title }) {
  return (
    <figure className="border-2 rounded-lg w-full border-themeOne flex flex-col justify-center items-center py-4">
      <div className="text-3xl lg:text-6xl text-themeOne">{icon}</div>
      <figcaption className="text-lg lg:text-xl font-semibold">
        {title}
      </figcaption>
    </figure>
  );
}
