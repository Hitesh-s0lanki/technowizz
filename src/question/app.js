import Ball from '../assets/9ball.jpg'
import River from '../assets/river.jpg'
export const arr = [
    {
        question: ["9 Balls Weight Puzzle"," You have 9 balls, equally big, equally heavy - except for one, which is a little heavier.","Minimun number of trial to identify the heavier ball if you could use a pair of balance scales"],
        image:[Ball,'https://www.mathsisfun.com/puzzles/images/bal-scales.svg'],
        options:[ "5 times", "3 times", "4 times", "2 times"],
        answer: "2 times"
    },
    {
        question: ["Sequence Puzzle","Which number should replace the question mark in the series?","2, 5, 10, 17, ?"],
        image:['https://img.freepik.com/free-vector/number-collection-with-animals_23-2147801792.jpg','https://cdn.pixabay.com/photo/2015/11/03/08/56/question-mark-1019820_960_720.jpg'],
        options:[ "26", "27", "28", "29"],
        answer: "28"
    },
    {
        question: ["River-Crossing problems","Four soldiers need to cross a river.Two of them can cross at a Time.Each take certain amount of time as follows","First -> 1min , 2 -> 2min , 3 -> 5min , 4 -> 10min . Minimun amount of time required for all 4 to reach to next end Point"],
        image:['https://i0.wp.com/www.justin.my/wp-content/uploads/2012/05/River-Test-Solution-3-Jealous-Husbands-Main.jpg',River],
        options:[ "20min", "19min", "17min", "18min"],
        answer: "17min"
    }
]