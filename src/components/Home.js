import { Button, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Question from "./Question";

const Home = () => {
  const [toggle, setToggle] = useState(true);

    const onChange = () =>{
        setToggle(!toggle)
    }

  if (toggle) {
    return (
      <div className="rounded-lg drop-shadow-2xl bg-white p-3">
        <div className="main p-10 h-2/3 w-96">
          <Heading textAlign="center">Logical Quiz</Heading>
          <Text fontSize="md" padding={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            praesentium itaque assumenda placeat eius? Minima nobis ducimus,
            natus iusto reiciendis officia recusandae cumque iure nostrum nemo
            officiis ratione tempore temporibus.
          </Text>
        </div>
        <div className="changeQuestion flex justify-center">
          <Button colorScheme="whatsapp" size="lg" onClick={onChange}>
            Start
          </Button>
        </div>
      </div>
    );
  }
  return (
    <Question onChange = {onChange} />
  )
};

export default Home;
