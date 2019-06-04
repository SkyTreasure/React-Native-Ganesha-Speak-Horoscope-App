export default function getZodiac(day, month) {
  var zodiac = [
    {},
    {
      name: "Capricorn",
      date: "Dec 22 - Jan 19",
      compatible: "Pisces, Scorpio, Virgo, and Taurus",
      element: "Earth",
      summary: "",
      image: "capricorn_main.png",
      id: 9
    },
    {
      name: "Aquarius",
      date: "Jan 20 - Feb 18",
      compatible: "Gemini and Libra",
      element: "Air",
      summary: "",
      image: "aquarius_main.png",
      id: 10
    },
    {
      name: "Pisces",
      date: "Feb 19 - March 20",
      compatible: "Scorpio and Cancer",
      element: "Water",
      summary: "",
      image: "pisces_main.png",
      id: 11
    },
    {
      name: "Aries",
      date: "Mar 21 to Apr 19",
      compatible: "Aquarius, Sagittarius, Leo, and Gemini",
      element: "Fire",
      summary: "",
      image: "aries_main.png",
      id: 0
    },
    {
      name: "Taurus",
      date: "Apr 20 to May 20",
      compatible: "Virgo and Pisces",
      element: "Earth",
      summary: "",
      image: "taurus_main.png",
      id: 1
    },
    {
      name: "Gemini",
      date: "May 21 to June 20",
      compatible: "Aquarius and Libra",
      element: "Air",
      summary: "",
      image: "gemini_main.png",
      id: 2
    },
    {
      name: "Cancer",
      date: "June 21 - July 22",
      compatible: "Scorpio and Pisces",
      element: "Water",
      summary: "",
      image: "cancer_main.png",
      id: 3
    },
    {
      name: "Leo",
      date: "July 23 - Aug 22",
      compatible: "Sagittarius, Libra, Gemini, and Aries",
      element: "Fire",
      summary: "",
      image: "leo_main.png",
      id: 4
    },
    {
      name: "Virgo",
      date: "Aug 23 - Sep 22",
      compatible: "Taurus and Capricorn",
      element: "Earth",
      summary: "",
      image: "virgo_main.png",
      id: 5
    },
    {
      name: "Libra",
      date: "Sep 23 - Oct 22",
      compatible: "Leo and Sagittarius",
      element: "Air",
      summary: "",
      image: "libra_main.png",
      id: 6
    },
    {
      name: "Scorpio",
      date: "Oct 23 - Nov 21",
      compatible: "Scorpio and Pisces",
      element: "Water",
      summary: "",
      image: "scorpio_main.png",
      id: 7
    },
    {
      name: "Sagittarius",
      date: "Nov 22 - Dec 21",
      compatible: "Leo, Aries, Aquarius, and Libra",
      element: "Fire",
      summary: "",
      image: "sagittarius_main.png",
      id: 8
    },
    {
      name: "Capricorn",
      date: "Dec 22 - Jan 19",
      compatible: "Pisces, Scorpio, Virgo, and Taurus",
      element: "Earth",
      summary: "",
      image: "capricorn_main.png",
      id: 9
    }
  ];
  var last_day = ["", 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
  if (day && month) {
    if (parseInt(day) > last_day[parseInt(month)]) {
      console.log("1>>>", zodiac[parseInt(month) * 1 + 1].name);
      return zodiac[parseInt(month) * 1 + 1];
    } else {
      console.log("2>>", zodiac[parseInt(month)].name);
      return zodiac[parseInt(month)];
    }
  }
}
