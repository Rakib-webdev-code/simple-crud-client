const UserDetailsPage = async ({ params }) => {
  const { userId } = await params;
  const res = await fetch(`http://localhost:5000/users/${userId}`)
  const user = await res.json()

  return (
    <div>
      <h2>User Details: {userId}</h2>
      <h2>Name: {user.name}</h2>
      <h3>email{user.email}</h3>
    </div>
  );
};

export default UserDetailsPage;