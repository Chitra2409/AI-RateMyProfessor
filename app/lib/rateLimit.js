const rateLimitMap = new Map();

export function rateLimit({ limit = 10, windowMs = 60000 } = {}) {
    return (userId) => {
        const now = Date.now();
        const key = userId;

        if (!rateLimitMap.has(key)) {
            rateLimitMap.set(key, []);
        }

        const timestamps = rateLimitMap.get(key).filter(ts => now - ts < windowMs);
        timestamps.push(now);
        rateLimitMap.set(key, timestamps);

        return timestamps.length > limit;
    };
}
