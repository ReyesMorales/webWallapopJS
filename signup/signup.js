export async function createUser(username, password) {
  const user = {
    username: username,
    password: password
  }

  const response = await fetch('http://localhost:8000/auth/register', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  })

  if (!response.ok) {
    throw new Error('Error. El nombre de usuario ya existe')
  }
}  