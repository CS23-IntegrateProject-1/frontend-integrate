import {
	Box,
	Stack,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	VStack,
} from "@chakra-ui/react";
import { MyRewardsCard } from "../../components/membership/MyRewardsCard";

export const MyRewardsPage = () => {
	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			justifyContent={"center"}
			alignItems={"center"}
			width={"100%"}
		>
			<Tabs
				variant={"soft-rounded"}
				colorScheme={"brand"}
				// index={currentTab}
				// onChange={handleTabChange}
				display={"flex"}
				justifyContent={"center"}
				alignContent={"center"}
			>
				<VStack>
					<TabList>
						<Stack spacing={10} flexDirection={"row"}>
							<Tab
								border="1px solid white"
								color="#FFFFFF"
								whiteSpace={"nowrap"}
								_selected={{
									color: "#FFFFFF",
									borderColor: "#A533C8",
									bgColor: "#A533C8",
								}}
							>
								Active Rewards
							</Tab>
							<Tab
								border="1px solid white"
								color="#FFFFFF"
								_selected={{
									color: "#FFFFFF",
									borderColor: "#A533C8",
									bgColor: "#A533C8",
								}}
							>
								Past Rewards
							</Tab>
						</Stack>
					</TabList>

					<TabPanels>
						<TabPanel>
							<MyRewardsCard
								data={{ isApprove: "", voucher_image: "" }}
							/>
						</TabPanel>
					</TabPanels>
{/* 
					{data?.map((data, index: number) => {
						if (selector === "ongoing") {
							return (
								(data.isApprove === "Rejected") && (
									<MyRewardsCard
										data={{
											isApprove: "",
											voucher_image: "",
										}}
									/>
								)
							);
						} else
							return (
								data.isApprove === "Completed" && (
									<AdvertisementStatusCard
										key={index}
										data={data}
									/>
								)
							);
					})} */}
				</VStack>
			</Tabs>
		</Box>
	);
};


