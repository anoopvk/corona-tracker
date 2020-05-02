import Axios from "axios";

const url = "https://api.covid19india.org/states_daily.json";

export const getdatafromapi = async () => {
    try {
        const response = await Axios.get(url);
        return response;
    } catch (error) {

    }
}

