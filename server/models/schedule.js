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
          requiredSpecialty: String, // Specialty required for the time slot
          assignedEmployee: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Employee',
          },
          // You can include additional properties related to each time slot if needed
        },
      ],
      // Add other properties related to each day if necessary
    },
  ],
      
}, {timestamps:true})

const Schedule = mongoose.model("Schedule", userSchema);

export default Schedule; 