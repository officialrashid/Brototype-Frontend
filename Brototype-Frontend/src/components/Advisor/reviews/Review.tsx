import ReviewRow from "./ReviewRow"
import ReviewHead from "./ReviewHead"
import ReviewSearchBar from "../schedule /RevieSearchBar"
import { useEffect, useState } from "react"
import { getScheduledReviewData } from "../../../redux-toolkit/reviewSlice"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
const Review = () => {
    const dispatch = useDispatch()
    const scheduledReviewDatas = useSelector(state => state?.review?.scheduledData)
    const [filteredData, setFilteredData] = useState(scheduledReviewDatas)
    const searchFn = (searInp: string) => {

        console.log(searInp, 'hellloo');

        const searchData = scheduledReviewDatas.filter((data: any) => {
            console.log(data.name);

            return data.name.toLowerCase().includes(searInp.toLowerCase())

        }



        )
        setFilteredData(searchData)


    }
    useEffect(() => {
        const getStudentDetails = async () => {
            const studentData = await axios.get(`http://localhost:6001/review/assigned-reviews/65ed8fc3afcda5149bbf0166`)
            console.log(studentData, 'studenrnttttt');

            dispatch(getScheduledReviewData(studentData.data))




        }

        getStudentDetails()

    }, [])

    return (
        <>
            <ReviewSearchBar searchFn={searchFn} />
            <ReviewHead />
            {<ReviewRow reviewData={filteredData} />}
        </>
    )
}



export default Review