"use client";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

interface ApiPlaygroundProps {
  heading?: string;
  description?: string;
  className?: string;
}

export function ApiPlayground({ heading = "API Playground", description = "Test the API with real data.", className }: ApiPlaygroundProps) {
  const [name, setName] = useState("");
  const [delegation, setDelegation] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function handleFetch() {
    setLoading(true);
    let url = "/api/municipalities?";
    if (name) url += `name=${encodeURIComponent(name)}&`;
    if (delegation) url += `delegation=${encodeURIComponent(delegation)}&`;
    if (postalCode) url += `postalCode=${encodeURIComponent(postalCode)}&`;
    const res = await fetch(url);
    const data = await res.json();
    setResult(data);
    setLoading(false);
  }

  return (
    <section className={className}>
      <motion.h2
        style={{ fontSize: 28, fontWeight: 700, marginBottom: 8, textAlign: 'center' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {heading}
      </motion.h2>
      <motion.p
        style={{ color: '#666', marginBottom: 24, textAlign: 'center' }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {description}
      </motion.p>
      <Card style={{ padding: 24 }}>
        <form
          onSubmit={e => { e.preventDefault(); handleFetch(); }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
            justifyContent: 'center',
            marginBottom: 24,
          }}
        >
          <div style={{ minWidth: 180, flex: '1 1 180px', maxWidth: 240 }}>
            <Label htmlFor="name" style={{ marginBottom: 8, display: 'block' }}>Governorate Name</Label>
            <Input id="name" value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Ariana"
              style={{ borderRadius: 12, boxShadow: '0 1px 4px #0001', border: '1.5px solid #e0e0e0', transition: 'border 0.2s', outline: 'none', height: 48, fontSize: 18 }}
            />
          </div>
          <div style={{ minWidth: 180, flex: '1 1 180px', maxWidth: 240 }}>
            <Label htmlFor="delegation" style={{ marginBottom: 8, display: 'block' }}>Delegation</Label>
            <Input id="delegation" value={delegation} onChange={e => setDelegation(e.target.value)} placeholder="e.g. Ville"
              style={{ borderRadius: 12, boxShadow: '0 1px 4px #0001', border: '1.5px solid #e0e0e0', transition: 'border 0.2s', outline: 'none', height: 48, fontSize: 18 }}
            />
          </div>
          <div style={{ minWidth: 140, flex: '1 1 140px', maxWidth: 180 }}>
            <Label htmlFor="postalCode" style={{ marginBottom: 8, display: 'block' }}>Postal Code</Label>
            <Input id="postalCode" value={postalCode} onChange={e => setPostalCode(e.target.value)} placeholder="e.g. 2058"
              style={{ borderRadius: 12, boxShadow: '0 1px 4px #0001', border: '1.5px solid #e0e0e0', transition: 'border 0.2s', outline: 'none', height: 48, fontSize: 18 }}
            />
          </div>
          <div style={{ alignSelf: 'end' }}>
            <Button type="submit" disabled={loading} size="lg" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 8,
              height: 48,
              fontSize: 16,
              fontWeight: 500
            }}>
              {loading ? 'Loading...' : 'Test API'} <Send size={18} />
            </Button>
          </div>
        </form>
        <motion.div
          style={{ width: '100%' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Label>API Response</Label>
          <motion.pre
            style={{
              background: '#f8f9fa',
              padding: 16,
              borderRadius: 8,
              maxHeight: 400,
              overflow: 'auto',
              border: '1px solid #e9ecef',
              fontSize: 14,
              marginTop: 8,
              width: '100%',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {result ? JSON.stringify(result, null, 2) : '// Your API response will appear here'}
          </motion.pre>
        </motion.div>
      </Card>
    </section>
  );
}