import ReviewDetails from "../../components/Reviewer/Dashboard/reviewDetails";
import Sidebar from "../../components/Reviewer/Sidebar/sidebar";
import TimeLineUp from "../../components/Reviewer/Dashboard/TimeLineUp";
import Graph from "../../components/Reviewer/Dashboard/Graph";
import Rating from "../../components/Reviewer/Dashboard/Rating";
import UpcomingReviews from "../../components/Students/Dashboard/UpcomingReviews";
const ReviewerDashboard = () => {
    return (
        <>
        <Sidebar/>
        <div className="h-auto flex-1  bg-custom-background">
        <ReviewDetails/>
            <TimeLineUp/>
    
            <UpcomingReviews />
        </div>
        <Rating/>
        <Graph/>
        </>
    );
}

export default ReviewerDashboard;
