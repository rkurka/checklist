import React from "react";
import {Checkbox, Label, Segment} from "semantic-ui-react";

export interface TaskProps {
    title?: string;
    done: boolean;
    mandant?: boolean;
}

export const Task: React.FC<TaskProps> = ({title, done, mandant = false}) => {
    return <>
        <Segment className={"taskSegment"}>
            <div className={"containerTask"}>
                <Checkbox className={"taskCheck"}></Checkbox>
                <div className={"taskTitle"}>
                    {title}
                </div>
                <div className={"taskResponsible"}>
                    {mandant && <Label className={"resp"} color={"green"}>Mandant</Label>}
                    {!mandant && <Label className={"resp"} color={"blue"}>Berater</Label>}
                </div>
                <div className={"taskStatus"}>
                    {done && <Label>Erledigt</Label>}
                </div>
            </div>
        </Segment>
    </>
}