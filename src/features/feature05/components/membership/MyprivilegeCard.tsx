import { Box, Heading, Text } from '@chakra-ui/react'
import { Card, CardBody } from '@chakra-ui/react'
// import { BsBookmarkStarFill } from "react-icons/bs";

export const MyprivilegeCard = () => {
  return (
      <Box>
          <Card
              direction={{ base: 'column', sm: 'row' }}
              variant='filled'
              h="216px"
              borderRadius="0px"
              rowGap="0px"
              display="flex"
              flexDirection="column"
              boxShadow="-30px 50px 100px 20px rgba(101, 23, 188, 0.7) inset , 100px -60px 120px 20px rgba(222, 190, 246, 0.2) inset"          
          >

              <Box display="flex" flexDirection="row" alignItems="flex-start" padding="55px 0px 0px 15px">
                  <CardBody>
                      <Heading size='3xl' textShadow="-2px 0px 3px grey">Regular</Heading>

                      <Text py='2' fontWeight="bold">
                          500/1000 points
                      </Text>
                  </CardBody>

                  <Box marginTop="8px" backgroundColor="brand.400" padding="36px 19px" borderTopLeftRadius="125px" borderBottomLeftRadius="125px" borderTopRightRadius="10px" borderBottom="0px">
                  </Box>
              </Box>

          </Card>
      </Box>
  )
}
