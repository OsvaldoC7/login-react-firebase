export function Alert({message}) {

  return(
    <div className="my-2 rounded-lg font-semibold w-96 shadow-sm text-red-800 bg-red-400">
      <span className="px-2">
        {message}
      </span>
    </div>
  )
}
