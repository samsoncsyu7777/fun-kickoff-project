const dailyAvailability = {
  startTime: {
    type: String,
  },
  endTime: {
    type: String,
  },
};
export const weeklyAvailability = {
  monday: {
    type: dailyAvailability,
  },
  tuesday: {
    type: dailyAvailability,
  },
  wednesday: {
    type: dailyAvailability,
  },
  thursday: {
    type: dailyAvailability,
  },
  friday: {
    type: dailyAvailability,
  },
  saturday: {
    type: dailyAvailability,
  },
  sunday: {
    type: dailyAvailability,
  },
}