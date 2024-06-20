const baseURL = process.env.BASE_URL || 'http://localhost:4000';

export const postRequest = async (endpoint, data) => {
  try {
    const response = await fetch(`${baseURL}/${endpoint}`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error during POST request:', error);
    throw error;
  }
};

export async function getData(endpoint, access_token) {
  console.log(`${baseURL}/${endpoint}`);
  const res = await fetch(`${baseURL}/${endpoint}`, {
    method: "GET",
    headers: {
      'Authorization': `Bearer ${access_token}`,
      'credentials': 'include',
    },
  })
  return res.json()
}

export async function saveData(endpoint, data, access_token) {
  console.log(`${baseURL}/${endpoint}`)
  console.log(data);
  console.log("-------------", access_token)
  const test_headers =  {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${access_token}`,
    'credentials': 'include',
  };
  console.log(test_headers);
  try {
    const response = await fetch(`${baseURL}/${endpoint}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`,
        'credentials': 'include',
      },
      data: data,
    })
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error during POST request:', error);
    throw error;
  }
  return res.json()
}