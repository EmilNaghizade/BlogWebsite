import { useSelector } from "react-redux"
import WrongRoute from "./WrongRoute"

const ProtectedRoute = ({ children }) => {
    const isAdmin = useSelector(state => state.user.userInfo.admin)
    console.log(isAdmin, 'admin')

    if (!isAdmin) {
        return <div>
            <WrongRoute />
        </div>
    }

    return children
}
export default ProtectedRoute