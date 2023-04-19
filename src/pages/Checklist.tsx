import React, {useContext, useEffect, useState} from "react";
import {OCContext} from "../components/OneClickContext";
import {Accordion, Button} from "semantic-ui-react";
import {Task} from "../components/Task";
import {Milestone} from "../components/Milestone";
import Overlay from "../components/Overlay";
import {CheckpointContext} from "../components/CheckpointContext";

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
    const ctxCheckPoints = useContext(CheckpointContext);
    const [formStatus, setFormStatus] = useState(new FormStatus("none",""));

    const hasOne = () => {
        return ctxOneClick.cashbook || ctxOneClick.smartConnect || ctxOneClick.upload || ctxOneClick.sevDesk
    }
    const showHandler = () => {
        setFormStatus(new FormStatus("none",""))
    }

    const showMilestone = (title: string) => {
        if (formStatus.type !== "milestone") {
            setFormStatus(new FormStatus("milestone",title))
        } else {
            setFormStatus(new FormStatus("none",""))
        }
    }

    const showTask = (title: string) => {
        if (formStatus.type !== "task") {
            setFormStatus(new FormStatus("task", title))
        } else {
            setFormStatus(new FormStatus("none",""))
        }
    }

    return (
        <div >
            <Accordion exclusive={false} fluid>
                {ctxOneClick.sevDesk &&
                    <Milestone title={"Vorbereitung externe Programme"} click={showMilestone}>
                        <div className={"panel"}>
                            {<Task click={showTask} checkpoint={[ctxCheckPoints.sevDesk.monthClosed]} title={"Sevdesk Kontenabstimmung"}></Task>}
                        </div>
                    </Milestone>
                }
                {hasOne()  &&
                    <Milestone title={"Vorbereitung"}  click={showMilestone}>
                        <div className={"panel"}>
                            {ctxOneClick.cashbook &&<Task click={showTask} checkpoint={[ctxCheckPoints.cashbook.export]} mandant={true} title={"Kasse abschließen"}></Task>}
                            {ctxOneClick.smartConnect && <Task click={showTask} checkpoint={[ctxCheckPoints.smartConnect.checkCurrentStatus]} title={"SMART Connect Monatsabschluß"}></Task>}
                            {ctxOneClick.upload && <Task click={showTask} checkpoint={[ctxCheckPoints.upload.checkMonthSubmitted]} mandant={true} title={"Belege hochladen"}></Task>}
                            <Task click={showTask}
                                checkpoint={ [
                                    ctxCheckPoints.cashbook.check,
                                    ctxCheckPoints.upload.check,
                                    ctxCheckPoints.smartConnect.check
                                ]}
                                title={"Belegeingang prüfen"}></Task>
                        </div>
                    </Milestone>
                }
                <Milestone title={"Durchführung"} click={showMilestone}>
                    <div className={"panel"}>
                        {ctxOneClick.smartConnect && <Task click={showTask}  title={"SMART Connect übernehmen"}></Task>}
                        <Task click={showTask}  title={"Elster übermitteln"}></Task>
                    </div>
                </Milestone>
                <Milestone title={"Nachschau"}  click={showMilestone}>
                    <div className={"panel"}>
                        <Task click={showTask} title={"Rechnungen schreiben"}></Task>
                    </div>
                </Milestone>
            </Accordion>
            {formStatus.type !== "none" && <Overlay title={formStatus.title} type={formStatus.type} callback={showHandler} />}
        </div>
    );
};

export default Checklist;