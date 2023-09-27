import Ball from "../assets/9ball.jpg";
import River from "../assets/river.jpg";
import Waterfall from "../assets/waterfall.png";
import WaterJug from "../assets/waterjug.jpg";

const array = [
  {
    question: [
      "Caves and A Thief Puzzle",
      "There are 13 caves arranged in a circle. In one of the caves, there is a thief. Each day the thief has an option to move to any of the right or left caves or stay in the cave where he existed the day before.",
      " Cops are also permitted to enter any two caves they want each day. What is the minimum number of days required to ensure that the thief is apprehended by the cops?",
    ],
    image: [
      "https://prepinsta.com/wp-content/uploads/2022/01/puzzle-on-thief-and-caves.webp",
      "https://static.wixstatic.com/media/e0c388_44da0bef69a54115a7f50c62fa7ce493~mv2.png/v1/fit/w_1000%2Ch_739%2Cal_c%2Cq_80,enc_auto/file.jpg",
    ],
    options: ["10 days", "11 days", "12 days", "15 days"],
    answer: "12 days",
  },
  {
    question: [
      "3 Ants and 1 Triangle",
      "There are 3 ants sitting on three corners of a triangle. All ants randomly pick a direction and start moving along edge of the triangle. What is the probability that any two ants non collide?",
      " Every ant has two choices (pick either of two edges going through the corner on which ant is initially sitting.Out of 2^3 possibilities",
    ],
    image: [
      "https://puzzlefry.com/wp-content/uploads/2015/07/Three_ants_and_triangle_puzzle.jpg",
      "https://png.pngtree.com/png-vector/20201125/ourlarge/pngtree-ant-clipart-thinking-emoji-red-ant-png-image_2468609.jpg",
    ],
    options: ["3/8", "2/8", "6/8", "7/8"],
    answer: "2/8",
  },
  {
    question: [
      "4-Queens Problem",
      "The 4-queens puzzle is the problem of placing 4 queens on an 4 x 4 chessboard such that no two queens attack each other.",
      "Answer all distinct solutions to the 4-queens puzzle.Example the Above Board for reference",
    ],
    image: [
      "https://developers.google.com/static/optimization/images/queens/sol_4x4_b.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3pWz5eqoRpTtwJ63LQ6WL-rCnGk2eVe2toaUf0nboJutVVWqC_JqIjAYH-fQvj16flz8&usqp=CAU",
    ],
    options: ["3", "1", "4", "2"],
    answer: "2",
  },
  {
    question: [
      "3 black hats 2 white hats",
      "There are 3 black hats and 2 white hats in a box. Three men (we will call them Tom, Bob, and Bill) each reach into the box and place one of the hats on his own head. They cannot see what color hat they have chosen",
      "The men are situated in a way that Tom can see the hats on Bob and Bill's heads, Bob can only see the hat on Bill's head and Bill cannot see any hats. When Tom is asked if he knows the color of the hat he is wearing, he says no. When Bob is asked if he knows the color of the hat he is wearing he says no. When Bill is asked if he knows the color of the hat he is wearing he says yes and he is correct.",
    ],
    image: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRma0UgFpRyfrkAOR10Lzhz64Iz9uTSzsEFRqrp0tfDyGuEoCG5KzkSibRChR4Yg16aN4k&usqp=CAU",
      "https://i.ytimg.com/vi/ztmd5nS5fAQ/maxresdefault.jpg",
    ],
    options: [
      "Bill has a black hat",
      "Bill has a white hat",
      "None of them",
      "  ",
    ],
    answer: "Bill has a black hat",
  },
  {
    question: [
      "Complete Form Puzzle",
      "In the context of cybersecurity, what does 'VPN' stand for?",
      "In data storage, what does 'SSD' stand for?",
    ],
    image: [
      "https://www.kaspersky.com/content/en-global/images/repository/isc/2020/what-is-a-vpn.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2022/11/DZ/HT/FF/139444584/512-gb-ssd.jpg",
    ],
    options: [
      "Virtual Private Network, Solid State Drive",
      "Very Powerful Network, Super Speed Disk",
      "Verified Personal Network, System Storage Device",
      "Virtual Public Network, Sequential Storage Drive",
    ],
    answer: "Virtual Private Network, Solid State Drive",
  },
  {
    question: [
      "Connectivity",
      "Which technology is used to connect devices wirelessly over short distances, often for tasks like transferring files between smartphones?",
    ],
    image: [
      "https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/04/wireless-network.jpg",
    ],
    options: ["Bluetooth", "Wi-Fi", "NFC", "RFID"],
    answer: "Bluetooth",
  },
  {
    question: [
      "Travelling Salesman Problem",
      "Given a set of cities and the distance between every pair of cities, the problem is to find the shortest possible route that visits every city exactly once and returns to the starting point",
      " Tour exists and in fact, many such tours exist, the problem is to find a minimum distance travel for Tour.For the image above",
    ],
    image: [
      "https://media.geeksforgeeks.org/wp-content/cdn-uploads/Euler12.png",
      "https://brilliant-staff-media.s3-us-west-2.amazonaws.com/tiffany-wang/n8vrnuIV0J.png",
    ],
    options: ["95 distance", "80 distance", "105 distance", "75 distance"],
    answer: "80 distance",
  },
  {
    question: [
      "Average age Question",
      "At present Sravan is four times Jagan's age. After 8 years Sravan will be 3 times Jagan's age. How many times will Sravan's age be in another 8 years times with respect to Jagan's age?",
    ],
    image: [
      "https://png.pngtree.com/png-vector/20190130/ourmid/pngtree-in-the-beginning-of-the-school-season-the-two-brothers-went-png-image_585707.jpg",
    ],
    options: ["2.5", "3", "4.5", "2"],
    answer: "2.5",
  },

  {
    question: [
      "Birthday Puzzle",
      "On a new year day, two old friends (A and B) meet at a party. As they met after a long time person B wanted person A to guess his birthday. As both friends are not in touch for a long time person A was unable to guess his birthday. So person B decided to give some hints. Below are the hints:",
      "The day before yesterday I was 25 and next year I will be 28, then person B asked person A to find his birthday.The above condition can be true for only one day in the year",
    ],
    image: [
      "https://www.homemade-gifts-made-easy.com/image-files/birthday-wishes-for-son-mood-image-800x533.jpg",
      "https://assets.ppassets.com/p-2bbeHXT4Kcjp9yCy1qS49E/flyer/media_asset/jpeg_small",
    ],
    options: ["December 31", "Janunary 1", "December 30", "Feb 29"],
    answer: "December 31",
  },
  {
    question: [
      "Rich or Poor",
      "A place has two kinds of residents, Poor, who always tell the truth, and their opposites, Rich, who always lie. You encounter two people A and B. What are A and B if A says “B is a Poor” and B says “The two of us are opposite types” ?",
    ],
    image: [
      "https://qph.cf2.quoracdn.net/main-qimg-22c320f66f913e980106ee48de7ae6f3-lq",
    ],
    options: [
      "B are Rich and A are Poor",
      "A are Rich and B are Poor",
      "Both A and B are Poor",
      "Both A and B are Rich",
    ],
    answer: "Both A and B are Rich",
  },
  {
    question: [
      "Torch and Bridge",
      "There are 4 persons (A, B, C and D) who want to cross a bridge in night.A takes 1 minute to cross the bridge.B takes 2 minutes to cross the bridge.C takes 5 minutes to cross the bridge.D takes 8 minutes to cross the bridge.",
      "There is only one torch with them and the bridge cannot be crossed without the torch. There cannot be more than two persons on the bridge at any time, and when two people cross the bridge together, they must move at the slower person's pace.",
    ],
    image: [
      "https://i.ytimg.com/vi/tgExN8cJqBY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDPfEJe3ufGj6y1wY1sbVlLPGivVw",
      "https://media.geeksforgeeks.org/wp-content/uploads/20191212130625/Torch-and-Bridge.png",
    ],
    options: ["14min", "15min", "16min", "17min"],
    answer: "15min",
  },
  {
    question: [
      "Man fell in well Puzzle",
      "A man fell in a 50m deep well. He climbs 4 meters up and slips 3 meters down in one day. How many days would it take for him to come out of the well?",
    ],
    image: [
      "https://i0.wp.com/nenow.in/wp-content/uploads/2020/06/201911240209466259_Man-chased-by-ghost-in-dreams-falls-into-well_SECVPF.jpg?fit=620%2C414&ssl=1",
    ],
    options: ["50Days", "49Days", "48Days", "47Days"],
    answer: "47Days",
  },
  {
    question: [
      "9 Balls Weight Puzzle",
      " You have 9 balls, equally big, equally heavy - except for one, which is a little heavier.",
      "Minimum number of trial to identify the heavier ball if you could use a pair of balance scales",
    ],
    image: [Ball, "https://www.mathsisfun.com/puzzles/images/bal-scales.svg"],
    options: ["5 times", "3 times", "4 times", "2 times"],
    answer: "2 times",
  },
  {
    question: [
      "Number Puzzle",
      "How many numbers are there between 100 and 500.",
      "Which are even?Including the 100 and 500",
    ],
    image: [
      "https://i.ytimg.com/vi/hGbLSsiatYI/maxresdefault.jpg",
      "https://cdn.firstcry.com/education/2022/10/17172728/Even-Numbers-For-Children-To-Improve-Math-Skills.jpg",
    ],
    options: ["200", "201", "202", "203"],
    answer: "201",
  },
  {
    question: [
      "Android",
      "Which company developed the Android operating system?",
    ],
    image: [
      "https://yt3.googleusercontent.com/ytc/AOPolaT3loIM5Ycx0up2M8jbXmI_kAYfUWhSXn4PiTaCY18=s900-c-k-c0x00ffffff-no-rj",
    ],
    options: ["Microsoft", "Google", "Apple", "Samsung"],
    answer: "Google",
  },
  {
    question: [
      "Informative",
      " If 'Car' is related to 'Fuel' in the same way as 'Computer' is related to _______.",
    ],
    image: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Desktop_computer_clipart_-_Yellow_theme.svg/2000px-Desktop_computer_clipart_-_Yellow_theme.svg.png",
    ],
    options: ["Software", "Monitor", "Keyboard", "Internet"],
    answer: "Software",
  },
  {
    question: [
      "Least number you need to get two pairs",
      "A drawer has ten blue, ten white, and ten red socks. Without looking at them you pull some socks out. ",
      "What is the least number of socks you need to pull to ensure you get TWO pairs of matching socks?",
    ],
    image: [
      "https://infinitesimallysmallcom.files.wordpress.com/2021/05/socks.jpg?w=1024",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC0XvudSkVjBq0syYseWArL3nKq8AG6QlcYA&usqp=CAU",
    ],
    options: ["10", "11", "9", "8"],
    answer: "10",
  },
  {
    question: [
      "Camel and Banana Puzzle",
      "A person has 3000 bananas and a camel. The person wants to transport the maximum number of bananas to a destination which is 1000 KMs away, using only the camel as a mode of transportation. The camel cannot carry more than 1000 bananas at a time and eats a banana every km it travels.",
      " What is the maximum number of bananas that can be transferred to the destination using only camel (no other mode of transportation is allowed).If the camel doesn't eat a banana while returning",
    ],
    image: [
      "https://static.vecteezy.com/system/resources/previews/005/162/511/non_2x/cartoon-camel-isolated-on-white-background-free-vector.jpg",
      "https://prepinsta.com/wp-content/uploads/2020/07/Camel-Puzzle-1.webp",
    ],
    options: ["0", "533", "833", "333"],
    answer: "833",
  },
  {
    question: [
      "Sequence Puzzle",
      "Which number should replace the question mark in the series?",
      "2, 5, 10, 17, ?",
    ],
    image: [
      "https://img.freepik.com/free-vector/number-collection-with-animals_23-2147801792.jpg",
      "https://cdn.pixabay.com/photo/2015/11/03/08/56/question-mark-1019820_960_720.jpg",
    ],
    options: ["25", "27", "28", "29"],
    answer: "28",
  },
  {
    question: [
      "River-Crossing problems",
      "Four soldiers need to cross a river.Two of them can cross at a Time.Each take certain amount of time as follows.[Note:keep in mind,the highest time should be considered while travelling]",
      "First -> 1min , 2 -> 2min , 3 -> 5min , 4 -> 10min . Minimum amount of time required for all 4 to reach to next end Point",
    ],
    image: [
      "https://i0.wp.com/www.justin.my/wp-content/uploads/2012/05/River-Test-Solution-3-Jealous-Husbands-Main.jpg",
      River,
    ],
    options: ["16min", "19min", "17min", "18min"],
    answer: "17min",
  },

  {
    question: [
      "Infinite Water Supply Problem",
      "Minimum Number of steps required to accumulate 4 Litre of Water.When we have infinite water supply.",
      "There are two vessels of capacities 3 liter and 5 liter respectively.Steps count is taken for each of this step such as Transfer, Empty, Fill",
    ],
    image: [Waterfall, WaterJug],
    options: ["6 steps", "8 steps", "9 steps", "7 steps"],
    answer: "6 steps",
  },
  {
    question: [
      "Database",
      "A database is an organized collection of structured information, or data, typically stored electronically in a computer system.Name the most Popular Databases in 2023?",
    ],
    image: [
      "https://media.geeksforgeeks.org/wp-content/uploads/20230329130256/Most-Popular-Databases-in-2023.png",
    ],
    options: ["MongoBD", "Oracle", "MySQL", "Firebase"],
    answer: "Oracle",
  },
];

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    // Generate random number
    var j = Math.floor(Math.random() * (i + 1));

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

export const arr = shuffleArray(array);
