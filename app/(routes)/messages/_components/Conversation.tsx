import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Info, Paperclip, Search, SendHorizonal } from "lucide-react"
import React from 'react'

function Conversation() {
  return (
<div className="flex flex-col">
        <div className="border-b bg-background px-6 py-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>OW</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <div className="font-medium">Jan Mikey</div>
              <div className="text-sm text-muted-foreground">Online</div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Info className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View profile</DropdownMenuItem>
                <DropdownMenuItem>Mute conversation</DropdownMenuItem>
                <DropdownMenuItem>Delete conversation</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex-1 overflow-auto p-6">
          <div className="grid gap-4">
            <div className="flex items-start gap-3">
              <Avatar className="h-8 w-8 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>OW</AvatarFallback>
              </Avatar>
              <div className="rounded-md bg-muted p-3 text-sm">
                <p>
                  Hi there! I just wanted to follow up on the design files I sent over earlier. Let me know if you have
                  any feedback or questions.
                </p>
              </div>
            </div>
            <div className="flex justify-end items-start gap-3">
              <div className="rounded-md bg-primary p-3 text-sm text-primary-foreground">
                <p>
                  Thanks for sending those over, Olivia. I've taken a look and they look great. I'll get back to you
                  with any feedback later today.
                </p>
              </div>
              <Avatar className="h-8 w-8 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex items-start gap-3">
              <Avatar className="h-8 w-8 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>OW</AvatarFallback>
              </Avatar>
              <div className="rounded-md bg-muted p-3 text-sm">
                <p>Sounds good, I'll be on the lookout for your feedback.</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" bottom-0 z-10 border-t bg-background px-6 py-4 flex items-center gap-2">
          <div className="relative flex-1">
            <Textarea
              placeholder="Type your message..."
              name="message"
              id="message"
              rows={1}
              className="min-h-[48px] w-full rounded-2xl resize-none p-4 pr-16 text-sm"
            />
            <div className="absolute top-3 right-12 flex items-center gap-2">
              <button className="text-2xl">😀</button>
              <div className="bg-background shadow-lg rounded-md p-2 hidden">
                <div className="grid grid-cols-5 gap-2">
                  <button className="text-2xl">😀</button>
                  <button className="text-2xl">😃</button>
                  <button className="text-2xl">😄</button>
                  <button className="text-2xl">😁</button>
                  <button className="text-2xl">😆</button>
                </div>
              </div>
              <button className="text-muted-foreground">
                <Paperclip className="h-5 w-5" />
              </button>
              <div className="bg-background shadow-lg rounded-md p-2 hidden">
                <input type="file" className="w-full" />
              </div>
            </div>
            <Button type="submit" size="icon" className="absolute w-8 h-8 top-3 right-3">
              <SendHorizonal className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </div>
        </div>
      </div>
  )
}

export default Conversation
