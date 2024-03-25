import { useParams } from "react-router-dom";
import useDonationData from "../../Hooks/useDonationData";
import { useEffect, useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
    Button,
} from "@material-tailwind/react";
import { saveToLocalStorage } from "../../Utils/localStorage";
import { ToastContainer } from "react-toastify";



const DonationDetails = () => {
    const [singleData, setSingleData] = useState({});
    const { id } = useParams();
    const { data, loading } = useDonationData();

    const handleDonate = () => {
        saveToLocalStorage(singleData);
    }


    useEffect(() => {
        if (data) {
            const singData = data.find(iteam => iteam.id === +id);
            setSingleData(singData);
            // console.log(singData);
        }
    }, [data, id]);

    // console.log(id);
    const { image, title, description, price, category_bg } = singleData || {};


    return (
        <div>
            <ToastContainer />
            <Card className="w-full mt-12 rounded-md shadow-none lg:px-20 mx-auto overflow-hidden">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="relative m-0 rounded-none"
                >
                    <img className="w-full rounded-md h-[600px]"
                        src={image}
                        alt="ui/ux review check"
                    />

                    <div className="absolute bottom-0 bg-opacity-40
                     bg-black w-full h-20 pt-4 pl-8">
                        <Button className="cursor-pointer" onClick={handleDonate} size="md" style={{ backgroundColor: category_bg, color: "white" }}>Donate ${price}</Button>
                    </div>
                </CardHeader>
                <CardBody>

                    {title && (
                        <Typography variant="h2" color="blue-gray">
                            {title}
                        </Typography>
                    )}
                    {description && (
                        <Typography variant="lead" color="gray" className="mt-3 font-normal">
                            {description}
                        </Typography>
                    )}
                </CardBody>
            </Card>
        </div>
    );
};

export default DonationDetails;