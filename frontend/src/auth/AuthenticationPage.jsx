import "react"
import { SignIn,SignedOut,SignedIn ,SignUp} from "@clerk/clerk-react"
export function AuthenticationPage() {
    return(
        <div>
        <SignedOut>
            <SignIn path='/sign-in' routing='path'/>
            <SignUp path='/sign-up' routing='path'/>
        </SignedOut>
        <SignedIn>
            <div>You are signed in!</div>
        </SignedIn>
        </div>
    )
}