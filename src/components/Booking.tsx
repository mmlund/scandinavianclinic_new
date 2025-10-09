import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Clock, Calendar as CalendarIcon, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const Booking = () => {
  const [selectedDuration, setSelectedDuration] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("");

  const durations = [
    { value: "30", label: "30 minutes", price: "$75" },
    { value: "45", label: "45 minutes", price: "$105" },
    { value: "60", label: "60 minutes", price: "$135" },
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
  ];

  const handleBooking = () => {
    if (selectedDuration && selectedDate && selectedTime) {
      alert(`Booking confirmed!\nDuration: ${selectedDuration} minutes\nDate: ${selectedDate.toLocaleDateString()}\nTime: ${selectedTime}`);
    }
  };

  return (
    <section id="booking" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
            Schedule Your Visit
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Book an Appointment
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your appointment length, select a date, and pick your preferred time
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="p-8 md:p-12 shadow-card border-0 bg-gradient-to-br from-background to-secondary/10">
            <div className="space-y-10">
              {/* Step 1: Duration */}
              <div className="animate-slide-in-left">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="text-primary" size={20} />
                    <h3 className="text-xl font-bold text-foreground">
                      Select Appointment Duration
                    </h3>
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  {durations.map((duration) => (
                    <button
                      key={duration.value}
                      onClick={() => setSelectedDuration(duration.value)}
                      className={cn(
                        "p-6 rounded-xl border-2 transition-all hover:scale-105",
                        selectedDuration === duration.value
                          ? "border-primary bg-primary/5 shadow-md"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <div className="text-center">
                        <p className="text-lg font-bold text-foreground mb-1">
                          {duration.label}
                        </p>
                        <p className="text-2xl font-bold text-primary">
                          {duration.price}
                        </p>
                        {selectedDuration === duration.value && (
                          <CheckCircle2 className="text-primary mx-auto mt-2" size={20} />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Date */}
              <div className="animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="text-primary" size={20} />
                    <h3 className="text-xl font-bold text-foreground">
                      Choose Your Date
                    </h3>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                    className="rounded-xl border shadow-sm pointer-events-auto"
                  />
                </div>
              </div>

              {/* Step 3: Time */}
              <div className="animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="text-primary" size={20} />
                    <h3 className="text-xl font-bold text-foreground">
                      Select Time Slot
                    </h3>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={cn(
                        "p-4 rounded-lg border-2 transition-all hover:scale-105 font-medium",
                        selectedTime === time
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Booking Button */}
              <div className="pt-6 border-t">
                <Button
                  onClick={handleBooking}
                  disabled={!selectedDuration || !selectedDate || !selectedTime}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105"
                >
                  {selectedDuration && selectedDate && selectedTime
                    ? "Confirm Appointment"
                    : "Please Select Duration, Date, and Time"}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
