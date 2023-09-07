import { useEffect, useState } from "react";

function Courses(){
    const [courses, setCourse]=useState(null);

    useEffect(()=>{
        function callBack2(data){
            setCourse(data);
        }
        function callBack1(res){
           res.Json().then(callBack2);
        }
        fetch("http://localhost:3000/users/courses",{
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(callBack1)
    },[]);

    return (
        <div>
            {JSON.stringify(courses)}
        </div>
    )
}

export default Courses;