import PromotionServiceTemplate from "@/components/PromotionServiceTemplate";
import Seo from "@/components/Seo";
import { Inbox, Server, ShieldCheck, Calendar, Download, RefreshCw } from "lucide-react";

const ImapBackup = () => (
  <>
    <Seo
      title="IMAP Backup Tool — Backup Any IMAP Mailbox to PST, MBOX, EML | Dharam Vir Infotech"
      description="Backup Gmail, Yahoo, Office 365, Zoho or cPanel IMAP mailboxes to PST, MBOX, EML, MSG or PDF. Scheduled, incremental and TLS-secured backups."
      path="/software/imap-backup-tool"
      image="/og/imap-backup.jpg"
    />
    <PromotionServiceTemplate
      title="IMAP Backup Tool"
      subtitle="Backup any IMAP mailbox — Gmail, Yahoo, Office 365, Zoho, cPanel and more — to your local drive."
      breadcrumb="IMAP Backup"
      features={[
        { icon: Server, title: "Universal IMAP Support", desc: "Works with any IMAP server: Gmail, Yahoo, Office 365, Zoho, hosted cPanel mail." },
        { icon: Download, title: "Multiple Formats", desc: "Export to PST, MBOX, EML, MSG or PDF — your choice." },
        { icon: ShieldCheck, title: "Bank-Grade Security", desc: "TLS/SSL connections with no credentials stored on disk." },
        { icon: Calendar, title: "Scheduled Backups", desc: "Run automatic daily, weekly or monthly backup jobs." },
        { icon: RefreshCw, title: "Incremental Sync", desc: "Only new emails are downloaded after the first backup." },
        { icon: Inbox, title: "Selective Folders", desc: "Pick the exact folders, labels or date ranges to back up." },
      ]}
      benefits={[
        "Bulk backup unlimited IMAP accounts from a single console",
        "Preserves folder hierarchy, labels, read/unread state",
        "Pauses & resumes safely on network interruptions",
        "Detailed log report for every backup session",
        "Free trial backs up the first 100 emails per folder",
        "Compatible with Windows 10, 11 and Windows Server",
      ]}
      process={[
        { step: "1", title: "Add Account", desc: "Enter IMAP credentials or use OAuth for Gmail/O365." },
        { step: "2", title: "Pick Folders", desc: "Select folders and apply optional date filters." },
        { step: "3", title: "Choose Format", desc: "Select PST, MBOX, EML, MSG or PDF output." },
        { step: "4", title: "Backup", desc: "Run now or schedule for automatic recurring backups." },
      ]}
    />
  </>
);

export default ImapBackup;
