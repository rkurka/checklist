import React, {useContext} from 'react'
import { Button, Checkbox, Table } from 'semantic-ui-react'
import {OCContext} from "../components/OneClickContext";

const OneClick = () => {
    const ocCtx = useContext(OCContext)

    const [cashbook, setCashbook] = React.useState(ocCtx.cashbook)
    const [smartConnect, setSmartConnect] = React.useState(ocCtx.smartConnect)
    const [sevDesk, setSevDesk] = React.useState(ocCtx.sevDesk)
    const [upload, setUpload] = React.useState(ocCtx.upload)

    const handleCashbook = () => setCashbook(!cashbook)
    const handleSmartConnect = () => setSmartConnect(!smartConnect)
    const handleSevDesk = () => setSevDesk(!sevDesk)
    const handleUpload = () => setUpload(!upload)
    const handleSave = () => {
        ocCtx.sevDesk = sevDesk;
        ocCtx.cashbook = cashbook;
        ocCtx.upload = upload;
        ocCtx.smartConnect = smartConnect;
    };

    return (
    <>
    <Button primary onClick={handleSave}>Konfigurator übernehmen</Button>
    <Table celled compact definition>
        <Table.Header fullWidth>
            <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell>App</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            <Table.Row>
                <Table.Cell collapsing>
                    <Checkbox checked={cashbook} onChange={handleCashbook} slider />
                </Table.Cell>
                <Table.Cell>Kassenbuch</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell collapsing>
                    <Checkbox checked={smartConnect} onChange={handleSmartConnect} slider />
                </Table.Cell>
                <Table.Cell>Smart Connect</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell collapsing>
                    <Checkbox checked={sevDesk} onChange={handleSevDesk} slider />
                </Table.Cell>
                <Table.Cell>SevDesk</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell collapsing>
                    <Checkbox checked={upload} onChange={handleUpload} slider />
                </Table.Cell>
                <Table.Cell>Belegupload</Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table>
    </>
  );
};

export default OneClick;

