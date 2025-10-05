import { CloseButton, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import type { DialogProps } from "../types";
import CheckIcon from "../../../assets/icons/icon-check.svg";

const ThankYou = (props: DialogProps) => {
    const { isOpen, onClose } = { ...props }

    return (
        <Dialog 
            open={isOpen} 
            onClose={onClose} 
            className="z-50"
        >
            <DialogBackdrop className="fixed inset-0 bg-black/40" />
            <div className="fixed inset-0 overflow-y-auto w-full flex items-center-safe justify-center">
                <DialogPanel className="relative flex flex-col bg-white rounded-xl max-w-[550px] mx-6 p-6 md:mx-0 md:p-12">
                    <img 
                        src={CheckIcon}
                        alt="check"
                        className="self-center size-[64px] md:size-[96px]"
                    />
                    <DialogTitle className="mt-6 text-center font-[700] text-[18px] md:text-[24px] md:mt-10">Thanks for your support!</DialogTitle>
                    <p className="mt-6 text-center text-gray-500 text-[14px]/6 md:text-[16px]/7 md:mt-3">
                        Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. 
                        You will get an email once our campaign is completed.
                    </p>
                    <CloseButton
                        type="button"
                        title="Got it"
                        className="mt-8 self-center text-white font-[700] rounded-full w-fit py-4 px-9 bg-green-400 md:py-4 md:px-8 hover:cursor-pointer hover:bg-green-700"
                        onClick={onClose}
                    >
                        Got it!
                    </CloseButton>
                </DialogPanel>
            </div>
        </Dialog>
    )
}

export default ThankYou;