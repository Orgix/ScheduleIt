import mongoose from "mongoose";

const userSchema = mongoose.Schema ({
  scheduleName: String,
  scheduleDate: Date,
  scheduleDescription: String,
  status: String, // [draft, finalized, executed]
  conflictResolution: String, //schedule algorithm might return a conflicting schedule, so this will be a status [conflict, cleared]
  shiftDurations: [
    {
      name: String, // Name of the shift duration (e.g., "Short Shift," "Regular Shift")
      abbreviation: String, // Abbreviation (e.g., "4h," "6h")
      allowedBreaks: String, // Description of allowed break durations or policies
      notes: String, // Additional notes or descriptions for the shift duration
      // You can include other properties specific to each shift duration if needed
    },
  ],
  createdDate: Date,
  lastModified: Date,
  // An array of days, each with an array of time slots
  days: [
    {
      date: Date, // Date for the day
      timeSlots: [
        {
          date: Date,
          startTime: String,
          endTime: String,
          specialties: [
            {
              specialty: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Specialty',
              },
              employeeCount: Number, // Number of employees assigned for this specialty
            },
          ],
          employeeCount: Number,
          assignedEmployees: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'Employee',
            },
          ],
          // Include other time slot properties as needed
        },
      ],
      // Add other properties related to each day if necessary
    },
  ],
      
}, {timestamps:true})

const Schedule = mongoose.model("Schedule", userSchema);

export default Schedule; 