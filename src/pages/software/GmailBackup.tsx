import PromotionServiceTemplate from "@/components/PromotionServiceTemplate";
import { HardDrive, Mail, Lock, FileArchive, Filter, Cloud } from "lucide-react";

const GmailBackup = () => (
  <PromotionServiceTemplate
    title="Gmail Backup Tool"
    subtitle="Backup Gmail mailboxes to PST, PDF, MBOX, EML & MSG — including Google Workspace accounts."
    breadcrumb="Gmail Backup"
    features={[
      { icon: HardDrive, title: "Multiple Formats", desc: "Save Gmail emails as PST, PDF, MBOX, EML or MSG." },
      { icon: Mail, title: "Labels Preserved", desc: "Maintains Gmail labels as folder structures in the backup." },
      { icon: Lock, title: "OAuth Secured", desc: "Sign in with Google — credentials never touch the app." },
      { icon: FileArchive, title: "Backup Attachments", desc: "Includes all inline images and email attachments." },
      { icon: Filter, title: "Smart Filters", desc: "Filter by label, sender, subject or date range." },
      { icon: Cloud, title: "Workspace Ready", desc: "Backup multiple Google Workspace users from one console." },
    ]}
    benefits={[
      "Recommended by IT admins for offboarding and compliance backups",
      "Auto-pause on Google rate limits with smart retry logic",
      "Generates per-account backup summary reports",
      "Free trial backs up 100 emails per label",
      "One-time payment, lifetime license, free updates",
      "Compatible with Gmail, Google Workspace & G Suite Legacy",
    ]}
    process={[
      { step: "1", title: "Sign In", desc: "Authorize Gmail access via secure Google OAuth." },
      { step: "2", title: "Select Labels", desc: "Pick the labels and apply optional date filters." },
      { step: "3", title: "Choose Format", desc: "Export to PST, PDF, MBOX, EML or MSG." },
      { step: "4", title: "Download", desc: "Run the backup and save to any local or network drive." },
    ]}
  />
);

export default GmailBackup;
