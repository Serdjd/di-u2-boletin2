import { useState } from "react";
import { useImmer } from "use-immer";

export default function SurveySimulator2() {
    const [votes,updateVotes] = useImmer(
        {
            total: 0,
            ok: 0,
            no: 0,
            maybe: 0,
            averages: {
                ok: 0.00,
                no: 0.00,
                maybe: 0.00
            }
        }
    )

    function onClick(e) {
        let si = votes.ok
        let no = votes.no
        let maybe = votes.maybe
        switch(e.target.name) {
            case "si":
                si += 1
                break;
            case "no":
                no += 1
                break;
            case "maybe":
                maybe += 1
                break
        }
        updateVotes(
            draft => {
                draft.total += 1
                draft.ok = si
                draft.no = no
                draft.maybe = maybe
                draft.averages.ok = (draft.ok/draft.total)*100
                draft.averages.no = (draft.no/draft.total)*100
                draft.averages.maybe = (draft.maybe/draft.total)*100
            }
        )
    }

    return(
        <div>
            <label>Si: {votes.ok} {votes.averages.ok.toFixed(2)}%</label>
            <br/>
            <label>No: {votes.no} {votes.averages.no.toFixed(2)}%</label>
            <br/>
            <label>Tal vez: {votes.maybe} {votes.averages.maybe.toFixed(2)}%</label>
            <br/>
            <button onClick={onClick} name="si">Si</button>
            <button onClick={onClick} name="no">No</button>
            <button onClick={onClick} name="maybe">Tal vez</button>
        </div>
    )
}       