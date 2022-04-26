import React, { useEffect, useState } from "react"

let previousScrollTop=0;

const HomePage =(props)=>{
    const onLogOutHandler=()=>{
        props.onLogOut();
    }

    const [navabrPosition,setNavbarPosition] =useState(0);
    const [user,setUser]=useState({});

    useEffect(() => {
        const handleScroll = (e) => {
          const scrollTop = e.target.documentElement.scrollTop;
    
          // scroll down
          if (scrollTop > previousScrollTop) {
            setNavbarPosition(0);
          } else {
            // scroll up
            setNavbarPosition(scrollTop);
          }
          previousScrollTop = scrollTop;
        //   console.log("Scroll- ",scrollTop);
        };
    
        document.addEventListener("scroll", handleScroll);
    
        //componentWillUnMount
        return () => {
          document.removeEventListener("scroll", handleScroll);
        };
      }, []);

    useEffect(()=>{
        fetch("https://randomuser.me/api/?result=10").then(data=>{
            return data.json}
            ).then(data2=>{
                setUser(data2.results);
            })
    },[])

    return(
        <div
            style={{
                height: 2000,
                position: "relative",
                paddingTop: 60,
            }}
        >
            <div
                style={{
                width: "100%",
                height: 50,
                position: "absolute",
                backgroundColor: "black",
                color: "white",
                fontSize: 24,
                top: navabrPosition,
                left: 0,
                }}
            >
                <h5>Navbar Component</h5>
            </div>
            <h1>Home Page</h1>
            <button onClick={onLogOutHandler} className="btn btn-primary" >Log Out</button> 
            <p></p>
        </div>
    )
}
export default HomePage;