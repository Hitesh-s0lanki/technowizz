const array = [
    {
        question: ["Average age Question","At present Sravan is four times Jagan's age. After 8 years Sravan will be 3 times Jagan's age. How many times will Sravan's age be in another 8 years times with respect to Jagan's age?"],
        image:['https://png.pngtree.com/png-vector/20190130/ourmid/pngtree-in-the-beginning-of-the-school-season-the-two-brothers-went-png-image_585707.jpg'],
        options:[ "2.5", "3", "4.5", "2"],
        answer: "2.5"
    },
    
    
    {
        question: ["Birthday Puzzle","On a new year day, two old friends (A and B) meet at a party. As they met after a long time person B wanted person A to guess his birthday. As both friends are not in touch for a long time person A was unable to guess his birthday. So person B decided to give some hints. Below are the hints:","The day before yesterday I was 25 and next year I will be 28, then person B asked person A to find his birthday.The above condition can be true for only one day in the year"],
        image:['https://www.homemade-gifts-made-easy.com/image-files/birthday-wishes-for-son-mood-image-800x533.jpg',"https://assets.ppassets.com/p-2bbeHXT4Kcjp9yCy1qS49E/flyer/media_asset/jpeg_small"],
        options:[ "December 31", "Janunary 1", "December 30", "Feb 29"],
        answer: "December 31"
    },
    {
        question: ["Rich or Poor","A place has two kinds of residents, Poor, who always tell the truth, and their opposites, Rich, who always lie. You encounter two people A and B. What are A and B if A says “B is a Poor” and B says “The two of us are opposite types” ?"],
        image:['https://qph.cf2.quoracdn.net/main-qimg-22c320f66f913e980106ee48de7ae6f3-lq'],
        options:[ "B are Rich and A are Poor", "A are Rich and B are Poor", "Both A and B are Poor", "Both A and B are Rich"],
        answer: "Both A and B are Rich"
    },
    {
        question: ["Torch and Bridge","There are 4 persons (A, B, C and D) who want to cross a bridge in night.A takes 1 minute to cross the bridge.B takes 2 minutes to cross the bridge.C takes 5 minutes to cross the bridge.D takes 8 minutes to cross the bridge.","There is only one torch with them and the bridge cannot be crossed without the torch. There cannot be more than two persons on the bridge at any time, and when two people cross the bridge together, they must move at the slower person's pace."],
        image:["https://i.ytimg.com/vi/tgExN8cJqBY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDPfEJe3ufGj6y1wY1sbVlLPGivVw",'https://media.geeksforgeeks.org/wp-content/uploads/20191212130625/Torch-and-Bridge.png'],
        options:[ "14min", "15min", "16min", "17min"],
        answer: "15min"
    },
    {
        question: ["Man fell in well Puzzle","A man fell in a 50m deep well. He climbs 4 meters up and slips 3 meters down in one day. How many days would it take for him to come out of the well?"],
        image:["https://i0.wp.com/nenow.in/wp-content/uploads/2020/06/201911240209466259_Man-chased-by-ghost-in-dreams-falls-into-well_SECVPF.jpg?fit=620%2C414&ssl=1"],
        options:[ "50Days", "49Days", "48Days", "47Days"],
        answer: "47Days"
    }
]

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

export const arr = shuffleArray(array)
