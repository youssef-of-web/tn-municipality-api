import { data } from "@/data/data";
import { NextResponse } from "next/server";
import { haversineDistance } from "@/lib/utils";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  let results = data;

  // Get municipalities within a certain radius from a location
  const userLat = parseFloat(searchParams.get("lat") || "0");
  const userLng = parseFloat(searchParams.get("lng") || "0");
  const radius = parseFloat(searchParams.get("radius") || "0");

  if (userLat && userLng && radius) {
    results = results
      .map((item) => ({
        ...item,
        Delegations: item.Delegations.filter((delegation) => {
          const distance = haversineDistance(
            userLat,
            userLng,
            delegation.Latitude,
            delegation.Longitude,
          );
          return distance <= radius;
        }),
      }))
      .filter((item) => item.Delegations.length > 0);
  }
  return NextResponse.json(results);
}
