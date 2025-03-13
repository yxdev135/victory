import React,{useState} from "react";
import Header from "../widgets/Header/header";
import MarathonPage from "./MarathonPage/MarathonPage";
import MarathonResultPage from "./MarathonResultsPage/MarathonResultsPage";
import FeedbackPage from "./FeedbackPage/FeedbackPage";
import QuestionPage from "./QuestionPage/QuestionPage";
import Modal from "../assets/ui/Modal/Modal";
import MarathonProgrammPage from "./MarathonProgrammPage/MarathonProgrammPage";
import MarathonGoPage from "./MarathonGoPage/MarathonGoPage";
import Footer from "../widgets/Footer/Footer";


function MainPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };
    
    const closeModal = () => {
        setModalOpen(false);
    };
    return(
        <div>
        <Header openModal={openModal} modalOpen={modalOpen}/>
        <MarathonPage/>
        <MarathonProgrammPage/>
        <MarathonResultPage/>
        <FeedbackPage/>
        <QuestionPage/>
        <MarathonGoPage/>
        <Footer openModal={openModal}/>
        <Modal isOpen={modalOpen} onClose={closeModal} />
        </div>
    )
};

export default MainPage