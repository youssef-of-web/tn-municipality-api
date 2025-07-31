import { Card } from "./ui/card";

interface DocumentationSectionProps {
    title?: string;
    endpoint?: string;
    parameters?: Array<{ name: string; description: string; example: string }>;
    exampleRequest?: string;
    exampleResponse?: string;
    className?: string;
}

export function DocumentationSection({
    title = "API Documentation",
    endpoint = "GET /api/municipalities",
    parameters = [
        {
            name: "name",
            description: "Filter by governorate name (e.g., Ariana, Tunis, Sfax)",
            example: "?name=ariana"
        },
        {
            name: "delegation",
            description: "Filter by delegation name within a governorate",
            example: "?delegation=ville"
        },
        {
            name: "postalCode",
            description: "Filter by postal code (5-digit format)",
            example: "?postalCode=2058"
        }
    ],
    exampleRequest,
    exampleResponse,
    className
}: DocumentationSectionProps) {
    return (
        <div className={className} style={{ padding: '0 8px' }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24, textAlign: 'center' }}>{title}</h2>

            <Card style={{ padding: 24, marginBottom: 24 }}>
                <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}>🔗 API Endpoint</h3>
                <code style={{
                    background: '#f4f4f4',
                    padding: 12,
                    borderRadius: 8,
                    display: 'block',
                    fontSize: 16,
                    fontWeight: 500,
                    fontFamily: 'monospace'
                }}>
                    {endpoint}
                </code>
                <p style={{ marginTop: 12, color: '#666', fontSize: 14 }}>
                    Base URL: <code style={{ background: '#f0f0f0', padding: '2px 6px', borderRadius: 4 }}>https://tn-municipality-api.vercel.app</code>
                </p>
            </Card>

            <Card style={{ padding: 24, marginBottom: 24 }}>
                <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}>🔍 Query Parameters</h3>
                <p style={{ color: '#666', marginBottom: 16, fontSize: 14 }}>
                    Use these parameters to filter the municipality data. All parameters are optional and can be combined.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {parameters.map((param, index) => (
                        <div key={param.name} style={{
                            border: '1px solid #e9ecef',
                            borderRadius: 8,
                            padding: 16,
                            background: '#fafafa'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                                <code style={{
                                    background: '#0070f3',
                                    color: 'white',
                                    padding: '4px 8px',
                                    borderRadius: 4,
                                    fontSize: 14,
                                    fontWeight: 600
                                }}>
                                    {param.name}
                                </code>
                                <span style={{ fontSize: 12, color: '#666' }}>string</span>
                            </div>
                            <p style={{ marginBottom: 8, fontSize: 14, lineHeight: 1.5 }}>
                                {param.description}
                            </p>
                            <div style={{ fontSize: 13, color: '#666' }}>
                                <strong>Example:</strong> <code style={{ background: '#f0f0f0', padding: '2px 6px', borderRadius: 4 }}>
                                    {endpoint}{param.example}
                                </code>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>

            <Card style={{ padding: 24, marginBottom: 24 }}>
                <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}>💡 Usage Examples</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div>
                        <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>Get all municipalities</h4>
                        <pre style={{
                            background: '#222',
                            color: '#fff',
                            padding: 12,
                            borderRadius: 8,
                            fontSize: 14,
                            overflow: 'auto'
                        }}>
                            {`fetch('/api/municipalities')
  .then(response => response.json())
  .then(data => console.log(data));`}
                        </pre>
                    </div>

                    <div>
                        <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>Filter by governorate</h4>
                        <pre style={{
                            background: '#222',
                            color: '#fff',
                            padding: 12,
                            borderRadius: 8,
                            fontSize: 14,
                            overflow: 'auto'
                        }}>
                            {`fetch('/api/municipalities?name=ariana')
  .then(response => response.json())
  .then(data => console.log(data));`}
                        </pre>
                    </div>

                    <div>
                        <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>Filter by delegation</h4>
                        <pre style={{
                            background: '#222',
                            color: '#fff',
                            padding: 12,
                            borderRadius: 8,
                            fontSize: 14,
                            overflow: 'auto'
                        }}>
                            {`fetch('/api/municipalities?delegation=ville')
  .then(response => response.json())
  .then(data => console.log(data));`}
                        </pre>
                    </div>

                    <div>
                        <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>Filter by postal code</h4>
                        <pre style={{
                            background: '#222',
                            color: '#fff',
                            padding: 12,
                            borderRadius: 8,
                            fontSize: 14,
                            overflow: 'auto'
                        }}>
                            {`fetch('/api/municipalities?postalCode=2058')
  .then(response => response.json())
  .then(data => console.log(data));`}
                        </pre>
                    </div>

                    <div>
                        <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>Combine multiple filters</h4>
                        <pre style={{
                            background: '#222',
                            color: '#fff',
                            padding: 12,
                            borderRadius: 8,
                            fontSize: 14,
                            overflow: 'auto'
                        }}>
                            {`fetch('/api/municipalities?name=ariana&delegation=ville')
  .then(response => response.json())
  .then(data => console.log(data));`}
                        </pre>
                    </div>
                </div>
            </Card>

            {exampleResponse && (
                <Card style={{ padding: 24, marginBottom: 24 }}>
                    <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}>📄 Example Response</h3>
                    <pre style={{
                        background: '#f8f9fa',
                        padding: 16,
                        borderRadius: 8,
                        maxHeight: 300,
                        overflow: 'auto',
                        fontSize: 14,
                        border: '1px solid #e9ecef'
                    }}>
                        {exampleResponse}
                    </pre>
                </Card>
            )}
        </div>
    );
} 