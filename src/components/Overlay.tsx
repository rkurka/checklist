import React from "react";
import {Button} from "semantic-ui-react";

export interface OverlayProps {
    callback?: () => void;
}

const Overlay: React.FC<OverlayProps> = ({callback}) => {
    return <div className={"overlay"}>
        <Button primary={true} onClick={callback}>Hide</Button>
        <h1>Hello</h1>
    </div>
}

export default Overlay;