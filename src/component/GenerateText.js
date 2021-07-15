import React, {useState} from "react";
import {TextInfo} from "./TextInfo";
import {getText, getRanking} from "../service/rankingService"


export const GenerateText = props => {
    const [text, setText] = useState({});
    const [ranking, setRanking] = useState({
        id: '',
        title: '',
        rankingList: []
    });

    const handleSubmit = event => {
        event.preventDefault();
        getText().then(t => {
            setText(t);
            getRanking(t.id).then(r => setRanking(r))
        } );
    }

    return (
        <div className="pt-3 pb-3 container">
            <div className="text-center">
                <form onSubmit={handleSubmit}>
                    <button type="submit" className="btn btn-primary">Generate Random Text</button>
                </form>
            </div>
            <TextInfo
                text={text}
                ranking={ranking}
            />
        </div>
    )
}