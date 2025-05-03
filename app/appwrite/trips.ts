import { Query } from "appwrite";
import { appwriteConfig, database } from "./client";

export const getAllTrips = async (limit: number, offset: number) => {
  const allTrips = await database.listDocuments(
    appwriteConfig.databaseId,
    appwriteConfig.tripCollectionId,
    [Query.limit(limit), Query.offset(offset), Query.orderDesc("$createdAt")]
  );
  if (allTrips.total === 0) {
    console.error("No Trip is Found");
    return { trips: [], total: 0 };
  }
  return {
    allTrips: allTrips.documents,
    total: allTrips.total,
  };
};

export const getTripById = async (tripId: string) => {
  try {
    const trip = await database.getDocument(
      appwriteConfig.databaseId,
      appwriteConfig.tripCollectionId,
      tripId
    );
    if (!trip.$id) {
      console.error("Trip not found");
      return null;
    }
    return trip;
  } catch (error) {
    console.error("Error fetching trip:", error);
    return null;
  }
};
