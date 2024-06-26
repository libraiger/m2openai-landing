import { CustomButtonStypeType } from "@utils/typesUtils";
import * as S from "./index.styled";

export const CustomButton = ({
  title,
  $border,
  $borderRadius,
  $backgroundColor,
  $color,
  $fontSize,
  $fontWeight,
  $fontFamily,
  $gap,
  $display,
  $width,
  $height,
  $padding,
  $alignItems,
  $lineHeight,
  $marginTop,
  $cursor,
  icon,
  onClick
}: CustomButtonStypeType) => {
  return (
    <S.Container
      $border={$border}
      $borderRadius={$borderRadius}
      $backgroundColor={$backgroundColor}
      $color={$color}
      $fontSize={$fontSize}
      $fontWeight={$fontWeight}
      $fontFamily={$fontFamily}
      $gap={$gap}
      $display={$display}
      $width={$width}
      $height={$height}
      $padding={$padding}
      $alignItems={$alignItems}
      $lineHeight={$lineHeight}
      $marginTop={$marginTop}
      $cursor={$cursor}
      onClick={onClick}
    >
      {title}
      {icon}
    </S.Container>
  );
};
