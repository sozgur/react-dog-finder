import { Link, Redirect } from "react-router-dom";
import "./DogDetails.css";

const DogDetails = ({ dog }) => {
    if (!dog) return <Redirect to="/dogs" />;

    return (
        <div className="DogDetails">
            <div className="DogDetails-img">
                <img src={dog.src} alt={dog.name} />
            </div>
            <div className="DogDetails-info">
                <h2>{dog.name}</h2>
                <h3>{dog.age} years old</h3>
                <ul>
                    {dog.facts.map((fact, idx) => (
                        <li key={idx}>{fact}</li>
                    ))}
                </ul>
                <Link className="DogDetails-goback" to="/dogs">
                    Go Back
                </Link>
            </div>
        </div>
    );
};

export default DogDetails;
