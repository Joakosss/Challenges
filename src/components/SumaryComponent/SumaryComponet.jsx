import "./sumaryComponent.css";
import data from "./data.json";
import Reaction from "./assets/icon-Reaction.svg";
import Memory from "./assets/icon-Memory.svg";
import Verbal from "./assets/icon-Verbal.svg";
import Visual from "./assets/icon-Visual.svg";

export function SumaryComponent() {
  console.log(data);
  return (
    <article className="container">
      <div className="principalDiv div-interiores">
        <h4>Your Result</h4>
        <div className="circle">
          <h3 className="circleTitle">76</h3>
          <p className="circleText">of 100</p>
        </div>
        <h2>Great</h2>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div className="secondaryDiv div-interiores">
        <h3>Summary</h3>
        <ul>
          {data.map((element, index) => (
            <Calification
              key={index}
              name={element.category}
              puntaje={element.score}
              color={element.rojo}
              icono={element.icon}
            ></Calification>
          ))}
        </ul>

        <button>Continue</button>
      </div>
    </article>
  );
}

function Calification({ name, puntaje, color, icono }) {
  return (
    <li className={`calificationComponent ${color}`}>
      <img src={name} alt="" />
      <h3>{name}</h3>
      <p>
        <strong>{puntaje}</strong>/100
      </p>
    </li>
  );
}
