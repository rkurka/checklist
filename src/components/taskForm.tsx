import React from "react";
import {Form} from "semantic-ui-react";

export interface TaskFormProps {
    title: string;
}


const TaskForm: React.FC<TaskFormProps> = ({title}) => {
    return <>
        <Form>
            <Form.Field>
                <label>Task</label>
                <input value={title} placeholder='Define Task' />
            </Form.Field>
        </Form>

    </>
}

export default TaskForm;