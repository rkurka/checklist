import React from "react";
import {Button, Checkbox, Form} from "semantic-ui-react";


export interface MileStoneFormProps {
    title: string;
}

const MileStoneForm: React.FC<MileStoneFormProps> = ({title}) => {
    return <>
        <Form>
            <Form.Field>
                <label>Milestone</label>
                <input value={title} placeholder='Define Milestone' />
            </Form.Field>
        </Form>
    </>
}

export default MileStoneForm;