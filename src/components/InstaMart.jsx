import { useState } from "react";

function Section({ title, description, visible, setVisible, id }) {
  return (
    <div className="border border-black p-2 m-2">
      <div className="flex justify-between">
        <h3>{title}</h3>
        <button
          onClick={() => {
            setVisible();
          }}
          className="px-7 cursor-pointer">
          {visible === id ? "-" : "+"}
        </button>
      </div>
      {visible === id && <p>{description}</p>}
    </div>
  );
}

function InstaMart() {
  // const [sectionConfig, setSectionConfig] = useState({
  //   showAbout: false,
  //   showTeam: false,
  //   showCareers: false,
  // });
  // Not a good approach to follow, not scalable. we have to focus on one section to show.
  const [visibleSection, setVisibleSection] = useState("");

  return (
    <div>
      <h1 className="text-3xl font-bold p-2 m-2">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo ipsa cumque placeat illo alias suscipit possimus eum, illum fugit culpa!"
        }
        visible={visibleSection}
        setVisible={() => {
          if (visibleSection === "about") {
            setVisibleSection("");
          } else {
            setVisibleSection("about");
          }
        }}
        id="about"
      />
      <Section
        title={"Team Instamart"}
        description={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo ipsa cumque placeat illo alias suscipit possimus eum, illum fugit culpa!"
        }
        visible={visibleSection}
        setVisible={() => {
          if (visibleSection === "team") {
            setVisibleSection("");
          } else {
            setVisibleSection("team");
          }
        }}
        id="team"
      />
      <Section
        title={"Careers"}
        description={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo ipsa cumque placeat illo alias suscipit possimus eum, illum fugit culpa!"
        }
        visible={visibleSection}
        setVisible={() => {
          if (visibleSection === "careers") {
            setVisibleSection("");
          } else {
            setVisibleSection("careers");
          }
        }}
        id="careers"
      />
    </div>
  );
}

export default InstaMart;
