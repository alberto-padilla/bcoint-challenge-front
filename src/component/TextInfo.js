import React from "react";

export const TextInfo = props => {

    return (
        <div className="container pt-3 pb-3">
            <div className="card shadow">
                <div className="card-body">
                    <h4>Generated Text</h4>
                    <div className="table-wrapper-scroll-y my-custom-scrollbar">
                        <table className="table table-bordered table-striped mb-0" id="dataTable" width="100%">
                            <tbody>
                            <tr>
                                <td>ID</td>
                                <td>{props.text.id}</td>
                            </tr>
                            <tr>
                                <td>Title</td>
                                <td>{props.text.title}</td>
                            </tr>
                            <tr>
                                <td>Text</td>
                                <td>{props.text.text}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="card-body">
                    <div className="table-wrapper-scroll-y my-custom-scrollbar">
                        <h4>Ranking</h4>
                        <table className="table table-bordered table-striped mb-0" id="dataTable" width="100%">
                            <thead>
                            <tr>
                                <th>Position</th>
                                <th>Word</th>
                                <th>Occurrences</th>
                            </tr>
                            </thead>
                            <tbody>
                            {props.ranking.rankingList.map((item) =>
                                <tr key={item.position}>
                                    <td>{item.position}</td>
                                    <td>{item.word}</td>
                                    <td>{item.occurrences}</td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
