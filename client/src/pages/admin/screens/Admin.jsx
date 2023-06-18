import { useSelector } from "react-redux"

const Admin = () => {
  const userState = useSelector((state) => state.user) //
  if (!userState.userInfo.admin) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Bu sayfaya sadece adminlerin yetkisi vardır</h1>
      </div >
    )
  } else {
    return (
      <div>
        <h1>Manage Users</h1>
      </div>
    )
  }
}
export default Admin