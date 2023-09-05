import './featured.css';

export const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://www.wanderwithjo.com/wp-content/uploads/2017/01/GOPR2970edit.jpg" alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Goa</h1>
                <h2>236 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/443120102.jpg?k=543527a8dc0f188e6b1cf2cc9059373adbce4d3989ff0d3fc3ffed1711952b11&o=&hp=1" alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Gangtok</h1>
                <h2>386 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/320291931.jpg?k=31a0baa1d5791f4e0ef07e8105ae801fd55abaaeea89408ff30d7d782a7f51e6&o=&hp=1" alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Shillong</h1>
                <h2>963 properties</h2>
            </div>
        </div>
    </div>
  )
}
