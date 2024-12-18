import { z } from "zod"

const CGMSchema = z.object({
  address1: z.string().min(1, { message: "Address 1 is required." }),
  city: z.string().min(1, { message: "City is required." }),
  dateOfBirth: z.date({ required_error: "Date of Birth is required." }),
  email: z.string().min(1, { message: "Email is required." }).email({ message: "Invalid email address" }),
  employer: z.string().min(1, { message: "Employer is required." }),
  firstName: z.string().min(1, { message: "First Name is required." }),
  lastName: z.string().min(1, { message: "Last Name is required." }),
  memberId: z.string(),
  notes: z.string(),
  phone: z.string().min(1, { message: "Phone is required." }),
  postalCode: z.string().min(1, { message: "Postal Code is required." }),
  prescription: z.string(),
  state: z.string().min(1, { message: "State/Region is required." }),
  submitter: z.enum(["Patient Navigator", "Self"], { required_error: "You need to select who is sibmitting this form." }),
  unitNumber: z.string(),
})

export default CGMSchema