export default function DashboardLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex flex-col gap-4 p-6'>
      <p>Dashboard layout...</p>
      {children}
    </div>
  )
}
