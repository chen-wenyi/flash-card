import CardDetail from "@/components/CardDetail"

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id

  return <div>{id && <CardDetail id={parseInt(id)} />}</div>
}