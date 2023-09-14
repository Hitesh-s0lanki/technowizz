import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useAuthContext } from "./context/auth_context";

const Score = () => {
  const { getAllScore } = useAuthContext();

  const [arr, setArr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const scoreData = await getAllScore();
      setArr(scoreData);
    };

    fetchData();
  }, [getAllScore]);
  return (
    <div className="bg-orange-200 h-screen flex items-center justify-center">
      <div className="container overflow-auto h-2/3 w-1/2">
        <TableContainer
          className="p-10 rounded"
          boxShadow="dark-lg"
          bgColor={"white"}
        >
          <Table variant="simple" size={"lg"}>
            <TableCaption>Score Board</TableCaption>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th isNumeric>Score</Th>
                <Th>Time</Th>
              </Tr>
            </Thead>
            <Tbody>
              {arr.map((element) => {
                console.log(element);
                return (
                  <Tr>
                    <Td>{element.name}</Td>
                    <Td isNumeric>{element.score}</Td>
                    <Td>{element.time}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Score;
