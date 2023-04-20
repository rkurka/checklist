import {createContext} from "react";

export class Checkpoint {
    public submitted: boolean;
    public description: string;
    public logMessage: string[];

    constructor(submitted: boolean, description: string) {
        this.submitted = submitted;
        this.description = description;
        this.logMessage = [];
    }
}

export interface CheckpointContextDefinition {
    cashbook : {
        export : Checkpoint
        import : Checkpoint
        check : Checkpoint
    }
    smartConnect : {
        checkCurrentStatus : Checkpoint
        checkOpenReceipts : Checkpoint
        check : Checkpoint
    }
    sevDesk : {
        monthClosed : Checkpoint
        importSmartConnect : Checkpoint
    }
    upload : {
        checkMonthSubmitted : Checkpoint
        check : Checkpoint
    }
    accounting : {
        reportingSent : Checkpoint
        elsterDone : Checkpoint
        invoiceSent : Checkpoint
        invoicePaid : Checkpoint
    }
}

export const CheckpointContext = createContext({
    cashbook: {
        export: new Checkpoint(false, "Wurde das Kassenbuch für die Periode exportiert?"),
        import: new Checkpoint(false, "Wurde das Kassenbuch für die Periode importiert?"),
        check: new Checkpoint(false, "Wurden die Belege für die Kasse geprüft"),
    },
    smartConnect: {
        checkCurrentStatus: new Checkpoint(true, "Wurden die Abrufe für die Periode durchgeführt?"),
        checkOpenReceipts: new Checkpoint(true, "Wurden die offengebliebenen Belege geprüft und verarbeitet?"),
        check: new Checkpoint(true, "Wurden die Belege für SmartConnect geprüft?"),
    },
    sevDesk: {
        monthClosed: new Checkpoint(false, "Ist in Sevdesk die Periode abgeschlossen?"),
        importSmartConnect: new Checkpoint(false, "Wurden die Belege in SmartConnect übertragen?"),
    },
    upload: {
        checkMonthSubmitted: new Checkpoint(false, "Wurden alle Belege für den Monat im Belegupload übertragen?"),
        check: new Checkpoint(false, "Wurden die über den Belegupload übertragenen Belege auf Korrektheit und Vollständigkeit geprüft?")
    },
    accounting: {
        reportingSent: new Checkpoint(false, "Wurde die Auswertungen an den Mandanten gesendet?"),
        elsterDone: new Checkpoint(false, "Wurde die Steuererklärung über Elster abgeschickt?"),
        invoiceSent: new Checkpoint(false, "Wurden die Rechnungen an den Mandanten versendet?"),
        invoicePaid: new Checkpoint(false, "Wurden die Rechnungen durch den Mandanten bezahlt?"),
    }
} as CheckpointContextDefinition);
