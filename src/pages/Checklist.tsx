import React, {useContext, useEffect, useState} from "react";
import {OCContext} from "../components/OneClickContext";
import {Accordion, Button} from "semantic-ui-react";
import {Task} from "../components/Task";
import {Milestone} from "../components/Milestone";
import Overlay from "../components/Overlay";

class FormStatus {
    type: "milestone" | "task" | "none";
    title: string;

    constructor(type: "milestone" | "task" | "none",title:string) {
        this.type = type;
        this.title = title;
    }
}

const Checklist = () => {
    const ctxOneClick = useContext(OCContext);
    const [formStatus, setFormStatus] = useState(new FormStatus("none",""));

    const hasOne = () => {
        return ctxOneClick.cashbook || ctxOneClick.smartConnect || ctxOneClick.upload || ctxOneClick.sevDesk
    }
    const showHandler = () => {
        setFormStatus(new FormStatus("none",""))
    }

    const showMilestone = (title: string) => {
        if (formStatus.type === "none") {
            setFormStatus(new FormStatus("milestone",title))
        } else {
            setFormStatus(new FormStatus("none",""))
        }
    }

    const showTask = (title: string) => {
        setFormStatus(new FormStatus("task",title))
    }

    return (
        <div >
            <Accordion exclusive={false} fluid>
                {ctxOneClick.sevDesk &&
                    <Milestone title={"Vorbereitung externe Programme"} click={showMilestone}>
                        <div className={"panel"}>
                            {<Task click={showTask} done={true} title={"Sevdesk Kontenabstimmung"}></Task>}
                        </div>
                    </Milestone>
                }
                {hasOne()  &&
                    <Milestone title={"Vorbereitung"}  click={showMilestone}>
                        <div className={"panel"}>
                            {ctxOneClick.cashbook &&<Task  click={showTask} done={true} mandant={true} title={"Kasse abschließen"}></Task>}
                            {ctxOneClick.smartConnect && <Task click={showTask} done={false} title={"SMART Connect Monatsabschluß"}></Task>}
                            {ctxOneClick.upload && <Task click={showTask} mandant={true}  done={false}title={"Belege hochladen"}></Task>}
                            <Task click={showTask} done={false}title={"Belegeingang prüfen"}></Task>
                        </div>
                    </Milestone>
                }
                <Milestone title={"Durchführung"} click={showMilestone}>
                    <div className={"panel"}>
                        {ctxOneClick.smartConnect && <Task click={showTask} done={false} title={"SMART Connect übernehmen"}></Task>}
                        <Task click={showTask} done={false} title={"Elster übermitteln"}></Task>
                    </div>
                </Milestone>
                <Milestone title={"Nachschau"}  click={showMilestone}>
                    <div className={"panel"}>
                        <Task click={showTask} done={false} title={"Rechnungen schreiben"}></Task>
                    </div>
                </Milestone>
            </Accordion>
            {formStatus.type !== "none" && <Overlay title={formStatus.title} type={formStatus.type} callback={showHandler} />}
        </div>
    );
};

export default Checklist;