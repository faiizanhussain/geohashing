export default function bounds(geohash: string): { lat: { min: number, max: number }, lon: { min: number, max: number } } {
    let latRange = { min: -90, max: 90 };
    let lonRange = { min: -180, max: 180 };
    let isEven = true;

    for (let i = 0; i < geohash.length; i++) {
        const dec = this.BASE32.indexOf(geohash[i]).toString(2).padStart(5, '0');
        for (let j = 0; j < dec.length; j++) {
            if (isEven) {
                const mid = (lonRange.min + lonRange.max) / 2;
                if (dec[j] === '1') {
                    lonRange.min = mid;
                } else {
                    lonRange.max = mid;
                }
            } else {
                const mid = (latRange.min + latRange.max) / 2;
                if (dec[j] === '1') {
                    latRange.min = mid;
                } else {
                    latRange.max = mid;
                }
            }
            isEven = !isEven;
        }
    }

    return { lat: latRange, lon: lonRange };
}