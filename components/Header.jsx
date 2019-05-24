function Header() {
    return (
        <div>
            <header>
                <div className="header-top">
                <p className="header-logo"><a href="index.html"><img src='images/logo.svg' alt="logo" /></a></p>
                <h1><a href="index.html"><img src="images/h1.svg" alt="West Coast Food Truck Festival" /></a></h1>
                <p className="event-date">July<br />19th - 21st<br />Stanley Park</p>
                </div>
                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="vendors.html">Trucks</a></li>
                        <li><a href="entertainment.html">Entertainment</a></li>
                        <li><a href="apply.html">Apply</a></li>
                        <li><a href="map.html">Map</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
  }