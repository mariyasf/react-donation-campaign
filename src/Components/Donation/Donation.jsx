import useLocalStorage from "../../Hooks/useLocalStorage";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import DonationCard from "../DonationCard/DonationCard";

const Donation = () => {
    const { localData } = useLocalStorage();
    console.log(localData);


    return (

        <div className="grid grid-cols-2 gap-10  mx-12">
            {/* <h2 className="text-3xl font-bold text-center mt-5">Donating: {localData.length}</h2> */}
            {
                localData.map(data =>
                (<DonationCard
                    key={data.id}
                    data={data} ></DonationCard>

                ))
            }
        </div>
    );
};

export default Donation;