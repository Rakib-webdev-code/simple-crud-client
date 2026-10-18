const UserDetailsPage = async ({ params }) => {
  const { userId } = await params;

  return (
    <div>
      <h2>User Details: {userId}</h2>
    </div>
  );
};

export default UserDetailsPage;