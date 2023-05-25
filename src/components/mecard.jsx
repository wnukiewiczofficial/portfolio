export default function MeCard({ icon, title }) {
  return (
    <figure className="bg-additionalOne rounded-lg w-full flex flex-col justify-center items-center py-4">
      <div className="text-3xl md:text-6xl lg:text-8xl text-themeOne">
        {icon}
      </div>
      <figcaption className="md:text-lg lg:text-xl font-semibold">
        {title}
      </figcaption>
    </figure>
  );
}
