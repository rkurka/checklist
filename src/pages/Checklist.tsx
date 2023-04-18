import React, {ReactNode, useContext} from "react";
import {OCContext} from "../components/OneClickContext";
import {Accordion} from "semantic-ui-react";
import {Task} from "../components/Task";
import {Milestone} from "../components/Milestone";

const Checklist = () => {
    const ctxOneClick = useContext(OCContext);

    const [show, setShow] = React.useState(false);

    const hasOne = () => {
        return ctxOneClick.cashbook || ctxOneClick.smartConnect || ctxOneClick.upload || ctxOneClick.sevDesk
    }

    return (
        <div onClick={()=>setShow(!show)}>
            <Accordion exclusive={false} fluid>
                {ctxOneClick.sevDesk && <Milestone title={"Vorbereitung externe Programme"}>
                    <div className={"panel"}>
                        {<Task done={true} title={"Sevdesk Kontenabstimmung"}></Task>}
                    </div>
                </Milestone>}
                {hasOne()  && <Milestone title={"Vorbereitung"}>
                    <div className={"panel"}>
                        {ctxOneClick.cashbook &&<Task done={true} mandant={true} title={"Kasse abschließen"}></Task>}
                        {ctxOneClick.smartConnect && <Task done={false} title={"SMART Connect Monatsabschluß"}></Task>}
                        {ctxOneClick.upload && <Task mandant={true}  done={false}title={"Belege hochladen"}></Task>}
                        <Task done={false}title={"Belegeingang prüfen"}></Task>
                    </div>
                </Milestone>}
                <Milestone title={"Durchführung"}>
                    <div className={"panel"}>
                        {ctxOneClick.smartConnect && <Task done={false} title={"SMART Connect übernehmen"}></Task>}
                        <Task done={false} title={"Elster übermitteln"}></Task>
                    </div>
                </Milestone>
                <Milestone title={"Nachschau"}>
                    <div className={"panel"}>
                        <Task done={false} title={"Rechnungen schreiben"}></Task>
                    </div>
                </Milestone>
            </Accordion>
        </div>
    );
};

export default Checklist;