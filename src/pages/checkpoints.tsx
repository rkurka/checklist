import React, {useContext, useEffect} from "react";
import {CheckpointContext, Status} from "../components/CheckpointContext";
import {Checkbox, Table} from "semantic-ui-react";
import {TaskProps} from "../components/Task";



class EntryProps {
    status :Status

    constructor(status: Status) {
        this.status = status
    }
}

const Entry : React.FC<EntryProps> = ({status}) => {
    return <Table.Body>
        <Table.Row>
            <Table.Cell collapsing>
                <Checkbox checked={status.submitted}  slider />
            </Table.Cell>
            <Table.Cell>{status.description}</Table.Cell>
            <Table.Cell>{status.logMessage}</Table.Cell>
        </Table.Row>
    </Table.Body>
}

const Checkpoints = () => {
    const ctx = useContext(CheckpointContext)

    const handleCashbook = () => ctx.cashbook.check.submitted = !ctx.cashbook.check.submitted;

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
            <Entry status={ctx.sevDesk.monthClosed} />
            <Entry status={ctx.sevDesk.importSmartConnect} />
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
            <Entry status={ctx.cashbook.export} />
            <Entry status={ctx.cashbook.import} />
            <Entry status={ctx.cashbook.check} />
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
            <Entry status={ctx.smartConnect.checkCurrentStatus} />
            <Entry status={ctx.smartConnect.checkOpenReceipts} />
            <Entry status={ctx.smartConnect.check} />
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
            <Entry status={ctx.upload.checkMonthSubmitted} />
            <Entry status={ctx.upload.check} />
        </Table>

        <h1>Finanzbuchhaltung</h1>
    </>
}

export default Checkpoints;