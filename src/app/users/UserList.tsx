type User = {
  id: string,
  name: string,
  email: string,
};

const UserList = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch('http://localhost:3000/api?name=John');
  /* name=JohnはGetメソッドでApiをたたく時にurlに情報を載せることができ、
  Getの中で同じように使用することができる。という使い方ができる。*/
  if (!response.ok) throw new Error('Failed to fetch data');
  console.log(response)
  const users: User[] = await response.json();
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;