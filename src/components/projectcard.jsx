export default function ProjectCard({
  title,
  description,
  tags,
  priv,
  finished = true,
  images = [],
}) {
  return (
    <div className={`${!finished && "opacity-50"} flex flex-col gap-4`}>
      <h1 className="text-2xl lg:text-5xl font-bold text-themeOne">
        {title}{" "}
        {priv && <span className="text-base text-white">(private)</span>}
        {!finished && (
          <span className="text-base text-white">(not finished)</span>
        )}
      </h1>
      <div className="flex flex-col lg:flex-row gap-2">
        {images.map((img, i) => {
          return (
            <img
              key={i}
              src={img}
              alt={"Image " + i}
              className="rounded-lg lg:w-1/2"
            />
          );
        })}
      </div>
      <p className="p-4 text-sm md:text-base lg:text-xl bg-additionalOne rounded-lg">
        {description}
      </p>
    </div>
  );
}
