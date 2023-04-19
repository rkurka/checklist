import React from "react";
import {Dropdown, Form, FormField, Input, Label, Select, Tab} from "semantic-ui-react";

export interface MileStoneFormProps {
    title: string;
}

const MileStoneForm: React.FC<MileStoneFormProps> = ({title}) => {

    const panes = [
        { menuItem: 'Setup', render: () => <Tab.Pane>
            <Form>
                <FormField>
                    <Label>Type</Label>
                    <Input value={"Bookkeeping"} />
                </FormField>
                <FormField>
                    <Label>Periodicity</Label>
                    <Input  value={"monthly"} />
                </FormField>
                <FormField>
                    <Label>Milestone</Label>
                    <Input value={title} placeholder='Define Milestone' />
                </FormField>
                <FormField>
                    <Label>Due Date</Label>
                    <Input value={"12.7.2023"}/>
                </FormField>
            </Form>
        </Tab.Pane> },
        { menuItem: 'Checkpoints', render: () => <Tab.Pane>
            </Tab.Pane> },
    ]
    return <Tab panes={panes} />
}

export default MileStoneForm;