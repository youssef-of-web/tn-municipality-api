# Enhanced Municipality Search with Fallback

This document describes the enhanced search functionality implemented in the Tunisia Municipality API.

## Overview

The enhanced search system provides intelligent fallback between governorate and delegation searches to ensure users get relevant results even when their initial search doesn't match the expected category.

## Features

### 1. **Fallback Search Mechanism**

- **Governorate to Delegation Fallback**: When searching by governorate name fails, automatically tries delegation search
- **Delegation to Governorate Fallback**: When searching by delegation name fails, automatically tries governorate search
- **Seamless Experience**: Users don't need to know whether they're searching for a governorate or delegation

### 2. **Multi-language Support**

- Supports both English and Arabic search terms
- Case-insensitive matching
  n

### 3. **Enhanced API Parameters**

#### New Parameter

- `search`: Unified search parameter that tries governorate first, then delegation as fallback

#### Legacy Parameters (maintained for backward compatibility)

- `name`: Search by governorate name (with delegation fallback)
- `delegation`: Search by delegation name (with governorate fallback)

#### Other Parameters

- `postalCode`: Filter by exact postal code match
- `sort`: Sort field ('name' or 'nameAr')
- `order`: Sort order ('asc' or 'desc', defaults to 'asc')

## API Usage Examples

### Basic Search with Fallback

```
GET /api/municipalities?search=tunis
```

This will:

1. First try to find governorates containing "tunis"
2. If no governorates found, search delegations containing "tunis"
3. Return results from whichever search succeeded

### Legacy Governorate Search with Delegation Fallback

```
GET /api/municipalities?name=sfax
```

### Legacy Delegation Search with Governorate Fallback

```
GET /api/municipalities?delegation=medina
```

### Combined with Other Filters

```
GET /api/municipalities?search=ariana&sort=name&order=asc
```

## Implementation Details

### Core Functions

1. **`searchByGovernorate()`**: Searches municipality names (both English and Arabic)
2. **`searchByDelegation()`**: Searches delegation names within municipalities
3. **`enhancedSearch()`**: Orchestrates the fallback mechanism
4. **`filterByPostalCode()`**: Filters by exact postal code match
5. **`sortMunicipalities()`**: Handles sorting with locale-aware comparison

### Search Logic Flow

```typescript
function enhancedSearch(searchTerm, searchType, municipalities) {
  if (searchType === "governorate") {
    // Try governorate search first
    results = searchByGovernorate(searchTerm, municipalities);

    // Fallback to delegation search if no results
    if (results.length === 0) {
      results = searchByDelegation(searchTerm, municipalities);
      fallbackApplied = true;
    }
  } else {
    // Try delegation search first
    results = searchByDelegation(searchTerm, municipalities);

    // Fallback to governorate search if no results
    if (results.length === 0) {
      results = searchByGovernorate(searchTerm, municipalities);
      fallbackApplied = true;
    }
  }

  return { results, searchUsed, fallbackApplied };
}
```

## Benefits

1. **Improved User Experience**: Users don't need to know the exact category they're searching for
2. **Higher Success Rate**: More searches return relevant results
3. **Backward Compatibility**: Existing API consumers continue to work
4. **Better Search Coverage**: Covers both governorate and delegation levels
5. **Debugging Support**: Logs provide insight into which search method was used

## Error Handling

- Comprehensive try-catch blocks prevent API crashes
- Meaningful error responses with HTTP status codes
- Console logging for debugging and analytics

## Performance Considerations

- Immutable data handling (creates copies to avoid mutations)
- Efficient filtering using native array methods
- Locale-aware sorting for Arabic text
- Early termination when primary search succeeds (no unnecessary fallback)

This enhanced search system significantly improves the usability of the Tunisia Municipality API while maintaining full backward compatibility with existing implementations.
