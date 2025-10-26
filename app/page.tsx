import Hello from "@/components/Hello"

function Home() {
  console.log("home page ")
  return (
    <div className="text-5xl underline">
      Welcome to Next.js
      <Hello />
    </div>
  )
}

export default Home