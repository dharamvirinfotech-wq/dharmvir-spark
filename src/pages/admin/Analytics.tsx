import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard, Users as UsersIcon, FileText, Settings, LogOut, Menu, X,
  Mail, BarChart3, Bell, ShieldCheck, TrendingUp, Eye, UserPlus, DollarSign,
  Globe, MousePointerClick, Clock, ArrowUpRight, ArrowDownRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

const sidebarLinks = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/admin" },
  { label: "Users", icon: UsersIcon, href: "/admin/users" },
  { label: "Roles", icon: ShieldCheck, href: "/admin/roles" },
  { label: "Pages", icon: FileText, href: "/admin/pages" },
  { label: "Inquiries", icon: Mail, href: "/admin/inquiries" },
  { label: "Analytics", icon: BarChart3, href: "/admin/analytics" },
  { label: "Settings", icon: Settings, href: "/admin/settings" },
];

const stats = [
  { label: "Page Views", value: "248,591", change: "+12.5%", trend: "up", icon: Eye, color: "bg-blue-500/10 text-blue-600" },
  { label: "Unique Visitors", value: "48,290", change: "+8.3%", trend: "up", icon: UserPlus, color: "bg-green-500/10 text-green-600" },
  { label: "Avg. Session", value: "3m 42s", change: "+5.1%", trend: "up", icon: Clock, color: "bg-purple-500/10 text-purple-600" },
  { label: "Bounce Rate", value: "32.4%", change: "-2.8%", trend: "down", icon: MousePointerClick, color: "bg-amber-500/10 text-amber-600" },
];

const topPages = [
  { path: "/", views: 58420, change: "+12%" },
  { path: "/services", views: 32184, change: "+8%" },
  { path: "/hire-developer", views: 28950, change: "+18%" },
  { path: "/promotion/seo-services", views: 19432, change: "+22%" },
  { path: "/contact", views: 14210, change: "+4%" },
  { path: "/about", views: 9821, change: "-2%" },
];

const trafficSources = [
  { source: "Organic Search", visitors: 24580, pct: 52, color: "bg-accent" },
  { source: "Direct", visitors: 11420, pct: 24, color: "bg-blue-500" },
  { source: "Social Media", visitors: 6840, pct: 14, color: "bg-purple-500" },
  { source: "Referral", visitors: 3210, pct: 7, color: "bg-green-500" },
  { source: "Email", visitors: 1480, pct: 3, color: "bg-amber-500" },
];

const monthlyData = [
  { month: "Jan", value: 65 }, { month: "Feb", value: 72 }, { month: "Mar", value: 68 },
  { month: "Apr", value: 81 }, { month: "May", value: 76 }, { month: "Jun", value: 89 },
  { month: "Jul", value: 92 }, { month: "Aug", value: 84 }, { month: "Sep", value: 95 },
  { month: "Oct", value: 88 }, { month: "Nov", value: 97 }, { month: "Dec", value: 100 },
];

const Analytics = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [range, setRange] = useState("30d");
  const maxVal = Math.max(...monthlyData.map(d => d.value));

  return (
    <div className="min-h-screen bg-muted/30 flex">
      <aside className={`${sidebarOpen ? "w-64" : "w-0 lg:w-20"} bg-primary text-primary-foreground transition-all duration-300 flex flex-col fixed lg:relative h-screen z-40 overflow-hidden`}>
        <div className="p-4 flex items-center justify-between border-b border-white/10">
          {sidebarOpen && (
            <Link to="/" className="font-bold text-lg">
              DV <span className="text-accent">Admin</span>
            </Link>
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
                item.href === "/admin/analytics"
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

      <main className="flex-1 min-h-screen">
        <header className="bg-background border-b border-border px-6 py-4 flex items-center justify-between sticky top-0 z-30">
          <div>
            <h1 className="text-xl font-bold text-primary">Analytics</h1>
            <p className="text-sm text-muted-foreground">Website performance & user insights</p>
          </div>
          <div className="flex items-center gap-4">
            <Select value={range} onValueChange={setRange}>
              <SelectTrigger className="w-[140px] h-9 text-sm"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
                <SelectItem value="12m">Last 12 months</SelectItem>
              </SelectContent>
            </Select>
            <button className="relative text-muted-foreground hover:text-foreground">
              <Bell size={20} />
            </button>
            <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">A</div>
          </div>
        </header>

        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {stats.map((stat) => (
              <Card key={stat.label} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-2xl font-bold text-primary mt-1">{stat.value}</p>
                      <p className={`text-xs font-medium mt-1 flex items-center gap-1 ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                        {stat.trend === "up" ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                        {stat.change}
                      </p>
                    </div>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color}`}>
                      <stat.icon size={22} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <Card className="lg:col-span-2 border-border">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2"><TrendingUp size={18} className="text-accent" /> Traffic Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end gap-2 h-56 pt-4">
                  {monthlyData.map((d) => (
                    <div key={d.month} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full flex-1 flex items-end">
                        <div
                          className="w-full bg-gradient-to-t from-accent to-accent/60 rounded-t-md hover:opacity-80 transition-opacity"
                          style={{ height: `${(d.value / maxVal) * 100}%` }}
                          title={`${d.value}k visits`}
                        />
                      </div>
                      <span className="text-[11px] text-muted-foreground">{d.month}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2"><Globe size={18} className="text-accent" /> Traffic Sources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {trafficSources.map((s) => (
                  <div key={s.source}>
                    <div className="flex items-center justify-between text-sm mb-1.5">
                      <span className="font-medium text-foreground">{s.source}</span>
                      <span className="text-muted-foreground">{s.pct}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className={`h-full ${s.color} rounded-full`} style={{ width: `${s.pct}%` }} />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{s.visitors.toLocaleString()} visitors</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <Card className="border-border">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-base">Top Pages</CardTitle>
              <Button variant="ghost" size="sm" className="text-accent text-xs">Export CSV</Button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-2 text-muted-foreground font-medium">#</th>
                      <th className="text-left py-3 px-2 text-muted-foreground font-medium">Page</th>
                      <th className="text-right py-3 px-2 text-muted-foreground font-medium">Page Views</th>
                      <th className="text-right py-3 px-2 text-muted-foreground font-medium">Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topPages.map((p, idx) => (
                      <tr key={p.path} className="border-b border-border last:border-0 hover:bg-muted/50">
                        <td className="py-3 px-2 text-muted-foreground">{idx + 1}</td>
                        <td className="py-3 px-2 font-medium text-foreground">{p.path}</td>
                        <td className="py-3 px-2 text-right text-foreground">{p.views.toLocaleString()}</td>
                        <td className={`py-3 px-2 text-right font-medium ${p.change.startsWith("-") ? "text-red-600" : "text-green-600"}`}>{p.change}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Analytics;
