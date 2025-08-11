"use client";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Select } from "./ui/select";

import { ToastContainer, toast } from "react-toastify";

interface ApiPlaygroundProps {
  heading?: string;
  description?: string;
  className?: string;
}

export function ApiPlayground({
  heading = "API Playground",
  description = "Test the API with real data.",
  className,
}: ApiPlaygroundProps) {
  const [name, setName] = useState("");
  const [delegation, setDelegation] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [loading_, setLoading_] = useState(false);
  const [radius, setRadius] = useState(10);
  const [sortBy, setSortBy] = useState("Name");
  const [lastUrl, setLastUrl] = useState("");

  async function routeAPI(e: any) {
    e.preventDefault();
    const clickedButton = e.nativeEvent?.submitter;
    if (clickedButton) {
      const value = clickedButton.value;
      if (value === "filter") {
        await handleFetch();
      } else if (value === "getNearby") {
        await getMunicipalitiesNearby(radius);
      }
    }
  }
  async function handleFetch() {
    setLoading(true);
    let url = "/api/municipalities?";
    if (name) url += `name=${encodeURIComponent(name)}&`;
    if (delegation) url += `delegation=${encodeURIComponent(delegation)}&`;
    if (postalCode) url += `postalCode=${encodeURIComponent(postalCode)}&`;
    const res = await fetch(url);
    const data = await res.json();
    setResult(data);
    const current_url = `http://${window.location.host}${url}`;
    setLastUrl(current_url);
    setLoading(false);
  }
  async function getMunicipalitiesNearby(radius = 10) {
    setLoading_(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          const url = `/api/municipalities/near?lat=${lat}&lng=${lng}&radius=${radius}`;
          const res = await fetch(url);
          const data = await res.json();
          setResult(data);
          const current_url = `http://${window.location.host}${url}`;
          setLastUrl(current_url);
          setLoading_(false);
        },
        (error) => {
          console.error("Geolocation error:", error);
          setLoading_(false);
          toast.error(
            "Failed to get your location. Please allow location access or check your internet connection.",
          );
        },
      );
    } else {
      setLoading_(false);
      toast.error("Geolocation is not supported by this browser.");
    }
  }
  return (
    <section className={className}>
      <motion.h2
        style={{
          fontSize: 28,
          fontWeight: 700,
          marginBottom: 8,
          textAlign: "center",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {heading}
      </motion.h2>
      <motion.p
        style={{ color: "#666", marginBottom: 24, textAlign: "center" }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {description}
      </motion.p>
      <Card style={{ padding: 24 }}>
        <form
          onSubmit={routeAPI}
          className="flex flex-wrap gap-4 justify-center mb-6"
        >
          <div className="min-w-[180px] max-w-[240px] flex-1">
            <Label htmlFor="name" className="mb-2 block">
              Governorate Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Ariana"
              className="rounded-xl shadow-sm border border-gray-200 transition duration-200 outline-none h-12 text-lg w-full"
            />
          </div>
          <div className="min-w-[180px] max-w-[240px] flex-1">
            <Label htmlFor="delegation" className="mb-2 block">
              Delegation
            </Label>
            <Input
              id="delegation"
              value={delegation}
              onChange={(e) => setDelegation(e.target.value)}
              placeholder="e.g. Ville"
              className="rounded-xl shadow-sm border border-gray-200 transition duration-200 outline-none h-12 text-lg w-full"
            />
          </div>
          <div className="min-w-[140px] max-w-[180px] flex-1">
            <Label htmlFor="postalCode" className="mb-2 block">
              Postal Code
            </Label>
            <Input
              id="postalCode"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              placeholder="e.g. 2058"
              className="rounded-xl shadow-sm border border-gray-200 transition duration-200 outline-none h-12 text-lg w-full"
            />
          </div>
          <div className="min-w-[140px] max-w-[180px] flex-1">
            <Label htmlFor="sortBy" className="mb-2 block">
              SortBy
            </Label>
            <Select
              id="sortBy"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-xl shadow-sm border border-gray-200 transition duration-200 outline-none h-12 text-lg w-full"
            >
              <option value="name">Name</option>
              <option value="nameAr">NameAr (Arabic)</option>
            </Select>
          </div>
          <div className="flex items-end">
            <Button
              type="submit"
              value="filter"
              disabled={loading}
              size="lg"
              className="flex items-center gap-2 h-12 text-base font-medium w-full md:w-auto justify-center"
            >
              {loading ? "Loading..." : "Test API"} <Send size={18} />
            </Button>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-4 mt-4 w-full">
            <div className="flex flex-col w-full md:w-auto">
              <Label htmlFor="radius" className="mb-2 block">
                Radius (km)
              </Label>
              <Input
                id="radius"
                className="rounded-xl shadow-sm border border-gray-200 transition duration-200 outline-none h-12 text-lg mb-4 w-full md:w-auto"
                value={radius}
                onChange={(e) => setRadius(Number(e.target.value))}
                type="number"
                min={0}
              />
            </div>
            <Button
              type="submit"
              value="getNearby"
              size="lg"
              className="flex items-center gap-2 h-12 text-base font-medium mt-2 md:mt-5 w-full md:w-auto justify-center"
            >
              {loading_ ? "Loading..." : "Get Nearby Municipalities"}{" "}
              <Send size={18} />
            </Button>
          </div>
        </form>
        <motion.div
          style={{ width: "100%" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Label>API Response</Label>
          <motion.pre
            style={{
              background: "#f8f9fa",
              padding: 16,
              borderRadius: 8,
              maxHeight: 400,
              overflow: "auto",
              border: "1px solid #e9ecef",
              fontSize: 14,
              marginTop: 8,
              width: "100%",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {result
              ? JSON.stringify(result, null, 2)
              : "// Your API response will appear here"}
          </motion.pre>
          {result && lastUrl && (
            <Button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(lastUrl);
                toast.info("URL copied to clipboard!");
              }}
              variant="outline"
              size="lg"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                height: 48,
                fontSize: 16,
                fontWeight: 500,
                marginTop: 16,
                cursor: "pointer",
              }}
            >
              Copy URL <Send size={18} />
            </Button>
          )}
        </motion.div>
      </Card>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
}
