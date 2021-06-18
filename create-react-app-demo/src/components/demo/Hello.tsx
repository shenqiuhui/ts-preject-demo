import React from 'react';
import { Button } from 'antd';

interface Greeting {
  name: string;
  firstName?: string;
  lastName?: string;
}

// React.FC 优点：
// 在函数参数声明中包括了 children 属性
// 为函数定义静态属性时会有自动提示

const Hello: React.FC<Greeting> = (props) => {
  const { name, firstName, lastName, children } = props;

  return (
    <Button>Hello {name} {firstName} {lastName}</Button>
  );
}

Hello.defaultProps = {
  firstName: '',
  lastName: ''
}

export default Hello;
