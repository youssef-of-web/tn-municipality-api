# Tunisian Municipality API

A comprehensive API and documentation website for accessing Tunisian municipality data with powerful filtering capabilities. Built for developers who need reliable access to Tunisian administrative data.

🌐 **Live Website**: [https://tn-municipality-api.vercel.app](https://tn-municipality-api.vercel.app)

## 🌟 Features

- **📊 Rich Data**: Complete municipality data with 24 governorates and 264+ delegations
- **🔍 Powerful Filtering**: Filter by governorate name, delegation, and postal code
- **🚀 Fast & Reliable**: Lightning-fast responses with modern API design
- **📱 Fully Responsive**: Beautiful documentation that works on all devices
- **🎨 Modern UI**: Clean, developer-friendly interface with smooth animations
- **📖 Comprehensive Docs**: Detailed API documentation with practical examples

## 🏗️ Built With

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Framer Motion** - Smooth animations and interactions
- **Lucide React** - Beautiful, consistent icons
- **shadcn/ui** - Modern, accessible components

## 🚀 Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/youssef-of-web/tn-municipality-api.git
   cd tn-municipality-api
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

| Parameter    | Type   | Description                | Example             |
| ------------ | ------ | -------------------------- | ------------------- |
| `name`       | string | Filter by governorate name | `?name=ariana`      |
| `delegation` | string | Filter by delegation name  | `?delegation=ville` |
| `postalCode` | string | Filter by postal code      | `?postalCode=2058`  |

### Example Requests

```javascript
// Get all municipalities
fetch("/api/municipalities");

// Filter by governorate
fetch("/api/municipalities?name=ariana");

// Filter by delegation
fetch("/api/municipalities?delegation=ville");

// Filter by postal code
fetch("/api/municipalities?postalCode=2058");

// Combine multiple filters
fetch("/api/municipalities?name=ariana&delegation=ville");
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

## 🤝 Contributing

We welcome contributions from the community! Whether you're a developer, designer, or just someone who wants to help improve this project, we'd love to have you on board.

### 🎉 Welcome Contributors!

This project is open to everyone who wants to contribute. No matter your experience level, there's always something you can help with:

- **🐛 Bug Reports** - Found an issue? Let us know!
- **💡 Feature Requests** - Have an idea? Share it!
- **📝 Documentation** - Help improve our docs
- **🎨 UI/UX Improvements** - Make it look better
- **🚀 Performance** - Help make it faster
- **🌍 Localization** - Add more languages
- **📊 Data** - Help improve our data quality

### How to Contribute

1. **Fork the repository**

   ```bash
   git clone https://github.com/youssef-of-web/tn-municipality-api.git
   ```

2. **Create a feature branch**

   ```bash
   git checkout -b feature/your-amazing-feature
   ```

3. **Make your changes**
   - Write clean, well-documented code
   - Follow the existing code style
   - Add tests if applicable

4. **Commit your changes**

   ```bash
   git commit -m "feat: add your amazing feature"
   ```

5. **Push to your branch**

   ```bash
   git push origin feature/your-amazing-feature
   ```

6. **Open a Pull Request**
   - Provide a clear description of your changes
   - Include screenshots if it's a UI change
   - Link any related issues

### 🎯 Areas We'd Love Help With

- **🌐 Additional Languages** - Arabic documentation
- **📱 Mobile Optimization** - Better mobile experience
- **🔍 Advanced Filtering** - More search options
- **📊 Data Visualization** - Charts and graphs
- **🗺️ Mapping Features** - Interactive maps
- **📈 Analytics** - Usage statistics
- **🔒 Security** - Security improvements
- **⚡ Performance** - Speed optimizations

### 📋 Code of Conduct

We're committed to providing a welcoming and inspiring community for all. Please be respectful and inclusive in all interactions.

### 🏷️ Issue Labels

- `good first issue` - Perfect for newcomers
- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements to docs
- `help wanted` - Extra attention needed

### 🎁 Recognition

Contributors will be recognized in our README and project documentation. We appreciate every contribution, no matter how small!

---

**Built with ❤️ for the Tunisian developer community**
