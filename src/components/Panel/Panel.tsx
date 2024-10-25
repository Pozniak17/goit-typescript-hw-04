type Props = {
  children: React.ReactElement; //приймає тільки React елементи
};

export function Panel({ children }: Props) {
  return <div>{children}</div>;
}

//це працює бо приймає div - React елемент
//* <Panel>
//*   <div>Hello, world!</div>
//* </Panel>;

// Це не працює, тому що "Hello, world!" - це рядок, а не елемент
//* <Panel>Hello, world!</Panel>;
