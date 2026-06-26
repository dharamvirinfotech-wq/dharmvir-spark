import PromotionServiceTemplate from "@/components/PromotionServiceTemplate";
import Seo from "@/components/Seo";
import { Unlock, FileText, Shuffle, Shield, Zap, Download } from "lucide-react";

const PdfUnlocker = () => (
  <>
    <Seo
      title="PDF Unlocker — Remove PDF Restrictions, Merge & Convert | Dharam Vir Infotech"
      description="Unlock password-protected PDFs and remove print, copy and edit restrictions. Batch process, merge, split and convert PDFs offline on Windows."
      path="/software/pdf-unlocker"
      image="/og/pdf-unlocker.jpg"
    />
    <PromotionServiceTemplate
    title="PDF Unlocker"
    subtitle="Unlock, merge & convert protected PDF files in seconds — no password? No problem."
    breadcrumb="PDF Unlocker"
    features={[
      { icon: Unlock, title: "Remove Restrictions", desc: "Strip print, copy, edit and form-filling restrictions from secured PDFs." },
      { icon: Shuffle, title: "Merge & Split", desc: "Combine multiple PDFs or split large documents into smaller files." },
      { icon: FileText, title: "Convert Formats", desc: "Export unlocked PDFs to Word, Excel, image and plain text formats." },
      { icon: Shield, title: "Secure Processing", desc: "All processing happens locally — your files never leave your machine." },
      { icon: Zap, title: "Batch Processing", desc: "Unlock hundreds of PDFs in a single run with bulk-mode support." },
      { icon: Download, title: "Original Quality", desc: "Output preserves the layout, fonts, images and hyperlinks exactly." },
    ]}
    benefits={[
      "Works with PDFs created in Adobe Acrobat, Word, Chrome and more",
      "Supports 40-bit, 128-bit & 256-bit AES encrypted PDFs",
      "Standalone Windows utility — no internet required",
      "Lifetime license with free updates",
      "Free demo unlocks first 3 pages of every file",
      "24/7 priority support included with every license",
    ]}
    process={[
      { step: "1", title: "Install", desc: "Download & install on Windows in under a minute." },
      { step: "2", title: "Add Files", desc: "Drag-drop single files or whole folders." },
      { step: "3", title: "Unlock", desc: "Click Unlock — restrictions are removed instantly." },
      { step: "4", title: "Save", desc: "Save the unrestricted PDFs to any location." },
    ]}
  />
);

export default PdfUnlocker;
