TweenLite.set(".pageBg", { xPercent: -50, yPercent: -50 });
TweenLite.set(".pageWrapper", { left: "50%", perspective: 1000 });
TweenLite.set(".page", { transformStyle: "preserve-3d" });
TweenLite.set(".back", { rotationY: -180 });
TweenLite.set([".back", ".front"], { backfaceVisibility: "hidden" });

$(".page").click(function () {
  if (pageLocation[this.id] === undefined || pageLocation[this.id] == "right") {
    zi = $(".left").length + 1;
    TweenMax.to($(this), 1, {
      force3D: true,
      rotationY: -180,
      transformOrigin: "-1px top",
      className: "+=left",
      z: zi,
      zIndex: zi,
    });
    TweenLite.set($(this), { className: "-=right" });
    pageLocation[this.id] = "left";
  } else {
    zi = $(".right").length + 1;
    TweenMax.to($(this), 1, {
      force3D: true,
      rotationY: 0,
      transformOrigin: "left top",
      className: "+=right",
      z: zi,
      zIndex: zi,
    });
    TweenLite.set($(this), { className: "-=left" });
    pageLocation[this.id] = "right";
  }
});

$(".front").hover(
  function () {
    TweenLite.to($(this).find(".pageFoldRight"), 0.3, {
      width: "50px",
      height: "50px",
      backgroundImage:
        "linear-gradient(45deg,  #fefefe 0%,#f2f2f2 49%,#ffffff 50%,#ffffff 100%)",
    });
  },
  function () {
    TweenLite.to($(this).find(".pageFoldRight"), 0.3, {
      width: "0px",
      height: "0px",
    });
  }
);

$(".back").hover(
  function () {
    TweenLite.to($(this).find(".pageFoldLeft"), 0.3, {
      width: "50px",
      height: "50px",
      backgroundImage:
        "linear-gradient(135deg,  #ffffff 0%,#ffffff 50%,#f2f2f2 51%,#fefefe 100%)",
    });
  },
  function () {
    TweenLite.to($(this).find(".pageFoldLeft"), 0.3, {
      width: "0px",
      height: "0px",
    });
  }
);

var pageLocation = [],
  lastPage = null;
zi = 0;

// $(window).on("load", function () {
//   setTimeout(function () {
//     // allowing 3 secs to fade out loader
//     $(".page-loader").fadeOut("slow");
//   }, 1500);
// });

// ========= trasition to show

// time aboveeeeeeee
const displayTime1 = document.querySelector(".display-time");
// Time
function showTime() {
  let time = new Date();
  displayTime1.innerText = time.toLocaleTimeString("en-US", { hour12: false });
  setTimeout(showTime, 1000);
}

showTime();

// Date
function updateDate() {
  let today = new Date();

  // return number
  let dayName = today.getDay(),
    dayNum = today.getDate(),
    month = today.getMonth(),
    year = today.getFullYear();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // value -> ID of the html element
  const IDCollection = ["day", "daynum", "month", "year"];
  // return value array with number as a index
  const val = [dayWeek[dayName], dayNum, months[month], year];
  for (let i = 0; i < IDCollection.length; i++) {
    document.getElementById(IDCollection[i]).firstChild.nodeValue = val[i];
  }
}

updateDate();

window.addEventListener("load", function () {
  document.getElementById("preloader").style.display = "none";
});
