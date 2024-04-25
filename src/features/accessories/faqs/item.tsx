import * as S from "./item.styled";

interface PropsType {
  $active: Boolean;
  $header: String;
  $content: String;
  onClick?: any;
}

export const Item = ({
  $active,
  $header,
  $content,
  onClick
}: PropsType) => {
  return (
    <S.Container
      $active={$active}
      $header={$header}
      $content={$content}
      onClick={onClick}
      className="letter"
    >
      <div className="collapHeader">
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
          <g opacity="0.3" clip-path="url(#clip0_1_102)">
            <rect x="0.5" y="7.29999" width="16" height="2" rx="1" fill="black"/>
            <rect x="7.5" y="0.299988" width="2" height="16" rx="1" fill="black"/>
          </g>
          <defs>
            <clipPath id="clip0_1_102">
              <rect width="16" height="16" fill="white" transform="translate(0.5 0.299988)"/>
            </clipPath>
          </defs>
        </svg>
        <p>{$header}</p>
      </div>
      <div className="collapContent">
        <p>{$content}</p>
      </div>
    </S.Container>
  );
};
