import { Component } from 'react';
import { Button } from 'antd';

interface Greeting {
  name: string;
  firstName?: string;
  lastName?: string;
}

interface State {
  count: number;
}

// Component 泛型类定义三个参数：
// 第一个泛型参数代表属性的类型
// 第二个泛型参数代表 state 类型
// 第三个泛型参数代表 snapshot

class HelloClass extends Component<Greeting, State> {
  state: State = {
    count: 0
  }

  static defaultProps = {
    firstName: '',
    lastName: ''
  }

  render() {
    return (
      <>
        <p>点击了 {this.state.count} 次</p>
        <Button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Hello {this.props.name} {this.props.firstName} {this.props.lastName}
        </Button>
      </>
    );
  }
}

export default HelloClass;
