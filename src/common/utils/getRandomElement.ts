export const getRandomElement = <T>(array: T[]): T | undefined => {
    if (!array || array.length === 0) return undefined;
    return array[Math.floor(Math.random() * array.length)];
};