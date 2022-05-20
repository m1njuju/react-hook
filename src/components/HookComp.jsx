import { useState, useEffect } from "react";

const HookComp = () => {
  // useState는 stateHook으로 사용된다
  const [count, setCount] = useState(0);
  // stateHook은 여러 개 작성할 수 있다.
  const [username, setUsername] = useState("홍길동");
  const [date, setDate] = useState(new Date());

  // componentDidMount, componentDidUpdate, componentWillUnmount와 동일하게 사용한다
  useEffect(() => {
    // componentDidMount, componentDidUpdate와 동일하게 움직임
    document.title = count;
    console.log(count);
    return () => {
      //componentWillUnmount와 동일한 역할
      console.log("언마운트 되었습니다");
    };
  }, []);
  // 두 번째 인수를 작성하지 않았을 때, 업데이트와 마운트가 같이 일어난다
  // 두 번째 인수로는 [] 안에 업데이트할 변수 이름을 작성해 준다
  // 또는 count===1과 같이 조건식을 작성해 줄 수 있다
  // [] 빈 값으로 두면 처음 mount할 때만 실행이 된다

  // 시간을 출력 > useEffect
  // this.state.date.toLocaleTimeString()으로 화면에 출력
  // 클래스형에서 작성한 시간 출력 내용을 useEffect로 바꿔서 출력
  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    console.log("마운트가 되었습니다");
    setInterval(() => tick(), 1000);
  }, []);

  return (
    <div>
      <h1>StateHook</h1>
      <h1>{date.toLocaleTimeString()}</h1>
      <h3>{username}</h3>
      <p>{count}</p>
      <button
        // 함수를 익명함수로 감싸주는 것은 {} 자체가 자바스크립트 내용이기 때문에
        // 함수가 무한으로 호출되는 것을 막기 위해 익명함수로 한 번 감싸주어 버튼을 클릭할 때마다
        // 실행되게 하기 위함이다 -> {} 안에 setCount만 쓰면 무한대로 리렌더하기 때문에 오류가 남
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
    </div>
  );
};
export default HookComp;
