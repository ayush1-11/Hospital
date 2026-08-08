const firstNames = [
  "Aarav",
  "Vivaan",
  "Aditya",
  "Arjun",
  "Rahul",
  "Rohan",
  "Vikram",
  "Karan",
  "Amit",
  "Raj",
  "Neha",
  "Priya",
  "Ananya",
  "Sneha",
  "Pooja",
  "Kavya",
];

const lastNames = [
  "Sharma",
  "Patel",
  "Verma",
  "Deshmukh",
  "Kulkarni",
  "Joshi",
  "Mehta",
  "Singh",
  "Gupta",
  "Reddy",
  "Shah",
  "Malhotra",
];

const diagnoses = [
  "Hypertension",
  "Diabetes",
  "Migraine",
  "Fever",
  "Asthma",
  "Heart Disease",
  "Back Pain",
  "Skin Allergy",
  "Arthritis",
  "Respiratory Infection",
  "Thyroid Disorder",
  "Gastritis",
];

const treatments = [
  "Medication",
  "Physiotherapy",
  "Minor Surgery",
  "Regular Checkup",
  "Blood Test",
  "X-Ray",
  "MRI Scan",
  "Observation",
  "Follow-up Treatment",
  "Emergency Treatment",
];

const hospitals = [
  "Modern Hospital",
  "City Care Hospital",
  "LifeCare Medical Center",
];

const doctors = [
  "Dr. Aarav Sharma",
  "Dr. Rahul Patel",
  "Dr. Priya Verma",
  "Dr. Rohan Deshmukh",
  "Dr. Neha Kulkarni",
  "Dr. Amit Joshi",
];


// Generate patient medical history
const createMedicalHistory = (patientIndex) => {
  return [
    {
      id: `MH-${patientIndex}-001`,
      date: "2026-01-10",
      diagnosis:
        diagnoses[patientIndex % diagnoses.length],
      treatment:
        treatments[patientIndex % treatments.length],
      doctor:
        doctors[patientIndex % doctors.length],
      hospital:
        hospitals[patientIndex % hospitals.length],
      notes:
        "Initial consultation completed.",
    },

    {
      id: `MH-${patientIndex}-002`,
      date: "2026-03-15",
      diagnosis:
        diagnoses[(patientIndex + 2) % diagnoses.length],
      treatment:
        treatments[(patientIndex + 2) % treatments.length],
      doctor:
        doctors[(patientIndex + 1) % doctors.length],
      hospital:
        hospitals[(patientIndex + 1) % hospitals.length],
      notes:
        "Patient returned for follow-up consultation.",
    },

    {
      id: `MH-${patientIndex}-003`,
      date: "2026-06-20",
      diagnosis:
        diagnoses[(patientIndex + 4) % diagnoses.length],
      treatment:
        treatments[(patientIndex + 4) % treatments.length],
      doctor:
        doctors[(patientIndex + 2) % doctors.length],
      hospital:
        hospitals[(patientIndex + 2) % hospitals.length],
      notes:
        "Treatment completed successfully.",
    },
  ];
};


// Generate patients
export const patients = Array.from(
  { length: 500 },
  (_, index) => {

    const firstName =
      firstNames[index % firstNames.length];

    const lastName =
      lastNames[index % lastNames.length];

    return {
      id: `PAT-${String(index + 1).padStart(5, "0")}`,

      name:
        `${firstName} ${lastName}`,

      age:
        18 + ((index * 7) % 65),

      gender:
        index % 2 === 0
          ? "Male"
          : "Female",

      email:
        `patient${index + 1}@example.com`,

      phone:
        `+91 97${String(index).padStart(8, "0")}`,

      bloodGroup:
        ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"][
          index % 8
        ],

      city:
        ["Pune", "Mumbai", "Nashik", "Nagpur", "Aurangabad"][
          index % 5
        ],

      address:
        `${100 + index} Main Street`,

      emergencyContact:
        `+91 96${String(index).padStart(8, "0")}`,

      diagnosis:
        diagnoses[index % diagnoses.length],

      treatment:
        treatments[index % treatments.length],

      doctor:
        doctors[index % doctors.length],

      hospital:
        hospitals[index % hospitals.length],

      admissionDate:
        "2026-05-15",

      dischargeDate:
        index % 4 === 0
          ? "2026-05-20"
          : null,

      status:
        index % 4 === 0
          ? "Discharged"
          : "Active",

      insurance:
        index % 3 === 0
          ? "Star Health Insurance"
          : "No Insurance",

      medicalHistory:
        createMedicalHistory(index + 1),
    };
  }
);