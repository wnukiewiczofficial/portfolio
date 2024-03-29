export default function Resume() {
  return (
    <div className="w-full h-full text-center lg:text-left overflow-y-auto overflow-x-hidden scrollbar scrollbar-track-white/0 scrollbar-thumb-accent">
      <h1 className="text-2xl lg:text-5xl font-bold text-themeOne">
        Experience
      </h1>

      <div className="m-2 lg:m-4 p-2 lg:p-4 flex flex-col gap-2 bg-additionalOne rounded-lg">
        <h2 className="text-themeOne font-semibold text-2xl">
          Freelance Web/Game Developer{" "}
          <span className="text-lg text-white">(2021 - 2022)</span>
        </h2>
        <p className="text-sm md:text-base lg:text-xl">
          As a freelancer, I developed games and web applications, collaborating
          with over 100 clients from various parts of the world. I utilized
          diverse technologies, including 2D and 3D graphics, database
          integrations, form development, data analysis, real-time integrations,
          and sound elements. I delivered high-quality work and created
          responsive applications compatible with all devices. Additionally,
          there were instances where I designed websites and various interfaces.
          In addition to client projects, I endeavored to implement numerous
          innovative ideas, assisted clients with academic tasks, and resolved
          issues with existing software programs.
        </p>
        <h2 className="text-themeOne font-semibold text-2xl">
          Internship at Pro-Comp Computer Store{" "}
          <span className="text-lg text-white">(2020)</span>
        </h2>
        <p className="text-sm md:text-base lg:text-xl">
          During my internship at a computer store, I was involved in various
          aspects beyond sales of computer equipment. I was responsible for
          repairing damaged and faulty computers for customers, as well as
          optimizing devices used by other employees within the store. In
          addition to my work at the physical store, I participated in special
          projects for a company. This involved tasks such as installing
          printers, configuring networks, repairing devices, and setting up
          workstations in various businesses and schools. I also handled the
          repair and assembly of interactive whiteboards at a school.
          Furthermore, I created a website for a local kindergarten as a
          commissioned project for the company where I was interning. I
          developed it from scratch using PHP, incorporating a user-friendly
          content management system (CMS) and an administration panel. This
          allowed for easy content updates, user management, and customization
          of simple elements on the website. The entire website was programmed
          from the ground up.
        </p>
      </div>

      <h1 className="text-2xl lg:text-5xl font-bold text-themeOne">
        Education
      </h1>

      <div className="m-2 lg:m-4 p-2 lg:p-4 flex flex-col gap-2 bg-additionalOne rounded-lg">
        <h2 className="text-themeOne font-semibold text-2xl">
          Poznan University of Technology{" "}
          <span className="text-lg text-white">(2022 - Present)</span>
        </h2>
        <p className="text-sm md:text-base lg:text-xl">
          Major:{" "}
          <span className="text-themeOne font-semibold">Computer Science</span>
        </p>
        <p className="text-sm md:text-base lg:text-xl">
          Degree: <span className="text-themeOne font-semibold">Bachelor</span>
        </p>
      </div>

      <div className="m-2 lg:m-4 p-2 lg:p-4 flex flex-col gap-2 bg-additionalOne rounded-lg">
        <h2 className="text-themeOne font-semibold text-2xl">
          Electrical Engineering Technical School in Włocławek{" "}
          <span className="text-lg text-white">(2018- 2022)</span>
        </h2>
        <p className="text-sm md:text-base lg:text-xl">
          Major:{" "}
          <span className="text-themeOne font-semibold">Computer Science</span>
        </p>
        <p className="text-sm md:text-base lg:text-xl">
          Gained professional title:{" "}
          <span className="text-themeOne font-semibold">IT Technician</span>
        </p>
        <p className="text-sm md:text-base lg:text-xl">
          Professional Qualifications:{" "}
          <span className="text-themeOne font-semibold">E12</span>,
          <span className="text-themeOne font-semibold"> E13</span>,
          <span className="text-themeOne font-semibold"> E14</span>
        </p>
      </div>
    </div>
  );
}
