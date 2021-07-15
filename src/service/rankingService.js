import axios from "axios";
const env = process.env;

const getRanking = async (id) => {
    let resourceURL = `${env.REACT_APP_API_URL}/${env.REACT_APP_API_RESOURCE_TEXT}/${ id + env.REACT_APP_API_RESOURCE_RANKING}`;
    return axios.get(resourceURL)
        .then(res => {
            return {
                id: res.data.id,
                title: res.data.text,
                rankingList: res.data.ranking
            };
        })
}

const getText = async () => {
    let resourceURL = `${env.REACT_APP_API_URL + env.REACT_APP_API_RESOURCE_TEXT}`;
    return axios.get(resourceURL)
        .then(res => {
            return {
                id: res.data.id,
                title: res.data.title,
                text: res.data.text
            }
        }).catch(e => {})
}

export {getRanking, getText};