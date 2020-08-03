import React, { useEffect, useState } from "react";
import "./App.css";
import { getShifts } from "./utils/getShifts";
import { filterShifts } from "./utils/filterShifts";
function App() {
  const [shiftData, setShiftData] = useState([]);

  //we could update this by staffType from the response
  const [staffType, setStaffType] = useState("gp");

  // We could also search the shift data for certain GP surgeries somewhere here---
  useEffect(() => {
    async function fetchData() {
      const result = await getShifts();
      return result;
    }
    fetchData().then((res) => {
      const { statusCode, data } = res;
      // we need to check the statusCode and the data length,
      // just in case the statusCode is different, or there are no shifts in the data!
      if (statusCode === 200 && data.length > 0) {
        const availableShifts = filterShifts(data, staffType);
        setShiftData(availableShifts);
      }
    });
  }, []);
  return (
    <div className="App">
      <h1>View available shifts</h1>
      {!shiftData.length > 0 ? (
        <p>loading...</p>
      ) : (
        <div className="shiftWrapper">
          {shiftData.map((shift, index) => {
            const {
              practice: { name },
              startDatetime,
              endDatetime,
              hourlyRate,
              applicationIds,
            } = shift;

            // would be worth checking these are valid dates
            const formattedStartDate = new Date(startDatetime);
            const formattedEndDate = new Date(endDatetime);

            return (
              <div className="shift" key={`shift-${index}`}>
                <p>Practice Name:</p>
                <p>{name}</p>
                <p>Shift start date:</p>
                <p>{formattedStartDate.toLocaleString()}</p>
                <p>Shift end date:</p>
                <p>{formattedEndDate.toLocaleString()}</p>
                <p>Number of applications:</p>
                <p>{applicationIds.length}</p>
                <p>Hourly rate:</p>
                <p>{hourlyRate}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
