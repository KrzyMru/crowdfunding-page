import LogoMastercraft from "./assets/icons/logo-mastercraft.svg";
import HamburgerIcon from "./assets/icons/icon-hamburger.svg";
import CloseMenuIcon from "./assets/icons/icon-close-menu.svg";
import { useState } from "react";
import PledgeCard from "./components/pledge-card/pledge-card";
import BackProject from "./components/dialogs/back-project/back-project";
import { useDispatch, useSelector } from "react-redux";
import { cashSelector } from "./redux/slices/cashSlice";
import { backersSelector } from "./redux/slices/backersSlice";
import { amountMahoganySelector } from "./redux/slices/amountMahoganySlice";
import { amountBlackSelector } from "./redux/slices/amountBlackSlice";
import { amountStandardSelector } from "./redux/slices/amountStandardSlice";
import ThankYou from "./components/dialogs/thank-you/thank-you";
import { changeBackProjectOption } from "./redux/slices/backProjectOptionSlice";

const App = () => {
  const [bookmarked, setBookmarked] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [backProjectOpen, setbackProjectOpen] = useState<boolean>(false);
  const [thankYouOpen, setThankYouOpen] = useState<boolean>(false);

  const cash = useSelector(cashSelector);
  const backers = useSelector(backersSelector);
  const amountStandard = useSelector(amountStandardSelector);
  const amountBlack = useSelector(amountBlackSelector);
  const amountMahogany = useSelector(amountMahoganySelector);
  const dispatch = useDispatch();

  return (
    <main className="h-[100dvh] pt-8 pb-32 flex flex-col overflow-auto bg-gray-50 bg-no-repeat bg-contain bg-local bg-[url(/src/app/assets/images/image-hero-mobile.jpg)] md:bg-[url(/src/app/assets/images/image-hero-desktop.jpg)]">
      {/* Navigation bar */}
      <header className="flex items-center justify-between px-8 md:px-42">
        <span className="text-white text-[28px] font-[700]">crowdfund</span>
        <ul className={`flex gap-[32px] hidden md:flex`}>
          <li key={"about"}>
            <a href="/" className="text-white decoration-gray-200 hover:underline">About</a>
          </li>
          <li key={"discover"}>
            <a href="/" className="text-white decoration-gray-200 hover:underline">Discover</a>
          </li>
          <li key={"getStarted"}>
            <a href="/" className="text-white decoration-gray-200 hover:underline">Get Started</a>
          </li>
        </ul>
        <button
          type="button"
          title="Menu"
          className="hover:cursor-pointer md:hidden"
          onClick={() => setMenuOpen(true)}
        >
          <img 
            src={menuOpen ? CloseMenuIcon : HamburgerIcon}
            alt="Menu"
          />
        </button>
      </header>
      {/* Product introduction */}
      <div className="mt-42 mx-8 pt-12 pb-8 px-6 bg-white rounded-lg border-1 border-gray-200 relative md:mt-60 md:mx-auto md:min-w-[750px] md:p-12">
        <img 
          src={LogoMastercraft}
          alt="mastercraft"
          className="absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-1/2"
        />
        <p className="text-[22px]/6 font-[700] text-center md:text-[28px]">Mastercraft Bamboo Monitor Riser</p>
        <p className="text-gray-500 text-center mt-4">A beautiful & handcrafted monitor stand to reduce neck and eye strain</p>
        <div className="flex justify-center gap-2 mt-8 md:mt-10 md:justify-between">
          <button
            type="button"
            title="Back this project"
            onClick={() => {
              dispatch(changeBackProjectOption(null));
              setbackProjectOpen(true);
            }}
            className="bg-green-400 text-white font-[700] rounded-full py-3 px-10 hover:cursor-pointer hover:bg-green-700"
          >
            Back this project
          </button>
          <button
            type="button"
            onClick={() => setBookmarked(!bookmarked)}
            className="text-gray-500 font-[700] rounded-full flex items-center group md:bg-gray-200 hover:cursor-pointer"
          >
            {/* Bookmark icon */}
            <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg"
              className={bookmarked ? "text-green-700 group-hover:text-green-400" : "text-[#2F2F2F] group-hover:text-gray-500"}
            >
              <g fill="none" fillRule="evenodd">
                <circle fill="currentColor" cx="28" cy="28" r="28" />
                <path fill={bookmarked ? "white" : "#B1B1B1"} d="M23 19v18l5-5.058L33 37V19z" />
              </g>
            </svg>
            <span className={`ml-4 mr-6 ${bookmarked ? 'text-green-700' : ''} hidden md:inline`}>
              {bookmarked ? 'Bookmarked' : 'Bookmark'}
            </span>
          </button>
        </div>
      </div>
      {/* Product backers and cash */}
      <div className="mt-8 mx-8 px-6 py-8 bg-white rounded-lg border-1 border-gray-200 md:min-w-[750px] md:mx-auto md:p-12">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col min-w-[150px] items-center md:items-start">
            <span className="text-[24px] font-[700] md:text-[32px]">${cash.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
            <span className="text-gray-500 font-[500]">of $100,000 backed</span>
          </div>
          <div className="border-b-2 my-6 mx-8 border-gray-100 md:my-0 md:mx-12 md:border-l-2" />
          <div className="flex flex-col min-w-[150px] items-center md:items-start">
            <span className="text-[24px] font-[700] md:text-[32px]">{backers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
            <span className="text-gray-500 font-[500]">total backers</span>
          </div>
          <div className="border-b-2 my-6 mx-8 border-gray-100 md:my-0 md:mx-12 md:border-l-2" />
          <div className="flex flex-col min-w-[150px] items-center md:items-start">
            <span className="text-[24px] font-[700] md:text-[32px]">56</span>
            <span className="text-gray-500 font-[500]">days left</span>
          </div>
        </div>
        <div className="bg-gray-100 rounded-full mt-8 h-[12px] md:h-[16px]">
          <div className="bg-green-400 h-full rounded-full" style={{ width: `${Math.min(cash/100000*100, 100)}%` }} />
        </div>
      </div>
      {/* Product description */}
      <div className="mt-8 mx-8 px-6 py-8 bg-white rounded-lg border-1 border-gray-200 flex flex-col gap-8 md:mx-auto md:p-12 md:max-w-[750px]">
        <span className="text-[20px] font-[700]">About this project</span>
        <p className="text-gray-500 text-[14px]/6 md:text-[16px]/7">
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
          to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
          your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
        </p>
        <p className="text-gray-500 text-[14px]/6 md:text-[16px]/7">
          Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
          to allow notepads, pens, and USB sticks to be stored under the stand.
        </p>
        <PledgeCard 
          title="Bamboo Stand"
          description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list."
          amountCash={25}
          amountLeft={amountStandard}
          onClick={() => {
            dispatch(changeBackProjectOption('standard'));
            setbackProjectOpen(true);
          }}
          disabled={amountStandard === 0}
        />
        <PledgeCard 
          title="Black Edition Stand"
          description="You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included."
          amountCash={75}
          amountLeft={amountBlack}
          onClick={() => {
            dispatch(changeBackProjectOption('black'));
            setbackProjectOpen(true);
          }}
          disabled={amountBlack === 0}
        />
        <PledgeCard 
          title="Mahogany Special Edition"
          description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included."
          amountCash={200}
          amountLeft={amountMahogany}
          onClick={() => {
            dispatch(changeBackProjectOption('mahogany'));
            setbackProjectOpen(true);
          }}
          disabled={amountMahogany === 0}
        />
      </div>
      {/* Modals */}
      <BackProject
        isOpen={backProjectOpen}
        onClose={() => setbackProjectOpen(false)}
        onPledge={() => setThankYouOpen(true)}
      />
      <ThankYou
        isOpen={thankYouOpen}
        onClose={() => setThankYouOpen(false)}
      />
    </main>
  )
}

export default App;
