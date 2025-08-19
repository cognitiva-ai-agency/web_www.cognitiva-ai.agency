'use client';
 
export default function Template({ children }) {
  return (
    <div style={{
      margin: 0,
      padding: 0,
      minHeight: '100vh',
      width: '100%',
      background: 'linear-gradient(to bottom, rgb(10, 10, 10), rgb(13, 13, 13))'
    }}>
      {children}
    </div>
  );
}