import { Link } from "react-router-dom";

function Botonera() {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/blog-ard"}>Blog Card</Link>
        </li>
        <li>
          <Link to={"/sumary-component"}>Sumary component</Link>
        </li>
      </ul>
    </div>
  );
}

export default Botonera;
