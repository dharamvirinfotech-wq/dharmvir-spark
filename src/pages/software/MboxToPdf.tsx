import PromotionServiceTemplate from "@/components/PromotionServiceTemplate";
import { Mail, FileText, Paperclip, Filter, Archive, Search } from "lucide-react";

const MboxToPdf = () => (
  <PromotionServiceTemplate
    title="MBox to PDF Converter"
    subtitle="Convert MBOX email archives from Thunderbird, Apple Mail and more into court-ready PDFs."
    breadcrumb="MBox to PDF"
    features={[
      { icon: Mail, title: "All MBOX Clients", desc: "Supports Thunderbird, Apple Mail, Entourage, Eudora, SeaMonkey & more." },
      { icon: FileText, title: "PDF/A Output", desc: "Generate archival-grade PDFs with full email headers preserved." },
      { icon: Paperclip, title: "Attachments Included", desc: "Embed attachments inside PDFs or export to separate folders." },
      { icon: Filter, title: "Date & Sender Filter", desc: "Convert only the emails you need using flexible filters." },
      { icon: Archive, title: "Bulk Conversion", desc: "Process multiple MBOX files in a single batch run." },
      { icon: Search, title: "Searchable PDFs", desc: "Output PDFs are fully text-searchable and indexable." },
    ]}
    benefits={[
      "Maintains original email formatting, inline images and signatures",
      "Naming convention: subject, date, sender — fully customizable",
      "Splits large MBOX files automatically for faster processing",
      "Free demo converts the first 25 emails per folder",
      "No mail client installation required",
      "Used by legal, compliance and migration teams worldwide",
    ]}
    process={[
      { step: "1", title: "Add MBOX", desc: "Browse or drag MBOX files into the tool." },
      { step: "2", title: "Filter", desc: "Apply date range, sender or keyword filters." },
      { step: "3", title: "Configure", desc: "Choose naming pattern and attachment handling." },
      { step: "4", title: "Convert", desc: "Export structured PDFs to your destination folder." },
    ]}
  />
);

export default MboxToPdf;
