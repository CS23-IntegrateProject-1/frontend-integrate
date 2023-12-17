import { Search2Icon } from "@chakra-ui/icons"
import { Avatar, Box, Text, Button, Center, Flex, Input, InputGroup, InputLeftElement, Radio, RadioGroup, Tab, TabList, TabPanel, TabPanels, Tabs, useToast } from "@chakra-ui/react"
import TextStyle from "../../../../theme/foundations/textStyles"
import { useState } from "react";
import { Axios } from "../../../../AxiosInstance";
import { NavLink } from "react-router-dom";
export const AddFriend = () => {
    const [username, setUsername] = useState('');
    const [userImg, setUserImg] = useState('');
    const [userId, setUserId] = useState('');
    const [, setTabIndex] = useState(0);
    const toast = useToast()
    const [shouldShowChatButton, setShouldShowChatButton] = useState(false);
    const [phNoSearch, setPhNoSearch] = useState('');
    //get fri data from main page
    // const location = useLocation();
    // const {setFriData, friData} = location.state;
    
    const onClickHandler = () => {
               
        if(!shouldShowChatButton){
            Axios.post(`/feature1/friend/add`, {
                friend_id: userId
            }, { withCredentials: true })
                .then((response) => {
                    if (response.status == 200) {
                        toast({
                            render: () => (
                              <Box color='white' textAlign={'center'} p={3} bg='brand.200' borderRadius={'20'}>
                                Added!
                              </Box>
                            ),
                            duration: 1500,
                            isClosable: true,
                          }); 
                        console.log(response.data);
                        console.log('successfully added')
                        setShouldShowChatButton(true);
                    }
                    
                    
                })
                .catch((error) => {
                    console.error("Error fetching username data:", error);
                    if(error.response.status == 409){
                        toast({
                            render: () => (
                              <Box color='white' textAlign={'center'} p={3} bg='brand.200' borderRadius={'20'}>
                                Already in the friend List!
                              </Box>
                            ),
                            duration: 1500,
                            isClosable: true,
                          });
                    }
                });
        }
      };
      
      {shouldShowChatButton ? (
        <Button bg={'brand.100'} color={'brand.200'} colorScheme='brand.200' variant='solid'>
          Chat
        </Button>
      ) : (
        <Button onClick={onClickHandler} bg={'brand.100'} color={'brand.200'} colorScheme='brand.200' variant='solid'>
          Add Friend
                </Button>
            )}

            if(shouldShowChatButton){
                setTimeout(() => {
                        const text = document.getElementById('text');
                        if (text) {
                                text.style.visibility = 'visible';
                        }
                }, 800);
            }

        const handleSearch = () => {
        console.log(username);
        const url = `/feature1/search/friends?username=${username}`;
        Axios.get(url, { withCredentials: true })
            .then((response) => {
                if (response.status == 200) {
                    console.log(response.data);
                    console.log(response.data.name);
                    console.log(response.data.avatar); //give null no data
                    console.log(response.data.user_id);
                    setUserId(response.data.user_id);
                    setUsername(response.data.name);
                    setUserImg(response.data.avatar);
                     //give null no data
                     //change the state of the box to visible
                    const box = document.getElementById('box');
                    if(box)
                    box.style.visibility = 'visible';
                    
                }
                
            })
            .catch((error) => {
                console.error("Error fetching username data:", error);
            });
    }
    const handleSearchphNo = () => {
        console.log(phNoSearch);
        const url = `/feature1/search/friends?phone=${phNoSearch}`;
        Axios.get(url, { withCredentials: true })
            .then((response) => {
                if (response.status == 200) {
                    console.log(response.data);
                    console.log(response.data.name);
                    console.log(response.data.avatar); //give null no data
                    console.log(response.data.user_id);
                    setUserId(response.data.user_id);
                    setUsername(response.data.name);
                    setUserImg(response.data.avatar);
                     //give null no data
                     //change the state of the box to visible
                const box = document.getElementById('box');
               if(box) box.style.visibility = 'visible';
                }
                
            })
            .catch((error) => {
                console.error("Error fetching username data:", error);
            });
    }

    return (
        <Box>
            {/* {
                JSON.stringify(location.state, null, 2)
            } */}
            <RadioGroup defaultValue='username'>
                <Tabs onChange={(index) => setTabIndex(index)} position="relative" variant="unstyled">
                    <TabList>
                        <Tab>
                            <Radio value="username" colorScheme="brand.200">Username</Radio>
                        </Tab>
                        <Tab>
                            <Radio value="phno" colorScheme="brand.200">Phone Number</Radio>
                        </Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            {/* User Name */}
                            <Box position={'relative'} overflow={'hidden'}>
                                <InputGroup size='md' borderRadius={'2'}>
                                    <Input border={'none'}
                                        pr='4.5rem'
                                        placeholder='Search by username'
                                        bg={'gray.200'}
                                        color={'black'}
                                        borderRadius={'20'}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                    <InputLeftElement>
                                        <Button _hover={{ bg: 'none' }} position={'absolute'} left={'-1'} bg={'none'} h='1.75rem' size='sm' onClick={handleSearch}>
                                            <Search2Icon />
                                        </Button>
                                    </InputLeftElement>
                                </InputGroup>
                            </Box>
                        </TabPanel>
                        <TabPanel>
                            {/* PhNO */}
                            <Box position={'relative'} overflow={'hidden'}>
                                <InputGroup size='md' borderRadius={'2'}>
                                    <Input border={'none'}
                                        pr='4.5rem'
                                        placeholder='Search by username'
                                        bg={'gray.200'}
                                        color={'black'}
                                        borderRadius={'20'}
                                        onChange={(e) => setPhNoSearch(e.target.value)}
                                    />
                                    <InputLeftElement>
                                        <Button _hover={{ bg: 'none' }} position={'absolute'} left={'-1'} bg={'none'} h='1.75rem' size='sm' onClick={handleSearchphNo}>
                                            <Search2Icon />
                                        </Button>
                                    </InputLeftElement>
                                </InputGroup>
                            </Box>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </RadioGroup>
            <Box mt={4} id="box" style={{ visibility: 'hidden' }}>
                <Center py={2} flexDirection={'column'}>
                    {username ? <Avatar src={userImg} size={'xl'} /> :
                        <Avatar src='https://bit.ly/broken-link' size={'xl'} />}
                    <Text py={2} color={'brand.200'} fontSize={TextStyle.h2.fontSize} fontWeight={TextStyle.h2.fontWeight}>{username}</Text>
                </Center>
                <Text ml={4} id="text" color={'brand.100'} visibility={'hidden'}>
                    <Center>
                        Start chatting with your new friend now!
                    </Center>
                </Text>
                <Flex py={2} justifyContent={'space-evenly'} >
                    {/* Chat */}
                    {shouldShowChatButton ? (
                        <NavLink to="/communitychat">
                        <Button  bg={'brand.100'} color={'brand.200'} colorScheme='brand.200' variant='outline'>
                            Chat
                        </Button>
                        </NavLink>
                    ) : (
                        <Button  bg={'brand.100'} color={'brand.200'} colorScheme='brand.200' variant='solid'
                        onClick={onClickHandler}>
                            Add Friend
                        </Button>
                    )}

                </Flex>
            </Box>
        </Box>
    )
}