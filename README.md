Here's a description of your geohash library project:

# Geohash Library

This is a TypeScript library for handling geohashes - a system for encoding geographic coordinates (latitude and longitude) into short strings. The library provides a clean, centralized interface through the `Geohash` class while maintaining separate function implementations for better scalability.

## Core Functionality

The library offers three main operations:

1. **Encoding** (`encodeGeohash`)
   - Converts latitude/longitude coordinates into a geohash string
   - Takes precision as a parameter to control geohash length
   ```typescript
   Geohash.encodeGeohash(37.371392, -122.046208, 6) // => "9q9hvu"
   ```

2. **Decoding** (`decodeGeohash`)
   - Converts a geohash string back to latitude/longitude coordinates
   ```typescript
   Geohash.decodeGeohash("9q9hvu") // => { lat: 37.371392, lon: -122.046208 }
   ```

3. **Bounding Box Calculation** (`calculateBboxGeohashes`)
   - Calculates the bounding box (min/max lat/lon) for a given geohash
   ```typescript
   Geohash.calculateBboxGeohashes("9q9hvu") 
   // => { 
   //      lat: { min: 37.37, max: 37.38 },
   //      lon: { min: -122.05, max: -122.04 }
   //    }
   ```

## Architecture

The project uses a modular architecture:

- `geohash.ts`: Main class that serves as the public API
- `functions/`: Directory containing individual implementations
  - `encode-geohash.ts`: Handles coordinate to geohash conversion
  - `decode-geohash.ts`: Handles geohash to coordinate conversion
  - `bbox-geohashes.ts`: Handles bounding box calculations

This separation allows for:
- Easy maintenance of individual functions
- Better testing isolation
- Simple addition of new features
- Clear separation of concerns

The bounding box calculation uses binary subdivision of the earth's surface, alternating between latitude and longitude divisions based on the bits encoded in the geohash string.

