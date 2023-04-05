
function Navbar() {
    const appName = "Texter"
    return (
        <nav id="navbar">
            <div id="leftSideOfNav" className="navpart">
                <ul className="navList">
                    <li className="navItem" id="appName">{appName}</li>
                    <li className="navItem">Home</li>
                    <li className="navItem">About</li>
                    <li className="navItem">Contact</li>
                </ul>
            </div>
            <div id="RightSideOfNav" className="navpart">
                <ul className="navList">
                    <li className="navItem" id="search">About</li>
                    <li className="navItem" id="searchBtn">Contact</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;