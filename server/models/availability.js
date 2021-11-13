const dailyAvailability = {
  startTime: {
    type: Number,
  },
  endTime: {
    type: Number,
  },
};

exports.weeklyAvailability = {
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
};

