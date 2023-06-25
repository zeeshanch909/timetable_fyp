export const validateTeacherSchedule = (schedule, newScheduleData) => {
  const isConflict = schedule.some((existingSlot) => {
    const isOverlapping =
      (newScheduleData.startTime >= existingSlot.startTime &&
        newScheduleData.startTime <= existingSlot.endTime) ||
      (newScheduleData.endTime >= existingSlot.startTime &&
        newScheduleData.endTime <= existingSlot.endTime);

    return isOverlapping;
  });

  return isConflict;
};

export const validateSubjectSchedule = (schedule, newScheduleData) => {
  const isConflict = schedule.some((existingSlot) => {
    const isOverlapping =
      (newScheduleData.startTime >= existingSlot.startTime &&
        newScheduleData.startTime <= existingSlot.endTime) ||
      (newScheduleData.endTime >= existingSlot.startTime &&
        newScheduleData.endTime <= existingSlot.endTime);

    return isOverlapping;
  });

  return isConflict;
};

export const validateRoomSchedule = (schedule, newScheduleData) => {
  const isConflict = schedule.some((existingSlot) => {
    const isOverlapping =
      (newScheduleData.startTime >= existingSlot.startTime &&
        newScheduleData.startTime <= existingSlot.endTime) ||
      (newScheduleData.endTime >= existingSlot.startTime &&
        newScheduleData.endTime <= existingSlot.endTime);

    return isOverlapping;
  });

  return isConflict;
};
