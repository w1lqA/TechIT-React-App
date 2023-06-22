import React from "react";
import User1 from "../assets/user1.png"
import User2 from "../assets/user2.png"
import User3 from "../assets/user3.png"

import SectionTitle from './SectionTitle';
import ReviewCard from "./cards/ReviewCard";

function ReviewsSection() {
    return (
    <section id="reviews" className="bg-black">
        <div>
        <SectionTitle sectionTitle={"Client Reviews"} sectionIcon={"star"}/>
        <div className="container mx-auto px-4 py-16 lg:py-32">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <ReviewCard reviewPhoto={User1} reviewText={`"TechShield Security Suite has provided us with peace of mind. Its robust encryption and real-time threat monitoring have kept our data secure. Highly recommended!"`} reviewName={'Bruno Garcia, Data Scientist'}/>
                <ReviewCard reviewPhoto={User2} reviewText={`"CodeMaster IDE has significantly improved my coding workflow. Its intelligent code completion and version control integration have made development a breeze. I can't imagine coding without it!"`} reviewName={'Hannah Baker, C# Developer'}/>
                <ReviewCard reviewPhoto={User3} reviewText={`"DataHub Analytics Platform has revolutionized our data analysis process. Its advanced visualization capabilities and machine learning algorithms have helped us uncover valuable insights. Truly a game-changer!"`} reviewName={'George Wilson, Backend Developer'}/>
            </div>
        </div>
        </div>
    </section>
    );
}

export default ReviewsSection;