export async function loginUser(username, password) {
    const user = {
      username: username,
      password: password
    }
    const response = await fetch('http://localhost:8000/auth/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })

    if (!response.ok) {
      throw new Error('Error al identificar el usuario')
    }

    const data = await response.json();

    return data;
}

