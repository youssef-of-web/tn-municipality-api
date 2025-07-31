# Tunisian Municipality API

A comprehensive API and documentation website for accessing Tunisian municipality data with powerful filtering capabilities. Built for developers who need reliable access to Tunisian administrative data.

## 🌟 Features

- **📊 Rich Data**: Complete municipality data with 24 governorates and 264+ delegations
- **🔍 Powerful Filtering**: Filter by governorate name, delegation, and postal code

## 🏗️ Built With

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Framer Motion** - Smooth animations and interactions
- **Lucide React** - Beautiful, consistent icons
- **shadcn/ui** - Modern, accessible components

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/tn-municipality.git
   cd tn-municipality
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📚 API Usage

### Base URL
```
GET /api/municipalities
```

### Query Parameters

| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `name` | string | Filter by governorate name | `?name=ariana` |
| `delegation` | string | Filter by delegation name | `?delegation=ville` |
| `postalCode` | string | Filter by postal code | `?postalCode=2058` |

### Example Requests

```javascript
// Get all municipalities
fetch('/api/municipalities')

// Filter by governorate
fetch('/api/municipalities?name=ariana')

// Filter by delegation
fetch('/api/municipalities?delegation=ville')

// Filter by postal code
fetch('/api/municipalities?postalCode=2058')

// Combine multiple filters
fetch('/api/municipalities?name=ariana&delegation=ville')
```

### Response Format

```json
[
  {
    "Name": "ARIANA",
    "NameAr": "أريانة",
    "Value": "ARIANA",
    "Delegations": [
      {
        "Name": "ARIANA VILLE (Residence Kortoba)",
        "NameAr": "أريانة المدينة (إقامة قرطبة)",
        "Value": "ARIANA VILLE",
        "PostalCode": "2058",
        "Latitude": 36.866011,
        "Longitude": 10.193923
      }
    ]
  }
]
```

## 🎯 Data Coverage

- **24 Governorates** - Complete coverage of all Tunisian administrative regions
- **264+ Delegations** - Detailed district-level data
- **GPS Coordinates** - Latitude and longitude for mapping applications
- **Bilingual Support** - Names in both English and Arabic
- **Postal Codes** - Complete postal code database


**Built with ❤️ for the Tunisian developer community**
