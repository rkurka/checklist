import React from "react";
import {Button, Checkbox, Icon, Label, Segment} from "semantic-ui-react";

export interface TaskProps {
    title: string;
    doneCheckpoint: boolean;
    mandant?: boolean;
    click:(title:string)=>void;
}

export const Task: React.FC<TaskProps> = ({title, doneCheckpoint, click, mandant = false}) => {
    return <>
        <Segment className={"taskSegment"}>
            <div className={"containerTask"}>
                <Checkbox className={"taskCheck"}></Checkbox>
                <div className={"taskTitle"}>
                    <span className={"taskLabel"}>{title}</span>
                    <Button basic color='grey' size={'tiny'} icon onClick={() => click(title)}><Icon size={'small'} name={"edit"} /></Button>
                </div>
                <div className={"taskResponsible"}>
                    {mandant && <Label className={"resp"} color={"green"}>Mandant</Label>}
                    {!mandant && <Label className={"resp"} color={"blue"}>Berater</Label>}
                </div>
                <div className={"taskStatus"}>
                    {doneCheckpoint && <Label>CP done</Label>}
                </div>
            </div>
        </Segment>
    </>
}