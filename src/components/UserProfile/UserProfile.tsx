type User = {
  name: string;
  email: string;
};

type Props = {
  user: User;
  onUserUpdate: (user: User) => void;
};

export function UserProfile({ user, onUserUpdate }: Props) {
  // компонент UserProfile
  return null;
}
