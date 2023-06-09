function Shimmer() {
  return (
    <div className="restaurant-list" data-testid="shimmer">
      {Array(10).fill("").map((_, index)=>{
        return <div key={index} className="shimmer-card"></div>
      })}
    </div>
  )
}

export default Shimmer