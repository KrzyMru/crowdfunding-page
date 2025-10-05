interface PledgeCardProps {
    title: string,
    description: string,
    amountCash: number,
    amountLeft: number,
    onClick: () => void,
    disabled?: boolean, 
}

interface PledgeCardRadioProps extends PledgeCardProps {
    checked?: boolean,
    onPledge: (amount: number) => void,
}

export type { PledgeCardProps, PledgeCardRadioProps }