// src/UserProfile.js
import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
    }
  }
`;

const UserProfile = ({ userId }) => {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: userId }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { user } = data;
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;
