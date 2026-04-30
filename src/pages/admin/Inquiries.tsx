import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard, Users, FileText, Settings, LogOut, Menu, X,
  BarChart3, Mail, Bell, Search, Eye, Trash2, Reply, Phone, Calendar, Filter, ShieldCheck
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter
} from "@/components/ui/dialog";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MoreVertical } from "lucide-react";

const sidebarLinks = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/admin" },
  { label: "Users", icon: Users, href: "/admin/users" },
  { label: "Roles", icon: ShieldCheck, href: "/admin/roles" },
  { label: "Pages", icon: FileText, href: "/admin/pages" },
  { label: "Inquiries", icon: Mail, href: "/admin/inquiries" },
  { label: "Analytics", icon: BarChart3, href: "/admin/analytics" },
  { label: "Settings", icon: Settings, href: "/admin/settings" },
];

interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  service: string;
  message: string;
  date: string;
  status: "New" | "Replied" | "Closed";
}

const seed: Inquiry[] = [
  { id: "1", name: "Rahul Sharma", email: "rahul@example.com", phone: "+91 8750 299 299", subject: "Need a quote for new website", service: "Web Development", message: "Hi, we are looking to build a corporate website with 10 pages. Please share a quote and timeline.", date: "2026-04-30 10:24", status: "New" },
  { id: "2", name: "Priya Patel", email: "priya@example.com", phone: "+91 8750 299 299", subject: "Mobile App for Food Delivery", service: "Mobile App", message: "We need an iOS + Android app similar to Swiggy. Can we schedule a discovery call?", date: "2026-04-30 08:10", status: "Replied" },
  { id: "3", name: "Amit Kumar", email: "amit@example.com", phone: "+91 8750 299 299", subject: "SEO audit request", service: "SEO Services", message: "Our rankings have dropped. Please run a free SEO audit on our domain.", date: "2026-04-29 17:42", status: "New" },
  { id: "4", name: "Sarah Wilson", email: "sarah@example.com", phone: "+91 8750 299 299", subject: "AI chatbot for ecommerce", service: "AI Development", message: "Looking to integrate an AI customer support chatbot on our Shopify store.", date: "2026-04-28 14:05", status: "Closed" },
  { id: "5", name: "Kunal Mehta", email: "kunal@brandify.in", phone: "+91 8750 299 299", subject: "Hire React developer", service: "Hire Developer", message: "We need a senior React developer for 3 months on a dedicated basis.", date: "2026-04-27 11:30", status: "Replied" },
];

