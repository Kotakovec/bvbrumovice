document.addEventListener("DOMContentLoaded", () => {
    // Inicializace kalendáře pro každý apartmán
    document.querySelectorAll(".book-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const apartment = e.target.closest(".apartment");
            const calendarContainer = apartment.querySelector(".calendar-container");
            
            // Skrýt všechny ostatní kalendáře
            document.querySelectorAll(".calendar-container").forEach(el => {
                if (el !== calendarContainer) el.style.display = "none";
            });
            
            // Přepnout zobrazení kalendáře
            calendarContainer.style.display = calendarContainer.style.display === "none" ? "block" : "none";
            
            // Inicializace Flatpickr
            if (calendarContainer.style.display === "block") {
                const dateInput = apartment.querySelector(".booking-date");
                flatpickr(dateInput, {
                    mode: "range",
                    minDate: "today",
                    dateFormat: "d.m.Y",
                });
            }
        });
    });

    // Odeslání rezervace
    document.querySelectorAll(".confirm-btn").forEach(btn => {
        btn.addEventListener("click", async () => {
            const apartment = btn.closest(".apartment");
            const apartmentId = apartment.getAttribute("data-id");
            const dateInput = apartment.querySelector(".booking-date");
            const [checkIn, checkOut] = dateInput.value.split(" to ");
            
            if (!checkIn || !checkOut) {
                alert("Vyberte prosím termín!");
                return;
            }
            
            try {
                const response = await fetch("booking.php", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        apartment_id: apartmentId,
                        check_in: checkIn,
                        check_out: checkOut,
                    }),
                });
                
                const result = await response.json();
                alert(result.message);
            } catch (error) {
                alert("Chyba při rezervaci!");
            }
        });
    });
});