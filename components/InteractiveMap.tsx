"use client";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";
import { Delegation } from "@/types";
import { useTranslations } from "next-intl";

const DefaultIcon = L.icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const ZoomBasedMarkers = ({ delegations }: { delegations: Delegation[] }) => {
  const tMap = useTranslations("map");
  const [zoom, setZoom] = useState(6);
  const [bounds, setBounds] = useState<L.LatLngBounds | null>(null);

  const map = useMapEvents({
    zoomend: () => {
      const currentZoom = map.getZoom();
      const currentBounds = map.getBounds();
      setZoom(currentZoom);
      setBounds(currentBounds);
    },
    moveend: () => {
      setBounds(map.getBounds());
    },
  });

  const shouldShowMarkers = zoom >= 10;

  const visibleDelegations =
    shouldShowMarkers && bounds
      ? delegations.filter((delegation) =>
          bounds.contains([delegation.Latitude, delegation.Longitude]),
        )
      : [];
  return (
    <>
      {visibleDelegations.map((delegation, index) => (
        <Marker
          key={`${delegation.Value}-${delegation.PostalCode}-${delegation.Latitude}-${delegation.Longitude}-${index}`}
          position={[delegation.Latitude, delegation.Longitude]}
        >
          <Popup>
            <div>
              <strong>{delegation.Name}</strong>
              <br />
              <em>{delegation.NameAr}</em>
              <br />
              <small>
                {tMap("postalCode")}: {delegation.PostalCode}
              </small>
              <br />
              <small>
                {tMap("coordinates")}: {delegation.Latitude.toFixed(4)},{" "}
                {delegation.Longitude.toFixed(4)}
              </small>
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
};

const InteractiveMap = () => {
  const tMap = useTranslations("map");
  const [delegations, setDelegations] = useState<Delegation[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/municipalities");
      const data = await response.json();
      const allDelegations = data.flatMap(
        (municipality: any) => municipality.Delegations,
      );
      setDelegations(allDelegations);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: 16,
        }}
      >
        {tMap("title")}
      </h2>
      <div
        style={{
          marginBottom: "10px",
          padding: "10px",
          backgroundColor: "#e3f2fd",
          borderRadius: "5px",
          fontSize: "14px",
          border: "1px solid #2196f3",
        }}
      >
        <strong>🔍 {tMap("ZoomInstruction")}</strong>
        {" : "}
        {tMap("ZoomInstructionDescription")}
      </div>
      <MapContainer
        center={[34.0, 9.0]}
        zoom={6}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <ZoomBasedMarkers delegations={delegations} />
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;
