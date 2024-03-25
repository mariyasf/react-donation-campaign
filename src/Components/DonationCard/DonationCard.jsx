import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";


const DonationCard = ({ data }) => {

    const { card_bg, image, title, description, price, category, category_bg, text_button_bg } = data || {};


    return (
        <Card style={{ backgroundColor: card_bg }} className="w-full max-w-[48rem] flex-row mt-10">
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
            >
                <img
                    src={image}
                    alt="card-image"
                    className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody>

                <Button style={{ backgroundColor: category_bg, color: text_button_bg }} size="sm" className="mb-3">{category}</Button>

                <Typography variant="h4" color="blue-gray" className="mb-2">
                    {title}
                </Typography>

                <Button style={{ backgroundColor: category_bg, color: "white" }} size="lg" className="mb-3">View Details</Button>

            </CardBody>
        </Card>
    );
};

export default DonationCard;