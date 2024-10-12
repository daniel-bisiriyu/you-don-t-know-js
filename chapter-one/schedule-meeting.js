const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
    const dayStartArr = dayStart.split(":")
   const dayStartHour = dayStartArr[0]
   const dayStartMins = dayStartArr[1]
   const startTimeArr = startTime.split(":")
   const startHour = startTimeArr[0]
   const startMins = startTimeArr[1]
   if (startHour >= dayStartHour) {
      if (Number(startHour) == Number(dayStartHour) && Number(startMins) < Number(dayStartMins)) {
        console.log("false: first")
        return false
      } else {
        const startMinsPlusDuration = Number(startMins) + Number(durationMinutes)
        console.log("startMinsPlusDuration", startMinsPlusDuration)
        let meetingEndTime;
        if (startMinsPlusDuration >= 60) {
            const meetingHours = Math.floor(startMinsPlusDuration/60)
            const endMins = startMinsPlusDuration % 60
            meetingEndTime = `${String(Number(meetingHours) + Number(startHour)).padStart(2,'0')}:${String(endMins).padStart(2, '0')}`
           console.log("if", {meetingEndTime})

        } else {
            meetingEndTime = `${startHour.padStart(2,'0')}:${String(startMinsPlusDuration).padStart(2,'0')}`
            console.log("else", {meetingEndTime})
        }
        if (meetingEndTime > dayEnd) {
                console.log("false: second", meetingEndTime, dayEnd)
                return false
            } else {
                return true
            }
      }

   }
   return false
}

scheduleMeeting("7:00",15); // false