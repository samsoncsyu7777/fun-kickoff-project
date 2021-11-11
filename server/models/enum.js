export const Gender = Object.freeze({
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
});

const dailyAvailability = {
  startTime: 10,
  endTime: 22,
};

export const WeeklyAvailability = {
  monday: Object.create(dailyAvailability),
  tuesday: Object.create(dailyAvailability),
  wednesday: Object.create(dailyAvailability),
  thursday: Object.create(dailyAvailability),
  friday: Object.create(dailyAvailability),
  saturday: Object.create(dailyAvailability),
  sunday: Object.create(dailyAvailability),
}

export const payment