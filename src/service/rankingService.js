import React from "react";
import axios from "axios";

const getRanking = async (id) => {
    return axios.get(`http://localhost:8081/bcoint-challange-back/text/` + id + "/ranking")
        .then(res => {
            return {
                id: res.data.id,
                title: res.data.text,
                rankingList: res.data.ranking
            };
        })
}

const getText = async () => {
    return axios.get(`http://localhost:8081/bcoint-challange-back/text`)
        .then(res => {
            return {
                id: res.data.id,
                title: res.data.title,
                text: res.data.text
            }
        }).catch(e => {})
}

export {getRanking, getText};