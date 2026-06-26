import PromotionServiceTemplate from "@/components/PromotionServiceTemplate";
import { Hash, Scale, Layers, Settings, FileSignature, FolderOpen } from "lucide-react";

const PdfBatesNumbering = () => (
  <PromotionServiceTemplate
    title="PDF Bates Numbering"
    subtitle="Add Bates stamps to PDFs for legal, e-discovery and document review workflows."
    breadcrumb="PDF Bates Numbering"
    features={[
      { icon: Hash, title: "Custom Bates Stamps", desc: "Set prefix, suffix, starting number, padding and step value." },
      { icon: Scale, title: "Legal-Grade Output", desc: "Court-ready stamps that meet e-discovery and litigation standards." },
      { icon: Layers, title: "Batch Stamping", desc: "Apply continuous numbering across thousands of PDFs at once." },
      { icon: Settings, title: "Position Control", desc: "Place stamps on any corner with custom font, size and color." },
      { icon: FileSignature, title: "Add Watermarks", desc: "Combine Bates numbering with confidential watermarks." },
      { icon: FolderOpen, title: "Folder Support", desc: "Process entire case folders while preserving structure." },
    ]}
    benefits={[
      "Trusted by law firms, paralegals and e-discovery teams",
      "Preserves original PDF metadata and bookmarks",
      "Generates a CSV index of stamped files for case management",
      "Works on encrypted and digitally signed PDFs",
      "Undo / reset stamps anytime without altering originals",
      "Compliant with FRCP and US court e-filing requirements",
    ]}
    process={[
      { step: "1", title: "Load Cases", desc: "Add PDF case files or full folders to the queue." },
      { step: "2", title: "Configure", desc: "Set prefix, start number, font and stamp position." },
      { step: "3", title: "Preview", desc: "Live-preview the stamp before applying." },
      { step: "4", title: "Stamp & Export", desc: "Apply stamps and export with audit-ready file index." },
    ]}
  />
);

export default PdfBatesNumbering;
