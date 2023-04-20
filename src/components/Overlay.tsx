import React from "react";
import {Button, Header, Icon, Segment} from "semantic-ui-react";
import MileStoneForm from "./mileStoneForm";
import TaskForm from "./taskForm";
import {Checkpoint} from "./CheckpointContext";

export interface OverlayProps {
    callback?: () => void;
    title: string;
    checkpoints: Checkpoint[];
    type: "milestone" | "task" | "none";
}

const Overlay: React.FC<OverlayProps> = ({type , title,callback,checkpoints}) => {
    return <div className={"overlay"}>
        <Header as='h2' attached='top' textAlign={"right"}>
            <Icon onClick={callback} size={"massive"} color={"grey"} name={"close"} />
        </Header>
        <Segment attached>
        {type === "milestone" && <MileStoneForm title={title} />}
        {type === "task" && <TaskForm title={title} checkpoints={checkpoints}/>}
        </Segment>
    </div>
}

export default Overlay;