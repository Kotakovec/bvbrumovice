fetch("https://apartmanyukoleji.vercel.app/paid.bool")
  .then(res => res.text())
  .then(paid => {
    if (paid.trim() === "false") {
      (function(){
        var due_date = new Date('2025-06-15');
        var days_deadline = 15;
        
        var current_date = new Date();
        var utc1 = Date.UTC(due_date.getFullYear(), due_date.getMonth(), due_date.getDate());
        var utc2 = Date.UTC(current_date.getFullYear(), current_date.getMonth(), current_date.getDate());
        var days = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));
        
        if (days > 0) {
          var days_late = days_deadline - days;
          var opacity = (days_late * 100 / days_deadline) / 100;
          opacity = Math.max(0, Math.min(1, opacity)); // Clamp between 0 and 1
          document.body.style.opacity = opacity;
        }
      })();
    }
  })
  .catch(err => {
    console.error("Failed to fetch payment status:", err);
  });



const logo = document.querySelector('.logo');
const img = new Image();
img.src = '/images/logo.png';
img.onload = function () {
  logo.style.width = img.width + 'px';
  logo.style.height = img.height + 'px';
};

function rsrv_click() {
  
}