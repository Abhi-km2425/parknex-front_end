// export const serverURL="https://parknex-backend.onrender.com"


export const serverURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:4000'
    : 'https://parknex-backend.onrender.com';