const Inquiries = () => {
  const { toast } = useToast();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [inquiries, setInquiries] = useState<Inquiry[]>(seed);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [serviceFilter, setServiceFilter] = useState("all");
  const [viewing, setViewing] = useState<Inquiry | null>(null);
  const [replying, setReplying] = useState<Inquiry | null>(null);
  const [replyText, setReplyText] = useState("");

  const services = Array.from(new Set(seed.map((i) => i.service)));

  const filtered = inquiries.filter((i) => {
    const matchSearch =
      i.name.toLowerCase().includes(search.toLowerCase()) ||
      i.email.toLowerCase().includes(search.toLowerCase()) ||
      i.subject.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || i.status === statusFilter;
    const matchService = serviceFilter === "all" || i.service === serviceFilter;
    return matchSearch && matchStatus && matchService;
  });

  const counts = {
    total: inquiries.length,
    new: inquiries.filter((i) => i.status === "New").length,
    replied: inquiries.filter((i) => i.status === "Replied").length,
    closed: inquiries.filter((i) => i.status === "Closed").length,
  };

  const updateStatus = (id: string, status: Inquiry["status"]) => {
    setInquiries((prev) => prev.map((i) => (i.id === id ? { ...i, status } : i)));
    toast({ title: "Status updated", description: `Inquiry marked as ${status}.` });
  };

  const deleteInquiry = (id: string) => {
    setInquiries((prev) => prev.filter((i) => i.id !== id));
    toast({ title: "Inquiry deleted" });
  };

  const sendReply = () => {
    if (!replying || !replyText.trim()) return;
    updateStatus(replying.id, "Replied");
    setReplying(null);
    setReplyText("");
    toast({ title: "Reply sent", description: "Your response has been recorded." });
  };

  const statusBadge = (s: Inquiry["status"]) => {
    const map = {
      New: "bg-accent/10 text-accent",
      Replied: "bg-blue-500/10 text-blue-600",
      Closed: "bg-muted text-muted-foreground",
    } as const;
    return <span className={`px-2 py-1 rounded-full text-xs font-medium ${map[s]}`}>{s}</span>;
  };

  return (
    <div className="min-h-screen bg-muted/30 flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? "w-64" : "w-0 lg:w-20"} bg-primary text-primary-foreground transition-all duration-300 flex flex-col fixed lg:relative h-screen z-40 overflow-hidden`}>
        <div className="p-4 flex items-center justify-between border-b border-white/10">
          {sidebarOpen && (
            <Link to="/" className="font-bold text-lg">DV <span className="text-accent">Admin</span></Link>
          )}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-primary-foreground/70 hover:text-primary-foreground">
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {sidebarLinks.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                item.label === "Inquiries"
                  ? "bg-accent text-accent-foreground"
                  : "text-primary-foreground/70 hover:bg-white/10 hover:text-primary-foreground"
              }`}
            >
              <item.icon size={18} />
              {sidebarOpen && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>
        <div className="p-3 border-t border-white/10">
          <Link to="/login" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-primary-foreground/70 hover:bg-white/10 hover:text-primary-foreground transition-colors">
            <LogOut size={18} />
            {sidebarOpen && <span>Logout</span>}
          </Link>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 min-h-screen">
        <header className="bg-background border-b border-border px-6 py-4 flex items-center justify-between sticky top-0 z-30">
          <div>
            <h1 className="text-xl font-bold text-primary">Contact Inquiries</h1>
            <p className="text-sm text-muted-foreground">Manage all messages submitted from the Contact Us page</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative text-muted-foreground hover:text-foreground">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-accent-foreground text-[10px] font-bold rounded-full flex items-center justify-center">{counts.new}</span>
            </button>
            <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">A</div>
          </div>
        </header>

        <div className="p-6">
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { label: "Total", value: counts.total, color: "bg-primary/10 text-primary" },
              { label: "New", value: counts.new, color: "bg-accent/10 text-accent" },
              { label: "Replied", value: counts.replied, color: "bg-blue-500/10 text-blue-600" },
              { label: "Closed", value: counts.closed, color: "bg-muted text-muted-foreground" },
            ].map((s) => (
              <Card key={s.label} className="border-border">
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{s.label}</p>
                    <p className="text-2xl font-bold text-primary mt-1">{s.value}</p>
                  </div>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${s.color}`}>
                    <Mail size={18} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Filters */}
          <Card className="border-border mb-6">
            <CardContent className="p-4 flex flex-col md:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                <Input
                  placeholder="Search by name, email or subject..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-44"><Filter size={14} className="mr-2" /><SelectValue placeholder="Status" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="New">New</SelectItem>
                  <SelectItem value="Replied">Replied</SelectItem>
                  <SelectItem value="Closed">Closed</SelectItem>
                </SelectContent>
              </Select>
              <Select value={serviceFilter} onValueChange={setServiceFilter}>
                <SelectTrigger className="w-full md:w-52"><SelectValue placeholder="Service" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Services</SelectItem>
                  {services.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Table */}
          <Card className="border-border">
            <CardHeader><CardTitle className="text-base">All Inquiries ({filtered.length})</CardTitle></CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-2 text-muted-foreground font-medium">Name</th>
                      <th className="text-left py-3 px-2 text-muted-foreground font-medium">Contact</th>
                      <th className="text-left py-3 px-2 text-muted-foreground font-medium">Subject</th>
                      <th className="text-left py-3 px-2 text-muted-foreground font-medium">Service</th>
                      <th className="text-left py-3 px-2 text-muted-foreground font-medium">Date</th>
                      <th className="text-left py-3 px-2 text-muted-foreground font-medium">Status</th>
                      <th className="text-right py-3 px-2 text-muted-foreground font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.length === 0 ? (
                      <tr><td colSpan={7} className="py-8 text-center text-muted-foreground">No inquiries found</td></tr>
                    ) : filtered.map((i) => (
                      <tr key={i.id} className="border-b border-border last:border-0 hover:bg-muted/50">
                        <td className="py-3 px-2 font-medium text-foreground">{i.name}</td>
                        <td className="py-3 px-2 text-muted-foreground">
                          <div>{i.email}</div>
                          <div className="text-xs">{i.phone}</div>
                        </td>
                        <td className="py-3 px-2 text-foreground max-w-xs truncate">{i.subject}</td>
                        <td className="py-3 px-2 text-muted-foreground">{i.service}</td>
                        <td className="py-3 px-2 text-muted-foreground whitespace-nowrap">{i.date}</td>
                        <td className="py-3 px-2">{statusBadge(i.status)}</td>
                        <td className="py-3 px-2 text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0"><MoreVertical size={16} /></Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => setViewing(i)}><Eye size={14} className="mr-2" /> View</DropdownMenuItem>
                              <DropdownMenuItem onClick={() => { setReplying(i); setReplyText(""); }}><Reply size={14} className="mr-2" /> Reply</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem onClick={() => updateStatus(i.id, "New")}>Mark as New</DropdownMenuItem>
                              <DropdownMenuItem onClick={() => updateStatus(i.id, "Replied")}>Mark as Replied</DropdownMenuItem>
                              <DropdownMenuItem onClick={() => updateStatus(i.id, "Closed")}>Mark as Closed</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem onClick={() => deleteInquiry(i.id)} className="text-destructive"><Trash2 size={14} className="mr-2" /> Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* View Dialog */}
      <Dialog open={!!viewing} onOpenChange={(o) => !o && setViewing(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Inquiry Details</DialogTitle>
            <DialogDescription>Full message submitted via Contact Us</DialogDescription>
          </DialogHeader>
          {viewing && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div><Label className="text-muted-foreground">Name</Label><p className="font-medium">{viewing.name}</p></div>
                <div><Label className="text-muted-foreground">Status</Label><div className="mt-1">{statusBadge(viewing.status)}</div></div>
                <div><Label className="text-muted-foreground">Email</Label><p className="font-medium flex items-center gap-1"><Mail size={14} /> {viewing.email}</p></div>
                <div><Label className="text-muted-foreground">Phone</Label><p className="font-medium flex items-center gap-1"><Phone size={14} /> {viewing.phone}</p></div>
                <div><Label className="text-muted-foreground">Service</Label><p className="font-medium">{viewing.service}</p></div>
                <div><Label className="text-muted-foreground">Date</Label><p className="font-medium flex items-center gap-1"><Calendar size={14} /> {viewing.date}</p></div>
              </div>
              <div>
                <Label className="text-muted-foreground">Subject</Label>
                <p className="font-medium">{viewing.subject}</p>
              </div>
              <div>
                <Label className="text-muted-foreground">Message</Label>
                <div className="mt-1 p-4 bg-muted/50 rounded-lg text-sm whitespace-pre-wrap">{viewing.message}</div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setViewing(null)}>Close</Button>
            <Button onClick={() => { if (viewing) { setReplying(viewing); setViewing(null); setReplyText(""); } }}>
              <Reply size={14} className="mr-2" /> Reply
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Reply Dialog */}
      <Dialog open={!!replying} onOpenChange={(o) => !o && setReplying(null)}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>Reply to {replying?.name}</DialogTitle>
            <DialogDescription>Send a response to {replying?.email}</DialogDescription>
          </DialogHeader>
          <div className="space-y-3">
            <div>
              <Label>Subject</Label>
              <Input defaultValue={`Re: ${replying?.subject ?? ""}`} />
            </div>
            <div>
              <Label>Message</Label>
              <Textarea rows={6} placeholder="Type your reply..." value={replyText} onChange={(e) => setReplyText(e.target.value)} />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setReplying(null)}>Cancel</Button>
            <Button onClick={sendReply} disabled={!replyText.trim()}>Send Reply</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Inquiries;
