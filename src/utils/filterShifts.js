export function filterShifts(arr, filterStaffType) {
  return arr.filter((shift) => {
    const { status, locum, staffType, startDatetime } = shift;
    const todaysDate = new Date();
    const convertedStartDate = new Date(startDatetime);
    return (
      status === "POSTED" &&
      convertedStartDate > todaysDate &&
      locum === null &&
      staffType === filterStaffType
    );
  });
}
