import { useState } from "react";
import {
  Mail, Bell, Plus, Search, Edit, Trash2, MoreVertical, Code2, Star, MapPin, DollarSign
} from "lucide-react";
import Sidebar from "@/components/Sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

interface Developer {
  id: number;
  slug: string;
  name: string;
  role: string;
  experience: string;
  hourlyRate: string;
  rating: number;
  location: string;
  avatar: string;
  skills: string[];
  bio: string;
  languages: string[];
  availability: string;
  projectsCompleted: number;
  certifications: string[];
  education: string;
  status: "Active" | "Inactive";
}

const initialDevelopers: Developer[] = [
  {
    id: 1, slug: "rahul-sharma", name: "Rahul Sharma", role: "Senior Full Stack Developer",
    experience: "8+ Years", hourlyRate: "$25-35", rating: 4.9, location: "Bangalore, India", avatar: "RS",
    skills: ["Team Lead", "Architecture", "Mentoring", "Code Review", "System Design"],
    bio: "Passionate senior developer with 8+ years of experience building scalable applications.",
    languages: ["English (Fluent)", "Hindi (Native)"], availability: "Full-time / Part-time",
    projectsCompleted: 54, certifications: ["AWS Certified Solutions Architect", "Google Cloud Professional"],
    education: "B.Tech Computer Science, IIT Delhi", status: "Active",
  },
  {
    id: 2, slug: "priya-patel", name: "Priya Patel", role: "Frontend Developer",
    experience: "6+ Years", hourlyRate: "$20-30", rating: 4.8, location: "Pune, India", avatar: "PP",
    skills: ["UI/UX", "Performance", "Testing", "Responsive Design", "Accessibility"],
    bio: "Detail-oriented developer specializing in beautiful, performant user interfaces.",
    languages: ["English (Fluent)", "Hindi (Native)", "Gujarati"], availability: "Full-time",
    projectsCompleted: 42, certifications: ["Meta Front-End Developer Certificate"],
    education: "M.Tech Software Engineering, BITS Pilani", status: "Active",
  },
  {
    id: 3, slug: "amit-kumar", name: "Amit Kumar", role: "Backend Developer",
    experience: "5+ Years", hourlyRate: "$18-25", rating: 4.7, location: "Hyderabad, India", avatar: "AK",
    skills: ["API Design", "Database", "Security", "Microservices", "Docker"],
    bio: "Backend-focused developer building robust APIs and optimizing databases.",
    languages: ["English (Fluent)", "Hindi (Native)", "Telugu"], availability: "Full-time / Contract",
    projectsCompleted: 38, certifications: ["Certified Kubernetes Administrator"],
    education: "B.Tech IT, IIIT Hyderabad", status: "Active",
  },
];

const emptyForm = {
  slug: "", name: "", role: "Developer", experience: "", hourlyRate: "", rating: 4.5,
  location: "", avatar: "", skills: "", bio: "", languages: "", availability: "Full-time",
  projectsCompleted: 0, certifications: "", education: "", status: "Active" as "Active" | "Inactive",
};

const slugify = (s: string) =>
  s.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");

const initialsOf = (s: string) =>
  s.trim().split(/\s+/).map((p) => p[0]).join("").slice(0, 2).toUpperCase();

