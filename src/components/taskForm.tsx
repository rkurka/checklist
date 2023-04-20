import React from "react";
import {Checkbox, Feed, Form, FormField, Input, Label, Radio, Segment, Tab, TextArea} from "semantic-ui-react";
import {Checkpoint} from "./CheckpointContext";

export interface TaskFormProps {
    title: string;
    checkpoints:Checkpoint[]
}


const TaskForm: React.FC<TaskFormProps> = ({title,checkpoints}) => {

    const panes = [
        { menuItem: 'Status', render: () => <Tab.Pane>
                <Form>
                    <FormField>
                        <Label>Task</Label>
                        <Input value={title} placeholder='Define Task' />
                    </FormField>
                    <FormField>
                        <Label>Due Date</Label>
                        <Input value={"12.7.2023"}/>
                    </FormField>
                    <FormField>
                        <Label>Infotext</Label>
                        <TextArea placeholder='Infotext' style={{ minHeight: 300 }} />
                    </FormField>
                </Form>
            </Tab.Pane> },
        { menuItem: 'Setup', render: () => <Tab.Pane>
                <Form>
                    <FormField>
                        <Label>Task</Label>
                        <Input value={title} placeholder='Define Task' />
                    </FormField>
                    <FormField>
                        <Label>Due Date</Label>
                        <Input value={"12.7.2023"}/>
                    </FormField>
                    <FormField>
                        <Label>Verantwortlich</Label>
                        <Segment stacked>
                            <FormField>
                            <Checkbox
                                radio
                                label='Mandant'
                                checked={true}
                            />
                            </FormField>
                            <FormField>
                            <Checkbox
                                radio
                                label='Berater'
                                checked={false}
                            />
                            </FormField>
                        </Segment>
                    </FormField>
                </Form>
            </Tab.Pane> },
        { menuItem: 'History', render: () => <Tab.Pane>
                <Feed>
                    {checkpoints.map((check) => <>
                        {
                            check.logMessage.map((msg) => <Feed.Event>
                                    <Feed.Label icon='pencil' />
                                    <Feed.Content
                                        date={msg}
                                        summary={"an: " + check.description}
                                    />
                                </Feed.Event>)
                        }
                        </>)
                    }
                </Feed>
            </Tab.Pane> },
    ]
    return <Tab panes={panes} />
}

export default TaskForm;