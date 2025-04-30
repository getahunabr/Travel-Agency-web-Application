import { Header, StatCard, TripCard } from "components";
import React from "react";

const allTrips = [
  {
    id: 1,
    name: "Tropical Rewind",
    imageUrls: ["/assets/images/sample1.jpg"],
    itinerary: [{ location: "Thailand" }],
    tags: ["Adventure", "Culture"],
    travelStyle: "Solo",
    estimatedPrice: "$1,000",
  },
  {
    id: 2,
    name: "French Reverie",
    imageUrls: ["/assets/images/sample2.jpg"],
    itinerary: [{ location: "Paris" }],
    tags: ["Relaxation", "Culinary"],
    travelStyle: "Family",
    estimatedPrice: "$2,000",
  },
  {
    id: 3,
    name: "Zen Break",
    imageUrls: ["/assets/images/sample3.jpg"],
    itinerary: [{ location: "Japan" }],
    tags: ["Shopping", "Luxury"],
    travelStyle: "Couple",
    estimatedPrice: "$3,000",
  },
  {
    id: 4,
    name: "Adventure in Westeros",
    imageUrls: ["/assets/images/sample4.jpg"],
    itinerary: [{ location: "Croatia" }],
    tags: ["Historical", "Culture"],
    travelStyle: "Friends",
    estimatedPrice: "$4,000",
  },
];
const Dashboard = () => {
  const user = {
    name: "Getahun",
  };
  const dashboardStats = {
    totalUsers: 12450,
    userJoined: { currentMonth: 218, lastMonth: 176 },
    totalTrips: 3210,
    tripsCreated: { currentMonth: 150, lastMonth: 250 },
    userRole: { total: 62, currentMonth: 25, lastMonth: 15 },
  };
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"}👋`}
        description="Track Activity, trends,and popular destinations in real Time."
      />
      <section className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <StatCard
            headerTitle="Total Users"
            total={dashboardStats.totalUsers}
            currentMonthCount={dashboardStats.userJoined.currentMonth}
            lastMonthCount={dashboardStats.userJoined.lastMonth}
          />
          <StatCard
            headerTitle="Total Trips"
            total={dashboardStats.totalTrips}
            currentMonthCount={dashboardStats.tripsCreated.currentMonth}
            lastMonthCount={dashboardStats.tripsCreated.lastMonth}
          />
          <StatCard
            headerTitle="Active Users Today"
            total={dashboardStats.userRole.total}
            currentMonthCount={dashboardStats.userRole.currentMonth}
            lastMonthCount={dashboardStats.userRole.lastMonth}
          />
        </div>
      </section>
      <section className="container">
        <h1 className="text-xl font-semibold text-dark-100 ">Created Trips</h1>
        <div className="trip-grid">
          {allTrips
            .slice(0, 4)
            .map(({ id, name, imageUrls, itinerary, tags, estimatedPrice }) => (
              <TripCard
                key={id}
                id={id.toString()}
                name={name}
                imageUrl={imageUrls[0]}
                location={itinerary?.[0]?.location ?? ""}
                tags={tags}
                price={estimatedPrice}
              />
            ))}
        </div>
      </section>
      <TripCard />
    </main>
  );
};

export default Dashboard;
