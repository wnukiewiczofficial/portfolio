import Card from "../components/card";
import {
  MdDesignServices,
  MdDesktopMac,
  MdStorage,
  MdBugReport,
} from "react-icons/md";

export default function Resume() {
  return (
    <div className="w-full h-full text-center lg:text-left">
      <h1 className="text-2xl lg:text-5xl font-bold text-themeOne">
        Experiance
      </h1>
      <p className=" p-2 lg:p-4 text-sm lg:text-base">
        Something about my experiance...
      </p>
    </div>
  );
}
