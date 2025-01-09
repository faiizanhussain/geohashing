import calculateBboxGeohashes from "./functions/bbox-geohashes";
import decodeGeohash from "./functions/decode-geohash";
import encodeGeohash from "./functions/encode-geohash";

export class Geohash {
  /**
   * Calculate the bounding box of a geohash
   * @param geohash The geohash
   * @returns The bounding box
   */
  static calculateBboxGeohashes(geohash: string): {
    lat: { min: number; max: number };
    lon: { min: number; max: number };
  } {
    return calculateBboxGeohashes(geohash);
  }

  /**
   * Decode a geohash
   * @param geohash The geohash
   * @returns The latitude and longitude
   */
  static decodeGeohash(geohash: string): { lat: number; lon: number } {
    return decodeGeohash(geohash);
  }

    /**
     * Encode a latitude and longitude to a geohash
     * @param lat The latitude
     * @param lon The longitude
     * @param precision The precision
     * @returns The geohash
     */
    static encodeGeohash(lat: number, lon: number, precision: number): string {
        return encodeGeohash(lat, lon, precision);
    }
}
