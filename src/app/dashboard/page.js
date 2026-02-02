import { PageHeader } from "../../components/dashboard/PageHeader";
import StatsGrid from "../../components/dashboard/StatsGrid";
import { PaymentChart, SalesCard } from "../../components/dashboard/MainCharts";
import { LeadsTable } from "../../components/dashboard/Tables";
import TeamProgress from "../../components/dashboard/TeamProgress";
import { UpcomingSchedule } from "@/components/dashboard/UpcomingSchedule";
import { ProjectStatus } from "@/components/dashboard/ProjectStatus";
import { LeadsOverview } from "@/components/dashboard/LeadsOverview";
import SummaryGrid from "@/components/dashboard/SummaryGrid";
import StatCard from "@/components/dashboard/StatCard";
import DashboardStats from "@/components/dashboard/DashboardStats";

export default function CRMHome() {
  return (
    <>
      <PageHeader title="Dashboard" breadcrumb="Home > Dashboard" />
      <div className="space-y-6">
        <StatsGrid />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <PaymentChart />
            <SummaryGrid/>
          </div>
          <div><SalesCard /></div>
        </div>
        <div>
          <DashboardStats/>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div><LeadsOverview /></div>
          <div className="lg:col-span-2"><LeadsTable /></div>
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UpcomingSchedule />
          <ProjectStatus />
          <TeamProgress />
        </div>
      </div>
    </>
  );
}