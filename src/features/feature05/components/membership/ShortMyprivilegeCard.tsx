import { Card, Image } from "@chakra-ui/react";
import { FC } from "react";

interface IRedeemCard {
  image_url?: string;
}

export const ShortMyPrivilegeCard: FC<IRedeemCard> = (cardInfo) => {
  return (
    <Card
      variant="filled"
      backgroundColor="brand.100"
      overflow={"hidden"}
      h={"100px"}
    >
      <Image src={cardInfo.image_url} />
    </Card>
  );
};
