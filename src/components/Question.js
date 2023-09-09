import {
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
import React, {  useState } from "react";
import { arr } from "../question/app";
import SubmitPage from "./SubmitPage";
import { useAuthContext } from "../context/auth_context";

const Question = (props) => {


  const [index, setIndex] = useState(0);
  const [ans, setAns] = useState("");
  const [score,setScore] = useState(0)

  const toast = useToast();

  const onTap = (i) => {
    if(ans !== "" && ans !== arr[index].answer && arr[index].options[i] === arr[index].answer){
      setScore(score + 1)
    } else if(ans === arr[index].answer && arr[index].options[i] !== arr[index].answer){
      setScore(score - 1)
    }
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
  const {SubmitResponse} = useAuthContext()
 
  const handleSubmit = () => {
    console.log(score)
    onOpen();
  };

  const SubmitRes = async() =>{
    setIndex(index + 1)
    onClose()
    const data = await SubmitResponse(score)
    console.log(data)
  }

  if(index === arr.length){
    return (<SubmitPage />)
  }

  return (
    <div className="rounded-lg drop-shadow-2xl mx-20 bg-white p-3 w-2/3">
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
                colorScheme={ans === element ? "orange" : "gray"}
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
