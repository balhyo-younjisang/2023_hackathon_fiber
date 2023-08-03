import axios from "axios";
import { LUNCH_API_KEY } from "@env";

export const getMenu = async () => {
    const mealApiUrl = `https://openapi.mnd.go.kr/${LUNCH_API_KEY}/json/DS_TB_MNDT_DATEBYMLSVC_ATC/1/5`;

    try {
        const { data: { DS_TB_MNDT_DATEBYMLSVC_ATC: { row } } } = await axios.get(mealApiUrl).catch((e) => console.log(e));
        console.log(row);

        return { sumCal: row[0].sum_cal, data: row };
    } catch (e) {
        console.log(e);
    }
}

export const getPxMenu = async () => {
    const pxMenuApiUrl = `https://openapi.mnd.go.kr/${LUNCH_API_KEY}/json/DS_MND_PX_PARD_PRDT_INFO/1/5`;

    try {
        const { data: { DS_MND_PX_PARD_PRDT_INFO: { row } } } = await axios.get(pxMenuApiUrl).catch((e) => console.log(e));
        // console.log(row);
        return { data: row };
    } catch (e) {
        console.log(e);
    }
}