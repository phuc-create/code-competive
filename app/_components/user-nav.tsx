'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@code/components/ui/avatar'
import { Button } from '@code/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@code/components/ui/dropdown-menu'
import { User } from '@supabase/supabase-js'
import { logOut } from '../../supabase/requests/auth'
import { useRouter } from 'next/navigation'
import Router from 'next/router'
import { useEffect, useState } from 'react'

interface UserNavProps {
  user: User | null
  // signOutLoading: boolean
}

export const UserNav: React.FC<UserNavProps> = ({
  user
  // signOutLoading
}) => {
  const router = useRouter()
  const [userProfile, setUserProfile] = useState<User | null>(user)
  useEffect(() => {
    setUserProfile(() => user)
  }, [user])
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={userProfile?.user_metadata?.picture || ''}
              alt="user picture"
            />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {/* {user?.displayName || ''} */}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {userProfile?.email || ''}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>New Team</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            logOut()
            router.refresh()
            router.refresh()
          }}
        >
          {'Log out'}
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
