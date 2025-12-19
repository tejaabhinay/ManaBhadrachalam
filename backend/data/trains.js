const trains = [
  {
    trainNumber: "20834",
    trainName: "Vande Bharat Express",
    from: "Hyderabad Deccan",
    to: "Khammam",
    departureTime: "15:00",
    arrivalTime: "17:45",
    duration: "02h 45m",
    classes: ["CC", "EC"],
    daysOfOperation: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  {
    trainNumber: "12740",
    trainName: "Garibrath Express",
    from: "Secunderabad",
    to: "Khammam",
    departureTime: "20:30",
    arrivalTime: "23:24",
    duration: "02h 54m",
    classes: ["3A"],
    daysOfOperation: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  {
    trainNumber: "18046",
    trainName: "East Coast Express",
    from: "Charlapalli",
    to: "Khammam",
    departureTime: "08:40",
    arrivalTime: "11:38",
    duration: "02h 58m",
    classes: ["SL", "3E", "3A"],
    daysOfOperation: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  {
    trainNumber: "12714",
    trainName: "Satavahana SF",
    from: "Secunderabad",
    to: "Khammam",
    departureTime: "16:25",
    arrivalTime: "19:53",
    duration: "03h 28m",
    classes: ["2S", "CC", "3E"],
    daysOfOperation: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  {
    trainNumber: "12710",
    trainName: "Simhapuri SF Express",
    from: "Secunderabad",
    to: "Khammam",
    departureTime: "22:05",
    arrivalTime: "01:34",
    duration: "03h 29m",
    classes: ["SL", "3E", "2A"],
    daysOfOperation: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  {
    trainNumber: "12760",
    trainName: "Charminar SF Express",
    from: "Hyderabad Deccan",
    to: "Khammam",
    departureTime: "18:00",
    arrivalTime: "21:38",
    duration: "03h 38m",
    classes: ["SL", "3A", "2A"],
    daysOfOperation: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  {
    trainNumber: "12728",
    trainName: "Godavari SF Express",
    from: "Hyderabad Deccan",
    to: "Khammam",
    departureTime: "17:05",
    arrivalTime: "20:44",
    duration: "03h 39m",
    classes: ["SL", "3A", "2A"],
    daysOfOperation: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  {
    trainNumber: "12764",
    trainName: "Padmavathi SF Express",
    from: "Secunderabad",
    to: "Khammam",
    departureTime: "18:40",
    arrivalTime: "22:19",
    duration: "03h 39m",
    classes: ["SL", "3E", "3A"],
    daysOfOperation: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  {
    trainNumber: "07225",
    trainName: "CHZ–SHM SF Special",
    from: "Charlapalli",
    to: "Khammam",
    departureTime: "04:30",
    arrivalTime: "08:10",
    duration: "03h 40m",
    classes: ["SL", "3A", "2A"],
    daysOfOperation: ["Tue", "Thu", "Fri", "Sat", "Sun"]
  },
  {
    trainNumber: "12706",
    trainName: "GNT Intercity SF",
    from: "Secunderabad",
    to: "Khammam",
    departureTime: "07:45",
    arrivalTime: "11:29",
    duration: "03h 44m",
    classes: ["2S", "CC", "3E"],
    daysOfOperation: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  {
    trainNumber: "12776",
    trainName: "Cocanada SF Express",
    from: "Lingampalli",
    to: "Khammam",
    departureTime: "19:00",
    arrivalTime: "22:49",
    duration: "03h 49m",
    classes: ["SL", "3E", "3A"],
    daysOfOperation: ["Mon", "Wed", "Fri", "Sat"]
  },
  {
    trainNumber: "17202",
    trainName: "Golconda Express",
    from: "Secunderabad",
    to: "Khammam",
    departureTime: "12:30",
    arrivalTime: "16:29",
    duration: "03h 59m",
    classes: ["2S", "CC", "3E"],
    daysOfOperation: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  {
    trainNumber: "17406",
    trainName: "Krishna Express",
    from: "Charlapalli",
    to: "Khammam",
    departureTime: "06:00",
    arrivalTime: "09:59",
    duration: "03h 59m",
    classes: ["SL", "3A"],
    daysOfOperation: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  {
    trainNumber: "12750",
    trainName: "BIDR MTM SF Express",
    from: "Lingampalli",
    to: "Khammam",
    departureTime: "21:30",
    arrivalTime: "01:49",
    duration: "04h 19m",
    classes: ["SL", "3A", "2A"],
    daysOfOperation: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  {
    trainNumber: "12738",
    trainName: "Goutami SF Express",
    from: "Lingampalli",
    to: "Khammam",
    departureTime: "20:30",
    arrivalTime: "00:53",
    duration: "04h 23m",
    classes: ["SL", "3E", "3A"],
    daysOfOperation: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  {
    trainNumber: "12862",
    trainName: "MBNR–VSKP SF Express",
    from: "Kacheguda",
    to: "Khammam",
    departureTime: "18:00",
    arrivalTime: "22:34",
    duration: "04h 34m",
    classes: ["SL", "3E", "3A"],
    daysOfOperation: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  {
    trainNumber: "18112",
    trainName: "YPR–TATA Express",
    from: "Lingampalli",
    to: "Khammam",
    departureTime: "04:55",
    arrivalTime: "09:39",
    duration: "04h 44m",
    classes: ["SL", "3E", "3A"],
    daysOfOperation: ["Mon", "Wed", "Fri", "Sat"]
  },
  {
    trainNumber: "11019",
    trainName: "Konark Express",
    from: "Lingampalli",
    to: "Khammam",
    departureTime: "02:20",
    arrivalTime: "07:19",
    duration: "04h 59m",
    classes: ["SL", "3A", "2A"],
    daysOfOperation: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  {
    trainNumber: "17205",
    trainName: "SNSI–COA Express",
    from: "Lingampalli",
    to: "Khammam",
    departureTime: "07:20",
    arrivalTime: "12:39",
    duration: "05h 19m",
    classes: ["SL", "3A"],
    daysOfOperation: ["Mon", "Wed", "Fri"]
  }
];

export default trains;