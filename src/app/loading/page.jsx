
import { Suspense } from 'react'
import Loading from './Loading'


const page = () => {
  return (
    <div>
     <Suspense>
      <Loading />
    </Suspense>
    </div>
  )
}

export default page