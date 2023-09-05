import './propertyList.css'

export const PropertyList = () => {
  return (
    <div className='pList'>
        <div className="pListItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/85114898.jpg?k=1bd3c0d30c4e71dff637716d989a25d82934ea780ef601e929956f1c73788c92&o=&hp=1" alt="" className="pListImg" />
            <div className="pListTitle">
                <h1>Hotels</h1>
                <h2>323</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://wallup.net/wp-content/uploads/2019/09/760123-apartment-condo-interior-design-house-building-architecture-2.jpg" alt="" className="pListImg" />
            <div className="pListTitle">
                <h1>Apartments</h1>
                <h2>156</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://wallpaperaccess.com/full/5726387.jpg" alt="" className="pListImg" />
            <div className="pListTitle">
                <h1>Villas</h1>
                <h2>112</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://i.ytimg.com/vi/ErsRX-7DmAs/maxresdefault.jpg" alt="" className="pListImg" />
            <div className="pListTitle">
                <h1>Resorts</h1>
                <h2>99</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://wallpapercave.com/wp/14gule0.jpg" alt="" className="pListImg" />
            <div className="pListTitle">
                <h1>Cabins</h1>
                <h2>68</h2>
            </div>
        </div>
    </div>
  )
}