const AdminDevelopers = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [developers, setDevelopers] = useState<Developer[]>(initialDevelopers);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [formData, setFormData] = useState(emptyForm);
  const [editing, setEditing] = useState<Developer | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();

  const filtered = developers.filter((d) => {
    const matchSearch =
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.skills.join(" ").toLowerCase().includes(searchQuery.toLowerCase());
    const matchStatus = filterStatus === "all" || d.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const handleCreate = () => {
    setEditing(null);
    setFormData(emptyForm);
    setDialogOpen(true);
  };

  const handleEdit = (d: Developer) => {
    setEditing(d);
    setFormData({
      slug: d.slug, name: d.name, role: d.role, experience: d.experience,
      hourlyRate: d.hourlyRate, rating: d.rating, location: d.location, avatar: d.avatar,
      skills: d.skills.join(", "), bio: d.bio, languages: d.languages.join(", "),
      availability: d.availability, projectsCompleted: d.projectsCompleted,
      certifications: d.certifications.join(", "), education: d.education, status: d.status,
    });
    setDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    setDevelopers(developers.filter((d) => d.id !== id));
    toast({ title: "Developer deleted", description: "Profile has been removed." });
  };

  const toList = (s: string) => s.split(",").map((x) => x.trim()).filter(Boolean);

  const handleSubmit = () => {
    if (!formData.name || !formData.role || !formData.experience) {
      toast({ title: "Error", description: "Name, role and experience are required.", variant: "destructive" });
      return;
    }
    const slug = formData.slug || slugify(formData.name);
    const avatar = formData.avatar || initialsOf(formData.name);

    if (editing) {
      setDevelopers(developers.map((d) => d.id === editing.id ? {
        ...d, slug, avatar,
        name: formData.name, role: formData.role, experience: formData.experience,
        hourlyRate: formData.hourlyRate, rating: Number(formData.rating) || 0,
        location: formData.location,
        skills: toList(formData.skills), bio: formData.bio,
        languages: toList(formData.languages), availability: formData.availability,
        projectsCompleted: Number(formData.projectsCompleted) || 0,
        certifications: toList(formData.certifications),
        education: formData.education, status: formData.status,
      } : d));
      toast({ title: "Developer updated", description: `${formData.name} has been updated.` });
    } else {
      const newDev: Developer = {
        id: Date.now(), slug, avatar,
        name: formData.name, role: formData.role, experience: formData.experience,
        hourlyRate: formData.hourlyRate, rating: Number(formData.rating) || 0,
        location: formData.location,
        skills: toList(formData.skills), bio: formData.bio,
        languages: toList(formData.languages), availability: formData.availability,
        projectsCompleted: Number(formData.projectsCompleted) || 0,
        certifications: toList(formData.certifications),
        education: formData.education, status: formData.status,
      };
      setDevelopers([newDev, ...developers]);
      toast({ title: "Developer added", description: `${formData.name} has been created.` });
    }
    setDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-muted/30 flex">
      {/* Sidebar */}
      <Sidebar 
        open={sidebarOpen} 
        onToggle={() => setSidebarOpen(!sidebarOpen)} 
      />

      {/* Main */}
      <main className="flex-1 min-h-screen">
        <header className="bg-background border-b border-border px-6 py-4 flex items-center justify-between sticky top-0 z-30">
          <div>
            <h1 className="text-xl font-bold text-primary">Hire Developer Profiles</h1>
            <p className="text-sm text-muted-foreground">Manage developer profiles shown on the Hire Developer pages</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative text-muted-foreground hover:text-foreground"><Bell size={20} /><span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-accent-foreground text-[10px] font-bold rounded-full flex items-center justify-center">3</span></button>
            <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">A</div>
          </div>
        </header>

        <div className="p-6">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 mb-6">
            <Card className="border-border"><CardContent className="p-5"><p className="text-sm text-muted-foreground">Total Developers</p><p className="text-2xl font-bold text-primary mt-1">{developers.length}</p></CardContent></Card>
            <Card className="border-border"><CardContent className="p-5"><p className="text-sm text-muted-foreground">Active</p><p className="text-2xl font-bold text-green-600 mt-1">{developers.filter(d => d.status === "Active").length}</p></CardContent></Card>
            <Card className="border-border"><CardContent className="p-5"><p className="text-sm text-muted-foreground">Avg. Rating</p><p className="text-2xl font-bold text-accent mt-1">{developers.length ? (developers.reduce((s, d) => s + d.rating, 0) / developers.length).toFixed(1) : "0.0"}</p></CardContent></Card>
            <Card className="border-border"><CardContent className="p-5"><p className="text-sm text-muted-foreground">Total Projects</p><p className="text-2xl font-bold text-primary mt-1">{developers.reduce((s, d) => s + d.projectsCompleted, 0)}</p></CardContent></Card>
          </div>

          {/* Toolbar */}
          <Card className="border-border mb-6">
            <CardContent className="p-4 flex flex-col sm:flex-row gap-3 items-center justify-between">
              <div className="flex gap-3 flex-1 w-full sm:w-auto">
                <div className="relative flex-1 sm:max-w-xs">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                  <Input placeholder="Search by name, role, skills..." className="pl-9" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                </div>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-36"><SelectValue placeholder="Status" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={handleCreate} className="gap-2"><Plus size={16} /> Add Developer</Button>
            </CardContent>
          </Card>

          {/* Table */}
          <Card className="border-border">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="text-left py-3 px-4 text-muted-foreground font-medium">Developer</th>
                      <th className="text-left py-3 px-4 text-muted-foreground font-medium">Role</th>
                      <th className="text-left py-3 px-4 text-muted-foreground font-medium">Experience</th>
                      <th className="text-left py-3 px-4 text-muted-foreground font-medium">Rate</th>
                      <th className="text-left py-3 px-4 text-muted-foreground font-medium">Rating</th>
                      <th className="text-left py-3 px-4 text-muted-foreground font-medium">Location</th>
                      <th className="text-left py-3 px-4 text-muted-foreground font-medium">Projects</th>
                      <th className="text-left py-3 px-4 text-muted-foreground font-medium">Status</th>
                      <th className="text-right py-3 px-4 text-muted-foreground font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((d) => (
                      <tr key={d.id} className="border-b border-border last:border-0 hover:bg-muted/30">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-accent/10 text-accent font-bold flex items-center justify-center text-xs">{d.avatar}</div>
                            <div>
                              <p className="font-medium text-foreground">{d.name}</p>
                              <p className="text-xs text-muted-foreground">/{d.slug}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-muted-foreground">{d.role}</td>
                        <td className="py-3 px-4 text-muted-foreground">{d.experience}</td>
                        <td className="py-3 px-4 text-muted-foreground inline-flex items-center gap-1"><DollarSign size={12} />{d.hourlyRate}</td>
                        <td className="py-3 px-4"><span className="inline-flex items-center gap-1 text-xs font-medium"><Star size={12} className="fill-accent text-accent" />{d.rating}</span></td>
                        <td className="py-3 px-4 text-muted-foreground"><span className="inline-flex items-center gap-1"><MapPin size={12} />{d.location}</span></td>
                        <td className="py-3 px-4 text-muted-foreground">{d.projectsCompleted}+</td>
                        <td className="py-3 px-4"><span className={`px-2 py-1 rounded-full text-xs font-medium ${d.status === "Active" ? "bg-green-500/10 text-green-600" : "bg-muted text-muted-foreground"}`}>{d.status}</span></td>
                        <td className="py-3 px-4 text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild><Button variant="ghost" size="icon" className="h-8 w-8"><MoreVertical size={16} /></Button></DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => handleEdit(d)} className="gap-2"><Edit size={14} /> Edit</DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleDelete(d.id)} className="gap-2 text-destructive"><Trash2 size={14} /> Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </tr>
                    ))}
                    {filtered.length === 0 && (
                      <tr><td colSpan={9} className="py-12 text-center text-muted-foreground">No developers found.</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editing ? "Edit Developer Profile" : "Add New Developer"}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Full Name *</Label>
                <Input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Rahul Sharma" />
              </div>
              <div className="space-y-2">
                <Label>Slug (URL)</Label>
                <Input value={formData.slug} onChange={(e) => setFormData({ ...formData, slug: e.target.value })} placeholder="auto-generated from name" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Role / Title *</Label>
                <Input value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} placeholder="Senior React Developer" />
              </div>
              <div className="space-y-2">
                <Label>Experience *</Label>
                <Input value={formData.experience} onChange={(e) => setFormData({ ...formData, experience: e.target.value })} placeholder="5+ Years" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Hourly Rate</Label>
                <Input value={formData.hourlyRate} onChange={(e) => setFormData({ ...formData, hourlyRate: e.target.value })} placeholder="$20-30" />
              </div>
              <div className="space-y-2">
                <Label>Rating (0-5)</Label>
                <Input type="number" step="0.1" min="0" max="5" value={formData.rating} onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })} />
              </div>
              <div className="space-y-2">
                <Label>Projects Completed</Label>
                <Input type="number" min="0" value={formData.projectsCompleted} onChange={(e) => setFormData({ ...formData, projectsCompleted: Number(e.target.value) })} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Location</Label>
                <Input value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} placeholder="Bangalore, India" />
              </div>
              <div className="space-y-2">
                <Label>Avatar Initials</Label>
                <Input maxLength={3} value={formData.avatar} onChange={(e) => setFormData({ ...formData, avatar: e.target.value.toUpperCase() })} placeholder="auto from name" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Bio</Label>
              <Textarea rows={3} value={formData.bio} onChange={(e) => setFormData({ ...formData, bio: e.target.value })} placeholder="Brief professional summary..." />
            </div>
            <div className="space-y-2">
              <Label>Skills (comma separated)</Label>
              <Input value={formData.skills} onChange={(e) => setFormData({ ...formData, skills: e.target.value })} placeholder="React, Node.js, TypeScript" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Languages (comma separated)</Label>
                <Input value={formData.languages} onChange={(e) => setFormData({ ...formData, languages: e.target.value })} placeholder="English (Fluent), Hindi" />
              </div>
              <div className="space-y-2">
                <Label>Availability</Label>
                <Select value={formData.availability} onValueChange={(v) => setFormData({ ...formData, availability: v })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Full-time">Full-time</SelectItem>
                    <SelectItem value="Part-time">Part-time</SelectItem>
                    <SelectItem value="Full-time / Part-time">Full-time / Part-time</SelectItem>
                    <SelectItem value="Full-time / Contract">Full-time / Contract</SelectItem>
                    <SelectItem value="Contract">Contract</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Certifications (comma separated)</Label>
              <Input value={formData.certifications} onChange={(e) => setFormData({ ...formData, certifications: e.target.value })} placeholder="AWS Certified, Google Cloud Pro" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Education</Label>
                <Input value={formData.education} onChange={(e) => setFormData({ ...formData, education: e.target.value })} placeholder="B.Tech CSE, IIT Delhi" />
              </div>
              <div className="space-y-2">
                <Label>Status</Label>
                <Select value={formData.status} onValueChange={(v: "Active" | "Inactive") => setFormData({ ...formData, status: v })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
              <Button onClick={handleSubmit}>{editing ? "Save Changes" : "Add Developer"}</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminDevelopers;
