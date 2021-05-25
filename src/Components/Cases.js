import React from 'react'
import { ReactComponent as CasesNext } from "../Assets/arrow-right.svg";
import { ReactComponent as CasesPrev } from "../Assets/arrow-left.svg";

const Cases = () => {

  const caseStudies = [
    {
      id: 1,
      subtitle: "Living Space",
      title: "Distinctive designs for distinctive interiors.",
      img: "living",
    },
    {
      id: 2,
      subtitle: "Modern Bathrooms",
      title: "Innovative ideas, stylish designs.",
      img: "bathroom",
    },
    {
      id: 3,
      subtitle: "Kitchen Curation",
      title: "Build your perfect kitchen.",
      img: "kitchen",
    }
  ];

  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="cases-navigation">
          <div className="cases-arrow prev disabled">
            <CasesPrev />
          </div>
          <div className="cases-arrow next">
            <CasesNext />
          </div>
        </div>
        <div className="row">
          {caseStudies.map((caseItem) => (
            <div className="case" key={caseItem.id}>
              <div className="case-details">
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
              <div className="case-image">
                <img
                  src={require(`../Assets/${caseItem.img}.png`).default}
                  alt={caseItem.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cases
