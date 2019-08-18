import React from 'react';



function Footer(props){
    const style = {
        backgroundColor: "#F8F8F8",
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        paddingTop: "1px",
        paddingBottom: "1px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "50px",
        width: "100%",
    }
        return(
            <div style={style}>
                {props.children}
            </div>
        );
}

export default Footer;