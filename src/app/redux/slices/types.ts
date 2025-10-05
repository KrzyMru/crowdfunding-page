interface CountState {
    value: number,
}

interface BackProjectOptionState {
    value: BackProjectOptions,
}

type BackProjectOptions = 'standard' | 'black' | 'mahogany' | 'noReward' | null;

export type { CountState, BackProjectOptionState, BackProjectOptions }