import React, { useState, useEffect } from 'react';
import { Button } from 'antd';

interface Greeting {
  name: string;
  firstName?: string;
  lastName?: string;
}

const HelloHooks: React.FC<Greeting> = (props) => {
  // 给定初始值就不需要给定类型，可以根据类型推断得出
  const [count, setCount] = useState(0);
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    if (count > 5) {
      setText('休息一下')
    }
  }, [count]);

  return (
    <>
      <p>点击了 {count} 次 {text}</p>
      <Button onClick={() => setCount(count + 1)}>
        Hello {props.name} {props.firstName} {props.lastName}
      </Button>
    </>
  );
}

HelloHooks.defaultProps = {
  firstName: '',
  lastName: ''
}

export default HelloHooks;
