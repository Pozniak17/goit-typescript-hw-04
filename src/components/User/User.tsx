import React from "react";

type Props = {
  name: string;
  age: number;
  children: React.ReactNode;
};

export function User({ name, age, children }: Props) {
  return (
    <div>
      <p>{`User name is ${name}`}</p>
      <p>{`User age is ${age}`}</p>
      {children}
    </div>
  );
}

// export class User extends React.Component<Props> {
//   render() {
//     const { name, age } = this.props;
//     return (
//       <div>
//         <p>{`User name is ${name}`}</p>
//         <p>{`User age is ${age}`}</p>
//       </div>
//     );
//   }
// }

// зупинився на Panel
