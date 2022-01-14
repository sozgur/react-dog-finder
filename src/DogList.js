import "./DogList.css";
import { Link } from "react-router-dom";

const DogList = ({ dogs }) => {
    return (
        <div className="DogList-container">
            {dogs.map((dog) => (
                <div className="DogList-content">
                    <h2>{dog.name}</h2>
                    <img src={dog.src} alt={dog.name} />
                    <Link to={`/dogs/${dog.name.toLowerCase()}`}>Detail</Link>
                </div>
            ))}
        </div>
    );
};

export default DogList;
