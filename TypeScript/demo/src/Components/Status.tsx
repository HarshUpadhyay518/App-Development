type StatusProps = {
  status: 'loading' | 'success' | 'error'
}

export const Status = (props: StatusProps) => {
  let message
  if(message==='loading'){
    message = 'Loading'
  } else if(message==='success'){
    message = 'Data Fetched Successfully'
  } else if(message === 'error'){
    message = 'Error fetching Data'
  }
  return (
    <div>
     <h2>Status : {message}</h2>
    </div>
  )
}
