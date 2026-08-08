// src/data/doctors.js

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

const specializations = [
  "Cardiologist",
  "Neurologist",
  "Dermatologist",
  "Orthopedic Surgeon",
  "Pediatrician",
  "General Physician",
  "Gynecologist",
  "ENT Specialist",
  "Ophthalmologist",
  "Psychiatrist",
  "Radiologist",
  "Oncologist",
];

const hospitals = [
  "Modern Hospital",
  "City Care Hospital",
  "LifeCare Medical Center",
];

const cities = [
  "Pune",
  "Mumbai",
  "Nashik",
  "Nagpur",
  "Aurangabad",
];


// Generate history for each doctor
const createHistory = (doctorIndex) => {
  return [
    {
      id: `H-${doctorIndex}-001`,
      date: "2026-01-15",
      type: "Joined Hospital",
      hospital: hospitals[doctorIndex % hospitals.length],
      description: "Joined the hospital as a medical specialist.",
    },
    {
      id: `H-${doctorIndex}-002`,
      date: "2026-03-10",
      type: "Department Transfer",
      hospital: hospitals[(doctorIndex + 1) % hospitals.length],
      description: "Transferred to a new department.",
    },
    {
      id: `H-${doctorIndex}-003`,
      date: "2026-05-20",
      type: "Performance Review",
      hospital: hospitals[doctorIndex % hospitals.length],
      description: "Annual professional performance review completed.",
    },
  ];
};


// Generate 256 doctors
export const doctors = Array.from({ length: 256 }, (_, index) => {

  const firstName =
    firstNames[index % firstNames.length];

  const lastName =
    lastNames[index % lastNames.length];

  const specialization =
    specializations[index % specializations.length];

  return {
    id: `DOC-${String(index + 1).padStart(4, "0")}`,

    name: `Dr. ${firstName} ${lastName}`,

    email: `doctor${index + 1}@hospital.com`,

    phone: `+91 98${String(index).padStart(8, "0")}`,

    specialization,

    experience: `${5 + (index % 21)} years`,

    qualification:
      index % 2 === 0
        ? "MBBS, MD"
        : "MBBS, MS",

    hospital:
      hospitals[index % hospitals.length],

    city:
      cities[index % cities.length],

    patients:
      100 + (index * 7) % 500,

    status:
      index % 10 === 0
        ? "On Leave"
        : "Available",

    joiningDate:
      "2020-06-15",

    consultationFee:
      500 + (index % 10) * 100,

    history: createHistory(index + 1),
  };
});