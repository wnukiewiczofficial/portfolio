import { BiLinkExternal } from "react-icons/bi";

export default function ContactTab({ icon, label, value, href }) {
  function handleHref() {
    if (href) window.location.replace("https://github.com/wnukiewiczofficial");
  }
  return (
    <div
      className={`w-full bg-additionalOne p-4 rounded-lg flex flex-col justify-between items-center gap-2 relative ${
        href && "cursor-pointer"
      }`}
      onClick={handleHref}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="text-4xl">{icon}</div>
        <span>{label}</span>
      </div>
      <span className="font-semibold text-sm">{value}</span>

      {href && (
        <span className="absolute top-2 right-4">
          <BiLinkExternal />
        </span>
      )}
    </div>
  );
}
