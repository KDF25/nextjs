export const getAllUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
  
    if (!response.ok) throw new Error("Unable to fetch users.");
  
    return response.json();
  };
  
  export const getUsersBySearch = async (search: string) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users?q=${search}`
    );
  
    if (!response.ok) throw new Error("Unable to fetch users.");
  
    return response.json();
  };