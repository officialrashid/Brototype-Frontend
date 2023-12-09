import Calendar from "../../components/Reviewer/calender/Calendar";
import Sidebar from "../../components/Reviewer/Dashboard/sidebar"
const Event = () => {
    return (
        <>
        <Sidebar/>
      <div className="h-auto flex-1  bg-custom-background">
            <Calendar/>
        </div>
        </>
    );
}

export default Event;
