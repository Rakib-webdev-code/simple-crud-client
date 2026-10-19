import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const UpdateUserDialog = ({ user }) => {
  const handleUpdateUser = async (e) => {
    e.preventDefault()
    const fomdata = new FormData(e.currentTarget)
    const updatedUser = Object.fromEntries(fomdata.entries())
    console.log("Update User", updatedUser)

    const res = await fetch(`http://localhost:5000/users/${user._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })

    const result = await res.json()
    console.log("result from server", result)
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger
          render={
            <Button className="mx-3" variant="outline">
              Edit
            </Button>
          }
        />
        <DialogContent className="sm:max-w-sm">
          <form onSubmit={handleUpdateUser}>
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <Label htmlFor="name-1">Name</Label>
                <Input id="name-1" name="name" defaultValue={user.name} />
              </Field>
              <Field>
                <Label htmlFor="username-1">Username</Label>
                <Input
                  id="email-1"
                  name="email"
                  type="email"
                  defaultValue={user.email}
                />
              </Field>
            </FieldGroup>
            <DialogFooter>
              <DialogClose render={<Button variant="outline">Cancel</Button>} />
              <DialogClose render={<Button type="submit">Save changes</Button>} />
              
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default UpdateUserDialog
