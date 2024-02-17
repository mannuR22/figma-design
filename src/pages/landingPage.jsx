import Content from "../components/content";
import NavBar from "../components/NavBar";
import Header from "../components/header";
import MainBody from "../components/mainBody";
import Context from '../Context';
import data from '../assets/db.json';
import Insight from "../components/insight";
import ProgressBar from "../components/progressBar";
import Feature from "../components/feature";
import Discription from "../components/discription";
import LandMarks from "../components/landMarks";
import Map from "../components/map";
import Step from "../components/step";
import { useState } from "react";
import Breadcrumb from "../components/breadCrumb";
import StepComponent from "../components/stepComponent";
import bell from "../assets/bell.png";
import slantArrow from "../assets/north_east.png";
import locImg from "../assets/loc.png";
function LandingPage() {

    const [currStep, setCurrStep] = useState(1);
    const [stepState, setStepState] = useState([
        {
            id: 0,
            title: "Complete Profile",
            subText: "Good job!",
            completionText: "Complete",
            secondaryButtonText: "Download",
            state: 1
        },
        {
            id: 1,
            title: "Step 1",
            subText: "5% of total amount",
            completionText: "Rs " + Math.floor(data.sale.val * 0.05).toLocaleString('en-IN'),
            secondaryButtonText: "Reciept",
            state: 0
        },
        {
            id: 2,
            title: "Step 2",
            subText: "",
            completionText: "Complete",
            secondaryButtonText: "Download",
            state: 0
        },
        {
            id: 3,
            title: "Step 3",
            subText: "We will get back to you in 3 months",
            completionText: "Complete",
            secondaryButtonText: "Download",
            state: 0
        },
        {
            id: 4,
            title: "Step 4",
            subText: "subtext for step 4",
            completionText: "Complete",
            secondaryButtonText: "Download",
            state: 0
        },
        {
            id: 5,
            title: "Step 5",
            subText: "subtext for step 5",
            completionText: "Complete",
            secondaryButtonText: "Download",
            state: 0
        },
    ]);

    return <Context.Provider value={data}>
        <div className="flex w-screen flex-row gap-5px">
            <div className="flex h-screen aspect-nav w-auto">
                <NavBar />
            </div>
            <Content>
                <Header>
                    <button className="bg-blue-500 text-[14px] text-white font-light py-[0.9rem] px-[2rem] ">
                        Complete Profile
                    </button>
                    <img src={bell} alt="bell" />
                </Header>
                <Header>
                    <div className="font-bold text-[1.8rem]">Choose your new site</div>
                    <StepComponent currStep={currStep} />
                </Header>
                <MainBody>

                    <Breadcrumb items={['Market', 'Category 1', 'Theme park site']} />

                    <img className="shadow-lg" src={data.titleImg} alr="park" />
                    
                    <div className="bg-zinc-300 flex flex-col gap-[5px] mt-[0.8rem]">
                        <div className="sticky top-0 z-10 mt-[5px] mx-[5px]">
                            <div className="bg-white flex flex-row w-full h-auto justify-between items-center py-[1rem] px-[1rem]">
                                <div className="w-2/3 h-full  flex flex-col justify-around pl-[1.2rem] items-start">
                                    <span className="my-[0.5rem] text-[2rem] font-bold">{data.title}</span>
                                    <div>
                                        <div className="flex flex-row justify-start items-center py-[0.5rem] text-zinc-500">
                                            <img src={locImg} alt="loc" />
                                            Address of the site
                                        </div>
                                        <div className="flex flex-row">
                                            {data.feature.map((f) => <Feature key={f.id} imgLink={f.img} type={f.type} />)}
                                        </div>

                                    </div>

                                    <button className="text-blue-500 border-blue-500 border bg-white i flex justify-center w-auto py-[0.1rem] px-[0.9rem] items-center my-[2rem] ">
                                        <img src={slantArrow} alt="arrow" />
                                        <span className="relative ml-[0.8rem] underline">
                                            View opportunity on polygon
                                        </span>
                                    </button>
                                    <div className="flex flex-row my-[1rem]">
                                        {data.insights.map((f) => <Insight key={f.id} title={f.type} value={f.value} />)}
                                    </div>
                                </div>
                                <div className="w-1/3 h-full pr-[1.2rem] flex flex-col items-end justify-center">
                                    <button className="bg-blue-500 text-[14px] mb-[0.4rem] text-white font-light py-[0.9rem] px-[4rem] ">
                                        Complete
                                    </button>
                                    <button className="bg-transparent text-blue-500 font-normal text-[14px] py-[0.8rem] px-[1.3rem] border border-blue-500 flex items-center space-x-2">
                                        <span>Site visit</span>
                                        <span className="transition-transform duration-200 hover:scale-125">&gt;</span>
                                    </button>
                                    <ProgressBar val={data.sale.val} max={data.sale.max} />
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex flex-row gap-[5px] px-[5px]">
                            <div className="w-1/2 flex flex-col gap-[5px] overflow-auto h-full">
                                {data.discriptions.map((d) => <Discription key={d.id} title={d.type} para={d.value} />)}
                                <LandMarks landMarks={data.landmarks} />
                                <Map mapURL={data.map} />
                            </div>
                            <div className="w-1/2 flex flex-col gap-[5px]">
                                {stepState.map((s) => <Step state={stepState} setState={setStepState} key={s.id} id={s.id} title={s.title} subText={s.subText} completionText={s.completionText} />)}
                                <div className="flex-grow bg-white"></div>
                            </div>
                        </div>
                    </div>


                </MainBody>
            </Content>
        </div>
    </Context.Provider>
}


export default LandingPage;