import styled from "styled-components";

export default function Header({ name, onClick }) {
  return (
    <HeaderTag>
      <NameTag>BEBE Bank</NameTag>
      <LoginButtomTag onClick={onClick}>Вхід</LoginButtomTag>
    </HeaderTag>
  );
}

const LoginButtomTag = styled.div`
  color: red;
  padding: 8px 32px;
  border: 1px solid#fff;
  border-radius: 10px;
  cursor: pointer;
`;

const NameTag = styled.div`
  color: blue;
`;

const HeaderTag = styled.div`
  /* робимо темний колір фону блока */
  background: black;

  /* робимо щоб знизу блок мав закруглення */
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  /* режим верстки flex, робимо текст по центру */
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* ставимо колір тексту білим */
  color: #fff;

  /* робимо відступи вертикальні та горизонтальні,
    щоб текст не притискався до країв блоку
   */
  padding: 15px;
`;
