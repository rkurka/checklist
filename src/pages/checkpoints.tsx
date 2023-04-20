import React, {useContext, useReducer} from "react";
import {CheckpointContext, Checkpoint, CheckpointContextDefinition} from "../components/CheckpointContext";
import {Checkbox, Table} from "semantic-ui-react";
import App from "../App";
import {stat} from "fs";

interface EntryProps {
    status :Checkpoint
    setCheckpoint: (cp: Checkpoint,submit: boolean, message: string) => void
}

const Entry : React.FC<EntryProps> = ({status,setCheckpoint}) => {
    return <Table.Body>
        <Table.Row>
            <Table.Cell collapsing>
                <Checkbox checked={status.submitted} onClick={(e) => {
                    setCheckpoint(status,!status.submitted,"changed to " + !status.submitted + " at " + new Date().toLocaleDateString())
                }} slider />
            </Table.Cell>
            <Table.Cell>{status.description}</Table.Cell>
            <Table.Cell>{status.logMessage.map((value) => <p>{value}</p>)}</Table.Cell>
        </Table.Row>
    </Table.Body>
}

interface CheckpointState {
    context: CheckpointContextDefinition
}

type CheckpointAction = {
    type: "toggleCheckpoint",
    payload: {
        checkpoint: Checkpoint
        newStatus: boolean
        message: string
    }
}

const Checkpoints = () => {
    const ctx = useContext(CheckpointContext)
    const [cpState, dispatch] = useReducer(
        (state: CheckpointState, action: CheckpointAction) => {
            switch (action.type) {
                case "toggleCheckpoint":
                    if (action.payload.checkpoint.submitted !== action.payload.newStatus) {
                        action.payload.checkpoint.submitted = action.payload.newStatus
                        action.payload.checkpoint.logMessage.push(action.payload.message)
                    }
                    return {...state}
                default:
                    return state
            }
        },
        {context : ctx});

    const switcher = (cp:Checkpoint,newState:boolean,msg:string) => dispatch({type: "toggleCheckpoint", payload: {
        checkpoint: cp,
        newStatus: newState,
        message: msg
    }});

    return <>
        <h1>Mandantenapplikationen</h1>

        <h2>SevDesk</h2>
        <Table celled compact definition>
            <Table.Header fullWidth>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell>App</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Entry status={cpState.context.sevDesk.monthClosed} setCheckpoint={switcher}/>
            <Entry status={cpState.context.sevDesk.importSmartConnect} setCheckpoint={switcher}/>
        </Table>

        <h2>Kasse</h2>
        <Table celled compact definition>
            <Table.Header fullWidth>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell>App</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Entry status={cpState.context.cashbook.import} setCheckpoint={switcher} />
            <Entry status={cpState.context.cashbook.import} setCheckpoint={switcher}/>
            <Entry status={cpState.context.cashbook.check} setCheckpoint={switcher}/>
        </Table>

        <h2>Smart Connect</h2>
        <Table celled compact definition>
            <Table.Header fullWidth>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell>App</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Entry status={cpState.context.smartConnect.checkCurrentStatus} setCheckpoint={switcher}/>
            <Entry status={cpState.context.smartConnect.checkOpenReceipts} setCheckpoint={switcher}/>
            <Entry status={cpState.context.smartConnect.check} setCheckpoint={switcher}/>
        </Table>

        <h2>Upload</h2>
        <Table celled compact definition>
            <Table.Header fullWidth>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell>App</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Entry status={cpState.context.upload.checkMonthSubmitted} setCheckpoint={switcher}/>
            <Entry status={cpState.context.upload.check} setCheckpoint={switcher}/>
        </Table>

        <h1>Finanzbuchhaltung</h1>
        <Table celled compact definition>
            <Table.Header fullWidth>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell>App</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Entry status={cpState.context.accounting.reportingSent} setCheckpoint={switcher}/>
            <Entry status={cpState.context.accounting.elsterDone} setCheckpoint={switcher}/>
            <Entry status={cpState.context.accounting.invoiceSent} setCheckpoint={switcher}/>
            <Entry status={cpState.context.accounting.invoicePaid} setCheckpoint={switcher}/>
        </Table>
    </>
}

export default Checkpoints;