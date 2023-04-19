import {createContext} from "react";

export class Status {
    public submitted: boolean;
    public description: string;
    public logMessage: string;

    constructor(submitted: boolean, description: string) {
        this.submitted = submitted;
        this.description = description;
        this.logMessage = "";
    }
}

interface CheckpointContextDefinition {
    cashbook : {
        export : Status
        import : Status
        check : Status
    }
    smartConnect : {
        checkCurrentStatus : Status
        checkOpenReceipts : Status
        check : Status
    }
    sevDesk : {
        monthClosed : Status
        importSmartConnect : Status
    }
    upload : {
        checkMonthSubmitted : Status
        check : Status
    }
    accounting : {
        reportingSent : Status
        elsterDone : Status
        invoiceSent : Status
        incoicePaid : Status
    }
}

export const CheckpointContext = createContext({
    cashbook: {
        export: new Status(false, "Wurde das Kassenbuch für die Periode exportiert?"),
        import: new Status(false, "Wurde das Kassenbuch für die Periode importiert?"),
        check: new Status(false, "Wurden die Belege für die Kasse geprüft"),
    },
    smartConnect: {
        checkCurrentStatus: new Status(false, "Wurden die Abrufe für die Periode durchgeführt?"),
        checkOpenReceipts: new Status(false, "Wurden die offengebliebenen Belege geprüft und verarbeitet?"),
        check: new Status(false, "Wurden die Belege für SmartConnect geprüft?"),
    },
    sevDesk: {
        monthClosed: new Status(false, "Ist in Sevdesk die Periode abgeschlossen?"),
        importSmartConnect: new Status(false, "Wurden die Belege in SmartConnect übertragen?"),
    },
    upload: {
        checkMonthSubmitted: new Status(false, "Wurden alle Belege für den Monat im Belegupload übertragen?"),
        check: new Status(false, "Wurden die über den Belegupload übertragenen Belege auf Korrektheit und Vollständigkeit geprüft?")
    },
    accounting: {
        reportingSent: new Status(false, "Wurde die Auswertungen an den Mandanten gesendet?"),
        elsterDone: new Status(false, "Wurde die Steuererklärung über Elster abgeschickt?"),
        invoiceSent: new Status(false, "Wurden die Rechnungen an den Mandanten versendet?"),
        incoicePaid: new Status(false, "Wurden die Rechnungen durch den Mandanten bezahlt?"),
    }
} as CheckpointContextDefinition);
