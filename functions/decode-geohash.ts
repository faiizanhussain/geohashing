export default function decode(geohash: string): { lat: number, lon: number } {
    let latRange = { min: -90, max: 90 };
    let lonRange = { min: -180, max: 180 };
    let isEven = true;
    let bits = '';

    for (let i = 0; i < geohash.length; i++) {
        const dec = this.BASE32.indexOf(geohash[i]).toString(2).padStart(5, '0');
        bits += dec;
    }

    let lat = 0;
    let lon = 0;
    for (let i = 0; i < bits.length; i++) {
        if (isEven) {
            const mid = (lonRange.min + lonRange.max) / 2;
            if (bits[i] === '1') {
                lon = mid;
                lonRange.min = mid;
            } else {
                lon = mid;
                lonRange.max = mid;
            }
        } else {
            const mid = (latRange.min + latRange.max) / 2;
            if (bits[i] === '1') {
                lat = mid;
                latRange.min = mid;
            } else {
                lat = mid;
                latRange.max = mid;
            }
        }
        isEven = !isEven;
    }

    return { lat, lon };
}