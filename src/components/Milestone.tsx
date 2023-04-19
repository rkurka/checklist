import React, {ReactNode} from "react";
import {Accordion, Button, Grid, Icon} from "semantic-ui-react";

export interface AuxProps {
    children: ReactNode;
    title: string;
    click:(title:string)=>void;
}

export const Milestone: React.FC<AuxProps> = ({
                                                  children,
                                                  title,
                                                  click}) => {
    const [phase, setPhase] = React.useState(true);
    return <>
        <Accordion.Title active={phase} index={0}>
            <Icon name='dropdown'/>
            <b  className={"milestoneTitle"} >{title}</b>
            <Button basic color='grey' size={'tiny'} icon onClick={() => click(title)}><Icon size={'small'} name={"edit"} /></Button>
        </Accordion.Title>
        <Accordion.Content active={phase}>
            {children}
        </Accordion.Content>
    </>
}