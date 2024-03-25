import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const saveToLocalStorage = (data) => {
    let saveData = JSON.parse(localStorage.getItem("Donation")) || [];
    const existedData = saveData.find(item => item.id == data.id);

    if (!existedData) {
        saveData.push(data);
        localStorage.setItem("Donation", JSON.stringify(saveData))
        toast.success("Added Successfully");

    } else {
        toast.error("Data already exists");
    }
}


export const getFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("Donation")) || [];
    console.log("Total data stored:", data.length);
    return data;
}