import { Avatar, Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Question from "./Question";
import logo from "../assets/logical-thinking.png";
import Profile from "../assets/boy.png"
import { useAuthContext } from "../context/auth_context";


const rules = [
  "To See the Score put /#/score in Url",
  "The Time remaining is shown in the Left Top Corner of the white Screen",
  "The system automatically shuts down when the time limit is over, Submit before the time is up or else your response will not be Recorded",
  "Each Question contain certain Points",
  "Don't try to change the tab or else you will redirect to login screen",
  "The Participants just need to click on the Right Choice / Correct option from the multiple choices /options given with each question. For Multiple Choice Questions, each question has four options, and the candidate has to click the appropriate option ",
  "Candidates are requested to take the Competition honestly, ethically, and should follow all the instructions",
  "After Click on Start Time will Start and You Can't revert Back"
]

const Home = () => {
  const [toggle, setToggle] = useState(true);

  const { getUser } = useAuthContext()
  const user = getUser()

  const onChange = () => {
    setToggle(!toggle);
  };

  if (toggle) {
    return (
      <div className="rounded-lg drop-shadow-2xl bg-white p-3 w-1/2">
        <div className=" m-10 main p-10 flex flex-col gap-2 justify-center items-center" >
          <Heading textAlign="center">
            <Avatar>
              <Image src={logo} />
            </Avatar>{" "}
            Logical Quiz
          </Heading>
          <div className="p-2 flex items-center justify-center gap-5">
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar name={user.name1} src={Profile} />
              <Box>
                <Heading size='md'>{user.name1}</Heading>
                <Text>Participant 1</Text>
              </Box>
            </Flex>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar name={user.name2} src={Profile} />
              <Box>
                <Heading size='md'>{user.name2}</Heading>
                <Text>Participant 2</Text>
              </Box>
            </Flex>
          </div>


          <Box margin={1} >
            {rules.map((element, index)=>{
              return <Text fontSize="md" padding={1}>{`${index + 1}.${element}`}</Text>
            })}
          </Box>
        </div>
        <div className="changeQuestion flex justify-center">
          <Button colorScheme="whatsapp" size="lg" onClick={onChange}>
            Start
          </Button>
        </div>
      </div>
    ); 
  }
  return <Question onChange={onChange} />;
};

export default Home;
