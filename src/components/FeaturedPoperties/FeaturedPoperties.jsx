import './featuredPoperties.css';

export const FeaturedPoperties = () => {
  return (
    <div className="fp">
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/477085213.webp?k=29caadf3e1563bb00c8f93a2af40946a5205edd01343aeb5703ff6740613f747&o=" alt="" className="fpImg" />
            <span className="fpName">Flora Chiado Apartments</span>
            <span className="fpCity">Portugal</span>
            <span className="fpPrice">Starting from $625 </span>
            <div className="fpRating">
                <button>4.8⭐</button>
                <span>Excelent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/420377357.webp?k=29a0e9879ac8361539c3dae41f047d383e6fa6917f8f47cb50dad001ada0eae6&o=" alt="" className="fpImg" />
            <span className="fpName">Apartment by the Sloane Club</span>
            <span className="fpCity">London</span>
            <span className="fpPrice">Starting from $800 </span>
            <div className="fpRating">
                <button>3.6⭐</button>
                <span>Good</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/119988219.webp?k=afbd4548022812f6bb932130b99252b8c80939f18a92972a8d94b627b943a6d2&o=" alt="" className="fpImg" />
            <span className="fpName">Carinya Park</span>
            <span className="fpCity">Australia</span>
            <span className="fpPrice">Starting from $1200 </span>
            <div className="fpRating">
                <button>5⭐</button>
                <span>Outstanding</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/210943150.webp?k=1d3cb2f9c178756981110c1d6f895a65793f0ab4e62a613ee9f7d4ae140a3bad&o=" alt="" className="fpImg" />
            <span className="fpName">Domke ROOSE plazy</span>
            <span className="fpCity">Poland</span>
            <span className="fpPrice">Starting from $950 </span>
            <div className="fpRating">
                <button>4.5⭐</button>
                <span>Excelent</span>
            </div>
        </div>
        
    </div>
    
  )
}
