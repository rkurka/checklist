import React from "react";
import {Button, Checkbox, Form, FormField, Icon, Input, Label, Popup, Segment, Tab} from "semantic-ui-react";
import {Checkpoint} from "./CheckpointContext";
import checkpoints from "../pages/checkpoints";

export interface TaskProps {
    title: string;
    mandant?: boolean;
    click:(title:string,checkpoints:Checkpoint[])=>void;
    checkpoint?: Checkpoint[]
}

const PopupExample: React.FC<TaskProps> = ({checkpoint}) => (
    <Popup content={<>
        <h3>Checkpoints</h3>
        {
            checkpoint?.map(
                check => <Checkbox checked={check.submitted} label={check.description} />
            )
        }

    </>} trigger={<Icon name='info' />} />
)

export default PopupExample


export const Task: React.FC<TaskProps> = ({title, click, mandant = false,checkpoint}) => {
    const getStatus = () => {
        if(checkpoint !== null && checkpoint !== undefined) {
            let cpdone = 0
            checkpoint.forEach((check) => {
                if (check.submitted) cpdone++
            });
            // ob Prozent das richtige ist der 1/3 oder so sei mal dahingestellt
            // verlinkung zum Checkpoint: was ist die Source, wann hat wer was ...
            // auch im Seitenbereich
            return (cpdone+"/"+checkpoint.length)
        }
        return "offen"
    }

    const isValid = (checkpoint?: Checkpoint[]) => {
        return checkpoint !== null && checkpoint !== undefined && checkpoint.length > 0
    }

    const getCheckpoints = () : Checkpoint[] => {
        if (checkpoint !== null && checkpoint !== undefined) {
            return checkpoint
        }
        return []
    }

     return <>
        <Segment className={"taskSegment"}>
            <div className={"containerTask"}>
                <Checkbox className={"taskCheck"}></Checkbox>
                <div className={"taskTitle"}>
                    <span className={"taskLabel"}>{title}</span>
                    <Button basic color='grey' size={'tiny'} icon onClick={() => click(title, getCheckpoints())}><Icon size={'small'} name={"edit"} /></Button>
                </div>
                <div className={"taskResponsible"}>
                    {mandant && <Label className={"resp"} color={"green"}>Mandant</Label>}
                    {!mandant && <Label className={"resp"} color={"blue"}>Berater</Label>}
                </div>
                <div className={"taskStatus"}>
                    {isValid(checkpoint) && <><Label>{getStatus()}</Label><PopupExample checkpoint={checkpoint} title={title} click={click}/></>}
                </div>
            </div>
        </Segment>
    </>
}