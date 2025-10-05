import { useState, type ChangeEvent } from "react";
import type { PledgeCardRadioProps } from "./types";

const PledgeCardRadio = (props: PledgeCardRadioProps) => {
    const { title, description, amountCash, amountLeft, checked, onClick, onPledge, disabled } = { ...props }
    const freePledge = amountCash === 0 && amountLeft === 0;
    const [pledge, setPledge] = useState<number>(amountCash);

    const handlePledgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPledge = parseInt(e.target.value);
        setPledge(newPledge);
    }

    return (
        <div className={`${disabled ? 'border-gray-100/40' : checked ? 'border-green-400' : 'border-gray-100'} border-2 rounded-xl flex flex-col gap-6 px-4 pt-6 pb-4 md:px-6 md:pt-8 md:pb-6`}>
            <div className="flex items-start">
                <div className="relative size-[26px] mr-5 z-0 hidden md:block">
                    <input 
                        id={title}
                        type="radio"
                        name="pledge"
                        className="appearance-none size-[26px] rounded-full border-2 border-gray-200 shrink-0 bg-transparent hover:border-green-400 hover:cursor-pointer disabled:border-gray-200 disabled:cursor-default"
                        checked={checked}
                        onClick={onClick}
                        disabled={disabled}
                    />
                    <div className={`${checked ? 'block' : 'hidden'} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[12px] rounded-full bg-green-400 -z-1`} />
                </div>
                <div className="flex flex-col gap-4 mb-2">
                    <div className="flex items-center mb-3 md:mb-0 md:items-start md:justify-between">
                        <div className="relative size-[26px] mr-5 z-0 md:hidden">
                            <input 
                                id={title}
                                type="radio"
                                name="pledge"
                                className="appearance-none size-[26px] rounded-full border-2 border-gray-200 shrink-0 bg-transparent hover:border-green-400 hover:cursor-pointer disabled:border-gray-200 disabled:cursor-default"
                                checked={checked}
                                onClick={onClick}
                                disabled={disabled}
                            />
                            <div className={`${checked ? 'block' : 'hidden'} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[12px] rounded-full bg-green-400 -z-1`} />
                        </div>
                        <div className="flex gap-1 flex-col md:flex-row md:items-center md:gap-6">
                            <label htmlFor={title} className={`${disabled ? 'text-black/40' : 'text-black hover:text-green-400 hover:cursor-pointer'} font-[700]`}>{title}</label>
                            <span className={`${disabled ? 'text-green-400/40' : 'text-green-400'} ${freePledge ? 'hidden' : 'inline'} font-[700]`}>Pledge ${amountCash} or more</span>
                        </div>
                        <div className={`${freePledge ? 'hidden' : 'hidden md:flex'} items-center gap-2`}>
                            <span className={`${disabled ? 'text-black/40' : 'text-black'} font-[700] text-[20px]`}>{amountLeft}</span>
                            <span className={disabled ? 'text-gray-500/40' : 'text-gray-500'}>left</span>
                        </div>
                    </div>
                    <p className={disabled ? 'text-gray-500/40' : 'text-gray-500'}>{description}</p>
                </div>
            </div>
            <div className={`${freePledge ? 'hidden' : 'flex md:hidden'} items-center gap-2`}>
                <span className={`${disabled ? 'text-black/40' : 'text-black'} font-[700] text-[20px]`}>{amountLeft}</span>
                <span className={disabled ? 'text-gray-500/40' : 'text-gray-500'}>left</span>
            </div>
            <div className={`${checked ? 'block' : 'hidden'} border-t-2 border-gray-200 -mx-4 md:-mx-6`}/>
            <div className={`${checked ? 'flex' : 'hidden'} items-center justify-between flex-col md:flex-row`}>
                <p className="text-gray-500 mb-5 md:mb-0">{freePledge ? 'Become a backer' : 'Enter your pledge'}</p>
                <div className="flex gap-4">
                    <div className={`${freePledge ? 'hidden' : ''} relative`}>
                        <input 
                            type="number"
                            value={pledge}
                            onChange={handlePledgeChange}
                            className="h-full pl-10 border-2 border-gray-200 rounded-full p-3 w-[100px] outline-gray-300 outline-offset-2 font-[700] focus:outline-2"
                        />
                        <span className="absolute left-[24px] top-1/2 transform -translate-y-1/2 text-gray-200 font-[700]">$</span>
                    </div>
                    <button
                        type="button"
                        title="Continue"
                        disabled={disabled}
                        onClick={onPledge}
                        className={`text-white font-[700] rounded-full w-fit py-3 px-6 md:py-4 md:px-8 ${disabled ? 'bg-gray-500/40 hover:cursor-default' : 'bg-green-400 hover:cursor-pointer hover:bg-green-700'}`}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PledgeCardRadio;