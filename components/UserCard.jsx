import React from "react"
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

const UserCard = ({user}) => {
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
          <Link href={`/users/${user._id}`}><Button className="w-full">View Details</Button></Link>
        </CardFooter>
      </Card>
    </section>
  )
}

export default UserCard
