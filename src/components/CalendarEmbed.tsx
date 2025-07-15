import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { format } from "date-fns";
const CalendarEmbed = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      ...formData,
      date: date ? format(date, "PPP") : null
    });
    // Here you would typically send this data to your backend
  };
  return;
};
export default CalendarEmbed;