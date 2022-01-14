import { useParams } from "react-router-dom";
import DogDetails from "./DogDetails";

const DogSearch = ({ dogs }) => {
    const { name } = useParams();

    let currentDog = null;

    if (name) {
        currentDog = dogs.find(
            (dog) => dog.name.toLowerCase() === name.toLowerCase()
        );

        console.log(currentDog);
    }

    return (
        <div>
            <DogDetails dog={currentDog} />
        </div>
    );
};

export default DogSearch;
