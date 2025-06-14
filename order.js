flatpickr("input[type='date']", {
  dateFormat: "d/m/Y",
  locale: {
    firstDayOfWeek: 1, // Monday is the first day of the week
    weekdays: {
      shorthand: ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'],
      longhand: ['Neděle', 'Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota']
    },
    months: {
      shorthand: ['Led', 'Úno', 'Bře', 'Dub', 'Kvě', 'Čvn', 'Čvc', 'Srp', 'Zář', 'Říj', 'Lis', 'Pro'],
      longhand: ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec']
    }
  }
});
const form = document.getElementById('orderForm');
const responseDiv = document.getElementById('response');
const formatCzechDate = (dateStr) => {
  if (!dateStr) return '';
  const months = [
    'leden', 'únor', 'březen', 'duben', 'květen', 'červen',
    'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'
  ];
  const [day, month, year] = dateStr.split('/');
  return `${parseInt(day)}. ${months[parseInt(month) - 1]} ${year}`;
};
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const params = new URLSearchParams();
  for (const [key, value] of formData.entries()) {
    if (key === 'datestart' || key === 'dateend') {
      params.append(key, formatCzechDate(value));
    } else {
      params.append(key, value);
    }
  }
  try {
    const res = await fetch(`/api/proxy.js/`+encodeURIComponent("https://aukapi.onrender.com/order?usr=mailer&pwd=mailer&to=" + params.toString()));
    const data = await res.json();
    responseDiv.textContent = `Stav: ${data.status}`;
  } catch (error) {
    responseDiv.textContent = 'Chyba při odesílání požadavku.';
    console.error(error);
  }
});