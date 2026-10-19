'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { useRouter } from "next/navigation"
import UpdateUserDialog from "./UpdateUserDialog"

const UserCard = ({user}) => {
  const {_id} = user
  const router = useRouter()
  const handelDeleteUser = async (id) =>{
    const res = await fetch(`http://localhost:5000/users/${id}`,{
      method: 'DELETE',
    })
    const afteDelete = await res.json()
    console.log('after delete', afteDelete)
    if(afteDelete.deletedCount > 0){
      console.log('User deleted succsssfully')
      router.refresh()
    }

  }
  return (
    <section>
      <Card className="relative mx-auto w-full max-w-sm pt-0">
        
       
        <CardHeader>
          <CardAction>
          </CardAction>
          <CardTitle>{user.name}</CardTitle>
          <CardDescription>
           <h2>Email:{user.email}</h2>
           <h2>age:{user.age}</h2>
           <h3>city:{user.city}</h3>
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Link href={`/users/${user._id}`}>
          <Button className="w-full">View Details</Button>
          </Link>
          <UpdateUserDialog user={user}/>
          <Button
            onClick={()=>handelDeleteUser(_id)}
           variant="destructive">Delete</Button>

        </CardFooter>
      </Card>
    </section>
  )
}

export default UserCard
