export default function PostTitle({ children }) {
  return (
    <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold tracking-tighter leading-tight md:leading-none mb-8 text-center md:text-left">
      {children}
    </h1>
  )
}
