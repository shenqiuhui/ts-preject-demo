import React from 'react';

interface Greeting {
  name: string;

}

const Hello = (props: Greeting) => {
  return (
    <h1>{props.name}</h1>
  );
}

export default Hello;
