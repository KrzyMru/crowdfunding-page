import { CloseButton, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import PledgeCardRadio from "../../pledge-card/pledge-card-radio";
import CloseModalIcon from "../../../assets/icons/icon-close-modal.svg"
import { useDispatch, useSelector } from "react-redux";
import { incrementBackers } from "../../../redux/slices/backersSlice";
import { amountStandardSelector, decrementAmountStandard } from "../../../redux/slices/amountStandardSlice";
import { amountBlackSelector, decrementAmountBlack } from "../../../redux/slices/amountBlackSlice";
import { amountMahoganySelector, decrementAmountMahogany } from "../../../redux/slices/amountMahoganySlice";
import { incrementCashByAmount } from "../../../redux/slices/cashSlice";
import type { BackProjectProps } from "./types";
import { backProjectOptionSelector, changeBackProjectOption } from "../../../redux/slices/backProjectOptionSlice";
import type { BackProjectOptions } from "../../../redux/slices/types";

const BackProject = (props: BackProjectProps) => {
    const { isOpen, onClose, onPledge } = { ...props }

    const amountStandard = useSelector(amountStandardSelector);
    const amountBlack = useSelector(amountBlackSelector);
    const amountMahogany = useSelector(amountMahoganySelector);
    const backProjectOption = useSelector(backProjectOptionSelector);
    const dispatch = useDispatch();

    const handlePledgeCheck = (title: BackProjectOptions) => {
        if(title === backProjectOption)
            dispatch(changeBackProjectOption(null));
        else
            dispatch(changeBackProjectOption(title));
    }

    return (
        <Dialog 
            open={isOpen} 
            onClose={onClose} 
            className="z-50"
        >
          <DialogBackdrop className="fixed inset-0 bg-black/40" />
          <div className="fixed inset-0 overflow-y-auto w-full flex items-center-safe md:justify-center">
            <DialogPanel className="relative flex flex-col bg-white gap-4 rounded-xl max-w-[760px] mx-8 p-6 md:mx-0 md:p-12">
                <CloseButton
                    type="button"
                    onClick={onClose}
                    className="absolute top-7.5 right-6 md:top-8 md:right-8 hover:cursor-pointer"
                >
                    <img 
                        src={CloseModalIcon}
                        alt="Close" 
                    />
                </CloseButton>
                <DialogTitle className="font-[700] text-[18px] md:text-[24px]">Back this project</DialogTitle>
                <span className="text-gray-500">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</span>
                <div className="flex flex-col gap-6 mt-2 md:mt-6">
                    <PledgeCardRadio 
                        title="Pledge with no reward"
                        description="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
                        amountCash={0}
                        amountLeft={0}
                        onClick={() => handlePledgeCheck("noReward")}
                        checked={backProjectOption === "noReward"}
                        onPledge={() => {
                            dispatch(incrementBackers());
                            onClose();
                            onPledge();
                        }}
                    />
                    <PledgeCardRadio 
                        title="Bamboo Stand"
                        description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list."
                        amountCash={25}
                        amountLeft={amountStandard}
                        onClick={() => handlePledgeCheck("standard")}
                        checked={backProjectOption === "standard"}
                        onPledge={(pledge: number) => {
                            dispatch(incrementBackers());
                            dispatch(decrementAmountStandard());
                            dispatch(incrementCashByAmount(pledge));
                            onClose();
                            onPledge();
                        }}
                        disabled={amountStandard === 0}
                    />
                    <PledgeCardRadio 
                        title="Black Edition Stand"
                        description="You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included."
                        amountCash={75}
                        amountLeft={amountBlack}
                        onClick={() => handlePledgeCheck("black")}
                        checked={backProjectOption === "black"}
                        onPledge={(pledge: number) => {
                            dispatch(incrementBackers());
                            dispatch(decrementAmountBlack());
                            dispatch(incrementCashByAmount(pledge));
                            onClose();
                            onPledge();
                        }}
                        disabled={amountBlack === 0}
                    />
                    <PledgeCardRadio 
                        title="Mahogany Special Edition"
                        description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included."
                        amountCash={200}
                        amountLeft={amountMahogany}
                        onClick={() => handlePledgeCheck("mahogany")}
                        checked={backProjectOption === "mahogany"}
                        onPledge={(pledge: number) => {
                            dispatch(incrementBackers());
                            dispatch(decrementAmountMahogany());
                            dispatch(incrementCashByAmount(pledge));
                            onClose();
                            onPledge();
                        }}
                        disabled={amountMahogany === 0}
                    />
                </div>
            </DialogPanel>
          </div>
      </Dialog>
    );
}

export default BackProject;