import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";


const CardDefault = ({ item }) => {
    const { id, title, category, category_bg, image, card_bg, text_button_bg } = item;

    return (

        <Link to={`/donation-details/${id}`}>
            <Card style={{ backgroundColor: card_bg }} className="mt-6 overflow-hidden shadow-lg cursor-pointer" >
                <CardHeader color="blue-gray" className="rounded-none m-0">
                    <img
                        src={image}
                        alt="card-image"
                    />
                </CardHeader>
                <CardBody>
                    <Button style={{ backgroundColor: category_bg, color: text_button_bg }} size="sm" className="mb-3">{category}</Button>
                    <Typography style={{ color: text_button_bg }} variant="h5" color="blue-gray" className="mb-2">
                        {title}
                    </Typography>

                </CardBody>
            </Card >
        </Link>
    );
};

export default CardDefault;