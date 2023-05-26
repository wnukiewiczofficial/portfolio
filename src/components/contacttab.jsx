import { BiLinkExternal } from "react-icons/bi";

export default function ContactTab({ icon, label, value, href }) {
  function handleHref() {
    if (href) window.open(href);
  }
  return (
    <div
      className={`w-full bg-additionalOne p-4 rounded-lg flex flex-col justify-center items-center gap-2 relative ${
        href && "cursor-pointer"
      }`}
      onClick={handleHref}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="text-5xl md:text-6xl lg:text-8xl text-themeOne">
          {icon}
        </div>
        <span className="text-xl md:text-2xl lg:text-3xl">{label}</span>
      </div>
      <span className="font-semibold text-sm md:text-base lg:text-lg">
        {value}
      </span>

      {href && (
        <span className="absolute top-4 right-4 text-2xl">
          <BiLinkExternal />
        </span>
      )}
    </div>
  );
}
