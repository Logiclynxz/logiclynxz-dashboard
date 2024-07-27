import { Button } from '@/components/ui/button'
import React from 'react'
import ProjectCards from './projectcards'

export default function ProjectList() {
  return (
    <div>
        <div className="flex justify-between">
            <div className="flex-1">
                <h3 className="text-lg font-semibold">Text</h3>
                <p className="text-sm text-muted-foreground">Another Test</p>
            </div>
            <Button className="bg-[#3662e3] dark:text-white dark:hover:bg-[#0d1b44] hover:bg-[#5da3f4] text-white">
                + Add Project
            </Button>
        </div>

        <div className="flex grid grid-cols-1">
            <div className="flex-none w-14 ">
                <Button>asd</Button>
            </div>
            <div className="flex-auto w-14 ">
                <Button>asd</Button>
            </div>
            <div className="flex-auto w-14 ">
                <Button>asd</Button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 -ml-2 mt-10">
            <div className="px-1">
                <ProjectCards/>
            </div>
            <div className="px-1">
                <ProjectCards/>
            </div>
            <div className="px-1">
                <ProjectCards/>
            </div>
        </div>

    </div>
  )
}
