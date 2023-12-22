import React, { useState, useEffect } from "react";

function TodayButton() {

    const [num, setNum] = useState(0);
    const [date, setDate] = useState()

    function clickHandler() {
        setNum(num + 1);
        let today = new Date()
        let day = ("0" + today.getDate()).slice(-2);
        let month = ("0" + (today.getMonth() + 1)).slice(-2);
        let year = today.getFullYear()
        setDate(`${year}-${month}-${day}`)
        console.log(date);
    }

    return (
        <>
            <button onClick={clickHandler}>TODAY</button>
        </>
    )
}
export default TodayButton