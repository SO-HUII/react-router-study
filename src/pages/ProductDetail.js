import { Link, useParams } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams();
  
  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.productId}</p>
      {/* Link to="..": 이전에 활성이었던 경로와 라우트로 돌아가라는 의미 */}
      {/* relative="path": 현재 활성인 경로를 살피고 그 경로에서 한 세그먼트만 제거 */}
      <p><Link to=".." relative="path">Back</Link></p>
    </>
  )
}

export default ProductDetailPage;