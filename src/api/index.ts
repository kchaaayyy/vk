import axios from "axios";
export const getCatFact = async () => {
    try {
        const response = await axios.get('https://catfact.ninja/fact');
        const text = response.data.fact;
        console.log(text);
        return text

    } catch (error){
        console.error('Ошибка запроса к API: ', error)
    }
}

export const getAgeFromName = async (name: string) => {
    try {
        const response = await axios.get(`https://api.agify.io/?name=${name}`);
        const age = response.data.age;
        console.log(age);
        return age
    } catch (error) {
        console.error('Ошибка запроса к API', error);
    }

}


export function findEndOfFirstWord(str: string) {
    const firstSpaceIndex = str.indexOf(' ');
    if (firstSpaceIndex !== -1) {
        const firstWordSubstring = str.substring(0, firstSpaceIndex);
        const lastNonSpaceIndex = firstWordSubstring.search(/\S+$/);
        if (lastNonSpaceIndex !== -1) {
            return lastNonSpaceIndex + 1;
        }
    }
    return -1;
}
