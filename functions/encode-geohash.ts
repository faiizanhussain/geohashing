export default function encode(lat: number, lon: number, precision: number): string {
    if (precision < 1 || precision > 12) {
        throw new Error('Precision must be between 1 and 12');
    }

    let latRange = { min: -90, max: 90 };
    let lonRange = { min: -180, max: 180 };
    let bits = '';
    let isEven = true;

    while (bits.length < precision * 5) {
        if (isEven) {
            const mid = (lonRange.min + lonRange.max) / 2;
            if (lon >= mid) {
                bits += '1';
                lonRange.min = mid;
            } else {
                bits += '0';
                lonRange.max = mid;
            }
        } else {
            const mid = (latRange.min + latRange.max) / 2;
            if (lat >= mid) {
                bits += '1';
                latRange.min = mid;
            } else {
                bits += '0';
                latRange.max = mid;
            }
        }
        isEven = !isEven;
    }

    // Convert bits to base32 string
    let geohash = '';
    for (let i = 0; i < bits.length; i += 5) {
        const chunk = bits.slice(i, i + 5);
        const dec = parseInt(chunk, 2);
        geohash += this.BASE32[dec];
    }

    return geohash;
}