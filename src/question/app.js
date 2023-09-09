import Ball from '../assets/9ball.jpg'
import River from '../assets/river.jpg'
import Waterfall from '../assets/waterfall.png'
import WaterJug from '../assets/waterjug.jpg'

export const arr = [
    {
        question: ["9 Balls Weight Puzzle"," You have 9 balls, equally big, equally heavy - except for one, which is a little heavier.","Minimum number of trial to identify the heavier ball if you could use a pair of balance scales"],
        image:[Ball,'https://www.mathsisfun.com/puzzles/images/bal-scales.svg'],
        options:[ "5 times", "3 times", "4 times", "2 times"],
        answer: "2 times"
    },
    {
        question: ["Number Puzzle","How many numbers are there between 100 and 500.","Which are even?Including the 100 and 500"],
        image:['https://i.ytimg.com/vi/hGbLSsiatYI/maxresdefault.jpg','https://cdn.firstcry.com/education/2022/10/17172728/Even-Numbers-For-Children-To-Improve-Math-Skills.jpg'],
        options:[ "200", "201", "202", "203"],
        answer: "201"
    },
    {
        question: ["Complete Form Puzzle","In the context of cybersecurity, what does 'VPN' stand for?","In data storage, what does 'SSD' stand for?"],
        image:['https://www.kaspersky.com/content/en-global/images/repository/isc/2020/what-is-a-vpn.jpg','https://5.imimg.com/data5/SELLER/Default/2022/11/DZ/HT/FF/139444584/512-gb-ssd.jpg'],
        options:[ "Virtual Private Network, Solid State Drive", "Very Powerful Network, Super Speed Disk", "Verified Personal Network, System Storage Device", "Virtual Public Network, Sequential Storage Drive"],
        answer: "Virtual Private Network, Solid State Drive"
    },
    {
        question: ["Android","Which company developed the Android operating system?"],
        image:['https://yt3.googleusercontent.com/ytc/AOPolaT3loIM5Ycx0up2M8jbXmI_kAYfUWhSXn4PiTaCY18=s900-c-k-c0x00ffffff-no-rj'],
        options:[ "Microsoft", "Google", "Apple", "Samsung"],
        answer: "Google"
    },
    {
        question: ["Informative"," If 'Car' is related to 'Fuel' in the same way as 'Computer' is related to _______."],
        image:['https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Desktop_computer_clipart_-_Yellow_theme.svg/2000px-Desktop_computer_clipart_-_Yellow_theme.svg.png'],
        options:[ "Software", "Monitor", "Keyboard", "Internet"],
        answer: "Software"
    },
    {
        question: ["Sequence Puzzle","Which number should replace the question mark in the series?","2, 5, 10, 17, ?"],
        image:['https://img.freepik.com/free-vector/number-collection-with-animals_23-2147801792.jpg','https://cdn.pixabay.com/photo/2015/11/03/08/56/question-mark-1019820_960_720.jpg'],
        options:[ "25", "27", "28", "29"],
        answer: "28"
    },
    {
        question: ["River-Crossing problems","Four soldiers need to cross a river.Two of them can cross at a Time.Each take certain amount of time as follows.[Note:keep in mind,the highest time should be considered while travelling]","First -> 1min , 2 -> 2min , 3 -> 5min , 4 -> 10min . Minimum amount of time required for all 4 to reach to next end Point"],
        image:['https://i0.wp.com/www.justin.my/wp-content/uploads/2012/05/River-Test-Solution-3-Jealous-Husbands-Main.jpg',River],
        options:[ "16min", "19min", "17min", "18min"],
        answer: "17min"
    },
    {
        question: ["Connectivity","Which technology is used to connect devices wirelessly over short distances, often for tasks like transferring files between smartphones?"],
        image:['https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/04/wireless-network.jpg'],
        options:[ "Bluetooth", "Wi-Fi", "NFC", "RFID"],
        answer: "Bluetooth"
    },
    {
        question: ["Infinite Water Supply Problem","Minimum Number of steps required to accumulate 4 Litre of Water.When we have infinite water supply.","There are two vessels of capacities 3 liter and 5 liter respectively.Steps count is taken for each of this step such as Transfer, Empty, Fill"],
        image:[Waterfall, WaterJug],
        options:[ "6 steps", "8 steps", "9 steps", "7 steps"],
        answer: "6 steps"
    },
    {
        question: ["Database","A database is an organized collection of structured information, or data, typically stored electronically in a computer system.Name the most Popular Databases in 2023?"],
        image:['https://media.geeksforgeeks.org/wp-content/uploads/20230329130256/Most-Popular-Databases-in-2023.png'],
        options:[ "MongoBD", "Oracle", "MySQL", "Firebase"],
        answer: "Oracle"
    },
    {
        question: ["Travelling Salesman Problem","Given a set of cities and the distance between every pair of cities, the problem is to find the shortest possible route that visits every city exactly once and returns to the starting point"," Tour exists and in fact, many such tours exist, the problem is to find a minimum distance travel for Tour.For the image above"],
        image:['https://media.geeksforgeeks.org/wp-content/cdn-uploads/Euler12.png', 'https://brilliant-staff-media.s3-us-west-2.amazonaws.com/tiffany-wang/n8vrnuIV0J.png'],
        options:[ "95 distance", "80 distance", "105 distance", "75 distance"],
        answer: "80 distance"
    },
    {
        question: ["Caves and A Thief Puzzle","There are 13 caves arranged in a circle. In one of the caves, there is a thief. Each day the thief has an option to move to any of the right or left caves or stay in the cave where he existed the day before."," Cops are also permitted to enter any two caves they want each day. What is the minimum number of days required to ensure that the thief is apprehended by the cops?"],
        image:['https://prepinsta.com/wp-content/uploads/2022/01/puzzle-on-thief-and-caves.webp', 'https://static.wixstatic.com/media/e0c388_44da0bef69a54115a7f50c62fa7ce493~mv2.png/v1/fit/w_1000%2Ch_739%2Cal_c%2Cq_80,enc_auto/file.jpg'],
        options:[ "10 days", "11 days", "12 days", "15 days"],
        answer: "12 days"
    },
    {
        question: ["3 Ants and 1 Triangle","There are 3 ants sitting on three corners of a triangle. All ants randomly pick a direction and start moving along edge of the triangle. What is the probability that any two ants non collide?"," Every ant has two choices (pick either of two edges going through the corner on which ant is initially sitting.Out of 2^3 possibilities"],
        image:['https://puzzlefry.com/wp-content/uploads/2015/07/Three_ants_and_triangle_puzzle.jpg', 'https://png.pngtree.com/png-vector/20201125/ourlarge/pngtree-ant-clipart-thinking-emoji-red-ant-png-image_2468609.jpg'],
        options:[ "3/8", "2/8", "6/8", "7/8"],
        answer: "2/8"
    },
    {
        question: ["4-Queens Problem","The 4-queens puzzle is the problem of placing 4 queens on an 4 x 4 chessboard such that no two queens attack each other.","Answer all distinct solutions to the 4-queens puzzle.Example the Above Board for reference"],
        image:['https://developers.google.com/static/optimization/images/queens/sol_4x4_b.png', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3pWz5eqoRpTtwJ63LQ6WL-rCnGk2eVe2toaUf0nboJutVVWqC_JqIjAYH-fQvj16flz8&usqp=CAU'],
        options:[ "3", "1", "4", "2"],
        answer: "2"
    },
    {
        question: ["3 black hats 2 white hats","There are 3 black hats and 2 white hats in a box. Three men (we will call them Tom, Bob, and Bill) each reach into the box and place one of the hats on his own head. They cannot see what color hat they have chosen","The men are situated in a way that Tom can see the hats on Bob and Bill's heads, Bob can only see the hat on Bill's head and Bill cannot see any hats. When Tom is asked if he knows the color of the hat he is wearing, he says no. When Bob is asked if he knows the color of the hat he is wearing he says no. When Bill is asked if he knows the color of the hat he is wearing he says yes and he is correct."],
        image:['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRma0UgFpRyfrkAOR10Lzhz64Iz9uTSzsEFRqrp0tfDyGuEoCG5KzkSibRChR4Yg16aN4k&usqp=CAU', 'https://i.ytimg.com/vi/ztmd5nS5fAQ/maxresdefault.jpg'],
        options:[ "Bill has a black hat", "Bill has a white hat", "None of them", "  "],
        answer: "Bill has a black hat"
    }
]