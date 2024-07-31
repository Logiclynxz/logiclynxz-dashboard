import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function ChatList() {
  return (
    <div className=" border-r bg-muted">
    <div className="top-0 z-10 flex items-center gap-2 border-b bg-background px-4 py-3">
      <Search className="h-5 w-5 text-muted-foreground" />
      <Input type="search" placeholder="Search contacts..." className="w-full rounded-md bg-background text-sm" />
    </div>
    <div className="overflow-auto">
      <div className="grid gap-2 p-4">
        <Link href="#" className="flex items-center gap-3 rounded-md p-2 hover:bg-muted/50" prefetch={false}>
          <Avatar className="h-10 w-10 border">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <div className="font-medium">Jan Mikey</div>
            <div className="text-sm text-muted-foreground line-clamp-1">
              Hey, just wanted to check in on the project status.
            </div>
          </div>
          <div className="text-xs text-muted-foreground">2h</div>
        </Link>

      </div>
    </div>
  </div>
  )
}

export default ChatList
