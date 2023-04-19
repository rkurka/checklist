import React from "react";
import {Button, Header, Segment} from "semantic-ui-react";
import MileStoneForm from "./mileStoneForm";
import TaskForm from "./taskForm";

export interface OverlayProps {
    callback?: () => void;
    title: string;
    type: "milestone" | "task" | "none";
}

const Overlay: React.FC<OverlayProps> = ({type , title,callback}) => {
    return <div className={"overlay"}>
        <Header as='h2' attached='top' size={"medium"}>
            <Button primary={true} onClick={callback}>Hide</Button>
        </Header>
        <Segment attached>
        {type === "milestone" && <MileStoneForm title={title} />}
        {type === "task" && <TaskForm title={title}/>}
        </Segment>
    </div>
}

export default Overlay;