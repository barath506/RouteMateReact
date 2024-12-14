import { useLocation, useSearchParams } from "react-router-dom"

export const ProductList = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  console.log(location);
  console.log(searchParams.get("keyword"), searchParams.get("InStock"), searchParams.get("rating"));
  return (
    <main>
      <div className="component">ProductList</div>
    </main>
  )
}
