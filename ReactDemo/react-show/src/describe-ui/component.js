import React from "react";
function Gallery() {

    function Profile() {
        return (
            <img
            src="https://www.xiaolincoding.com/logo.png"
            alt="xiaolincoding"
            />
        );
    }


    return(
        <section>
            <h3>
                Amazing!
            </h3>
            <Profile/>
        </section>
    );
}


export default Gallery;