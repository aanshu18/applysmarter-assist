
import StatsCard from './StatsCard';
import { mockApplications } from './types';

const ApplicationOverview = () => {
  const stats = {
    applied: mockApplications.filter((app) => app.status === 'applied').length,
    wishlist: mockApplications.filter((app) => app.status === 'wishlist').length,
    interview: mockApplications.filter((app) => app.status === 'interview').length,
    offer: mockApplications.filter((app) => app.status === 'offer').length,
    rejected: mockApplications.filter((app) => app.status === 'rejected').length,
  };

  const totalApplications = mockApplications.length;

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
      <StatsCard
        label="Applied"
        value={stats.applied}
        color="bg-blue-500"
        total={totalApplications}
      />
      <StatsCard
        label="Wishlist"
        value={stats.wishlist}
        color="bg-purple-500"
        total={totalApplications}
      />
      <StatsCard
        label="Interview"
        value={stats.interview}
        color="bg-amber-500"
        total={totalApplications}
      />
      <StatsCard
        label="Offer"
        value={stats.offer}
        color="bg-green-500"
        total={totalApplications}
      />
      <StatsCard
        label="Rejected"
        value={stats.rejected}
        color="bg-red-500"
        total={totalApplications}
      />
    </div>
  );
};

export default ApplicationOverview;
