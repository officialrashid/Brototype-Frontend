import ReviewDetails from "../../components/Reviewer/Dashboard/reviewDetails";
import Sidebar from "../../components/Reviewer/Sidebar/sidebar";
import TimeLineUp from "../../components/Reviewer/Dashboard/TimeLineUp";
const ReviewerDashboard = () => {
    return (
        <>
        <Sidebar/>
        <div className="h-auto flex-1  bg-custom-background">
        <ReviewDetails/>
            <TimeLineUp/>
  
        </div>
        </>
    );
}

export default ReviewerDashboard;
