import type { PledgeCardProps } from "./types";

const PledgeCard = (props: PledgeCardProps) => {
    const { title, description, amountCash, amountLeft, onClick, disabled } = { ...props }

    return (
        <div className={`${disabled ? 'border-gray-100/40' : 'border-gray-100'} border-2 rounded-xl flex flex-col gap-6 p-8`}>
            <div className="flex flex-col justify-between gap-1 md:gap-0 md:flex-row md:items-center">
                <span className={`${disabled ? 'text-black/40' : 'text-black'} font-[700] text-[16px] md:text-[20px]`}>{title}</span>
                <span className={`${disabled ? 'text-green-400/40' : 'text-green-400'} font-[700]`}>Pledge ${amountCash} or more</span>
            </div>
            <p className={`${disabled ? 'text-gray-500/40' : 'text-gray-500'} text-[14px]/6 md:text-[16px]/7`}>{description}</p>
            <div className="flex flex-col justify-between gap-4 md:gap-0 md:flex-row md:items-center">
                <div className="flex items-center gap-2">
                    <span className={`${disabled ? 'text-black/40' : 'text-black'} text-[32px] font-[700]`}>{amountLeft}</span>
                    <span className={disabled ? 'text-gray-500/40' : 'text-gray-500'}>left</span>
                </div>
                <button
                    type="button"
                    title="Select reward"
                    disabled={disabled}
                    onClick={onClick}
                    className={`text-white font-[700] rounded-full w-fit py-4 px-8 ${disabled ? 'bg-gray-500/40 hover:cursor-default' : 'bg-green-400 hover:cursor-pointer hover:bg-green-700'}`}
                >
                    {disabled ? 'Out of stock' : 'Select Reward'}
                </button>
            </div>
        </div>
    );
}

export default PledgeCard;