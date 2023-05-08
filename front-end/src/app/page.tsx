export default function Home() {
  return (
    <div className="container mx-auto ">
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center flex-col">
      <h1 className="font-bold text-2xl">Sign in</h1>
      <div className="flex items-center  justify-center flex-col p-8  w-[64rem] h-[24rem] bg-blue-200 radius rounded-lg">
        <input className="w-full h-12 radius rounded-lg"
        type="email" 
        name="email"  
        placeholder='email' />
        <input className="w-full h-12 mt-8 radius rounded-lg"
        type="password" 
        name="password"  
        placeholder='password' />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Accout</button>
      </div>
    </main>
    </div>
  )
}
