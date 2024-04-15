import React, { useState, useEffect } from "react";
import "../style/calculate_attendance.scss";
import Navbar1 from '../components/navbar1'
import Footer from '../components/footer'

const calculate_attendance = () => {
  const [totalDays, setTotalDays] = useState(0);
  const [presentDays, setPresentDays] = useState(0);
  const [remainingDays, setRemainingDays] = useState(0);
  const [attendancePercentage, setAttendancePercentage] = useState(0);
  const [daysRequiredFor75, setDaysRequiredFor75] = useState(0);

  const handleCalculate = () => {
    if (totalDays > 0 && presentDays >= 0 && remainingDays >= 0) {
      const totalAttendance =
        ((presentDays + remainingDays) / (totalDays + remainingDays)) * 100;
      setAttendancePercentage(totalAttendance);

      const requiredDaysFor75 = Math.ceil(
        0.75 * (totalDays + remainingDays) - presentDays
      );
      setDaysRequiredFor75(requiredDaysFor75 > 0 ? requiredDaysFor75 : 0);
    }
  };
  return (
    <>
    <Navbar1 />
      <div className="attendance-calc">
        <div className="a-calc-heading">
          <h1>Attendance Calculator</h1>
        </div>
        <div id="calc-container">
          <label>
            Total Days :
            <input
              type="number"
              value={totalDays}
              onChange={(e) => setTotalDays(parseInt(e.target.value, 10))}
            />
          </label>
          <br />
          <label>
            Present Days :
            <input
              type="number"
              value={presentDays}
              onChange={(e) => setPresentDays(parseInt(e.target.value, 10))}
            />
          </label>
          <br />
          <label>
            Remaining Days :
            <input
              type="number"
              value={remainingDays}
              onChange={(e) => setRemainingDays(parseInt(e.target.value, 10))}
            />
          </label>
          <br />
          <button id="calc-btn" onClick={handleCalculate}>
            Calculate
          </button>
          <br />
        <p>Attendance Percentage: {attendancePercentage.toFixed(2)}%</p>
        <p>Remaining days needed for 75%: {daysRequiredFor75}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default calculate_attendance;
