import React, {ReactNode} from "react";
import {Accordion, Icon} from "semantic-ui-react";

export interface AuxProps {
    children: ReactNode;
    title?: string;
}

export const Milestone: React.FC<AuxProps> = ({children, title}) => {
    const [phase, setPhase] = React.useState(true);
    return <>
        <Accordion.Title active={phase} index={0} onClick={() => setPhase(!phase)}>
            <Icon name='dropdown'/>
            <b className={"milestoneTitle"}>{title}</b>
        </Accordion.Title>
        <Accordion.Content active={phase}>
            {children}
        </Accordion.Content>
    </>
}