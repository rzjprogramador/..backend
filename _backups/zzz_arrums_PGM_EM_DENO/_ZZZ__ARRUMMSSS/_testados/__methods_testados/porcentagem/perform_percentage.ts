export type PerformPercentageType = (input: number, percentage: number) => Promise<number>

export const performPercentage: PerformPercentageType = async (input, percentage = 0) => {
    const formula = await input - ((input * percentage) / 100)
    return await formula
}
