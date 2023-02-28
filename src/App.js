// ІМПОРТУЄМО БІБЛІОТЕКИ БЕЗ ЯКИХ НЕ МОЖЕМО ПИСАТИ КОД
import React from "react";
import styled from "styled-components";

// ІМПОРТУЄМО ПОТРІБНІ КОМПОНЕНТИ
import Page from "./component/Page";
import Header from "./component/Header";
import Balance from "./component/Balance";
import Menu from "./component/Menu";
import Payment from "./component/Payment";

// КОНФІГУРАЦІЯ ========================================

const START_BALANCE = 10000;
const LIMIT_BALANCE = 100000;
const GET_MONEY = 1;
const Get_Seler = 2;
const getq = 1.001;
export default function App() {
  // ФУНКЦІОНАЛ БАЛАНСУ ========================

  // Ось тут тримаємо актуальне значення балансу

  const [balance, setBalance] = React.useState(START_BALANCE);

  // Функція для прямого поповнення балансу
  const getMoney = () => setBalance(balance + GET_MONEY);
  const GET_Selery = () => setBalance(balance - Get_Seler);
  const Rava = () => setBalance(balance * getq);
  // Функція яка виконується кожен раз коли наш баланс змінився
  React.useEffect(() => {
    // Перевірка на ліміт балансу
    if (balance > LIMIT_BALANCE) {
      alert("Ваш ліміт балансу: ${LIMIT_BALANCE}");
      setBalance(START_BALANCE);
    }
    // Перевірка на мінусовий баланс
    if (balance < 0) {
      alert("Ви використали усі свої гроші. Поповніть картку");
      // setBalance(0);
    }
    // Сюди записуються змінні при оновленні яких буде виконуватися функція
  }, [balance]);

  const [payment, setpeyment] = React.useState([]);
  // ВЕРСТКА ІНТЕРФЕЙСУ ==========================================

  // ця функція відкриває вікно в браузері з текстом
  const LOGIN = "1";
  const PASSWORD = "2";

  const [isLogged, setLogged] = React.useState(false);

  const doLogin = () => {
    const login = prompt("Ваш логін");
    const password = prompt("Ваш пароль");

    if (login === LOGIN && password === PASSWORD) {
      alert("Ви увійшли");
      setLogged(true);
    } else {
      if (login !== LOGIN && password !== PASSWORD) {
        return alert("Помилка в логіні та паролі");
      }

      if (login !== LOGIN) {
        return alert("Помилка в логіні");
      }
      if (password !== PASSWORD) {
        return alert("Помилка в паролі");
      }
    }
  };

  return (
    <Page>
      {/* компонент шапки з нашою назвою
          також при кліку мишкою на шапку
          в нас визивається функція HelloWorld
      */}

      <Header name="BANK" onClick={doLogin} />

      {/* Компонент баланса в який передається
          Актуальне значення балансу  */}
      {isLogged && <Balance balance={balance} />}

      {/* Компонент меню з кнопками */}
      {isLogged && (
        <Menu
          // ось сюди ми передаємо конфігурацію кнопок
          config={[
            {
              name: "Отримати кошти",
              onClick: getMoney,
              img: "/icon/payment.svg"
            },
            {
              name: "Віддати кошти",
              onClick: GET_Selery,
              img: "/icon/cat.svg"
            },
            {
              name: "Отримати щорічний відсоток",
              onClick: Rava,
              img: "/icon/dog.svg"
            }
          ]}
        />
      )}
      {/* компонент списка наших транзакцій
          цей функціонал ми будемо робити на 3 уроці
      */}
      {isLogged && <Payment payment={payment} />}
      {isLogged === false && (
        <NotLogged>Вам потрібно увійти в акаунт</NotLogged>
      )}
    </Page>
  );
}

const NotLogged = styled.div`
  padding: 100px 50px;
  color: #fff;
  text-align: center;

  margin-top: 100px;

  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;
