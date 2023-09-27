import {
  Badge,
  Button,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { arr } from "../question/app";
import SubmitPage from "./SubmitPage";
import { useAuthContext } from "../context/auth_context";

const Question = () => {

  console.log(arr.length)
  const [index, setIndex] = useState(0);
  const [ans, setAns] = useState("");
  const [ansArray, setArray] = useState(["","","","","","",""]);

  const [score, setScore] = useState(0)

  const toast = useToast();

  const onTap = async(i) => {
    const newArr = ansArray.map((element,num) => {
      if(num === index){
        return arr[index].options[i]
      }
      return element
    })

    setArray(newArr)
    setAns(arr[index].options[i]);
  };

  const nextTap = () => {
    if (index + 1 !== arr.length) {
      setIndex(index + 1);
    }
  };

  const prevTap = () => {
    if (index !== 0) {
      setIndex(index - 1);
    } else {
      toast({
        title: "First Question",
        status: "warning",
        isClosable: true,
      });
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {SubmitResponse, setUser} = useAuthContext()
 
  const handleSubmit = () => {
    console.log(ansArray)
    let count = 0

    for(let i = 0;i < 7 ;i++){
      if(arr[i].answer === ansArray[i]){
        count ++
      }
    }
    // ansArray.map((element,i)=>{
    //   if(arr[i].answer === element){
    //     count ++
    //   }
    //   return element
    // })
    setScore(count)
    onOpen();
  };

  const SubmitRes = async() =>{
    setIndex(index + 1)
    onClose()
    await SubmitResponse(score, ansArray, timer)
  }

  //Timer Part
    // We need ref in this, because we are dealing
    // with JS setInterval to keep track of it and
    // stop it when needed
    const Ref = useRef(null);
 
    // The state for our timer
    const [timer, setTimer] = useState('00:00:00');
 
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }
 
    const startTimer = async(e) => {
        let { total, hours, minutes, seconds }
                    = getTimeRemaining(e);
        if (total >= 0) {
 
            // update the timer
            // check if less than 10 then we need to
            // add '0' at the beginning of the variable
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        } else {
          await setUser({})
        }
    }
 
    const clearTimer = (e) => {
 
        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next   
        setTimer('00:45:00');
 
        // If you try to remove this line the
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
 
    const getDeadTime = () => {
        let deadline = new Date();
 
        // This is where you need to adjust if
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + 1200);
        return deadline;
    }
 
    // We can use useEffect so that when the component
    // mount the timer will start as soon as possible
 
    // We put empty array to act as componentDid
    // mount only
    useEffect(() => {
        clearTimer(getDeadTime());// eslint-disable-next-line
    }, []);

  if(index === arr.length){
    return (<SubmitPage />)
  }

  return (
    <div className="rounded-lg drop-shadow-2xl mx-20 bg-white p-3 w-2/3">
      <Badge fontSize='1.2rem' padding={1} colorScheme="red">{timer}</Badge>
      <Modal onClose={onClose} size="md" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ready to Submit</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Are You sure?Submit
          </ModalBody>
          <ModalFooter>
            <Button onClick={SubmitRes}>Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <div className="main p-3 mx-4">
        <Heading padding={1}>
          <span className="text-3xl">{index + 1}</span>
          {`.  ${arr[index].question[0]}`}
        </Heading>
        <div className="FirstPart flex justify-between items-center w-full">
          <p className="break-words text-2xl w-2/3">{arr[index].question[1]}</p>
          <Image src={arr[index].image[0]} maxHeight={200} maxWidth={250}></Image>
        </div>
        {arr[index].image.length !== 1 && <div className="FirstPart flex justify-between items-center w-full">
          <Image src={arr[index].image[1]} maxHeight={200} maxWidth={250}></Image>
          <p className="break-words text-2xl w-2/3 text-center">
            {arr[index].question[2]}
          </p>
        </div>}
      </div>
      <div className="main">
        <div className="columns-2 mx-10">
          {arr[index].options.map((element, i) => {
            return (
              <Button
                onClick={() => onTap(i)}
                size="md"
                colorScheme={ans === element ? "orange" : ansArray[index] === element ? "orange":'gray'}
                className="w-full my-2"
                _hover={{ bg: "orange" }}
              >
                {element}
              </Button>
            );
          })}
        </div>
      </div>
      <div className="changeQuestion flex justify-between my-2 mx-10">
        <Button
          colorScheme="teal"
          size="lg"
          variant="outline"
          disabled={index === 0}
          onClick={prevTap}
        >
          Prev
        </Button>
        {index === arr.length - 1 ? (
          <Button
            colorScheme="whatsapp"
            alignContent="right"
            size="lg"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        ) : (
          <Button
            colorScheme="green"
            alignContent="right"
            size="lg"
            onClick={nextTap}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default Question;
