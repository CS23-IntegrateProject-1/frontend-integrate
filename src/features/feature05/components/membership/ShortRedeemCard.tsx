import { Card, Image } from "@chakra-ui/react";
import { FC } from "react";

interface ICard {
  voucher_image: string;
}

export const ShortRedeemCard: FC<ICard> = (cardInfo) => {
  return (
    <Card
      variant="filled"
      backgroundColor="brand.100"
      overflow={"hidden"}
      h={"100px"}
    >
      <Image src={cardInfo.voucher_image} />
    </Card>
  );
};
