
async function userDetails({params}:{params:Promise<{id:string}>}) {

    const {id} = await params

  return (
    <div>
        <h1>Show details for user #{id}</h1>
    </div>
  )
}

export default userDetails