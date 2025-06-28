import React from "react";
import { TypeAnimation } from "react-type-animation";
import locationGif from "../../Asset/location.gif";

function About() {
  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      minHeight: "100vh", 
      textAlign: "center" 
    }}>
      
      <TypeAnimation
        sequence={[
          "Hi, I am Aman Kumar Singh",
          300,
          "Hi, I am Aman Kumar Singh\nA Full-Stack Web Developer"
        ]}
        speed={40}
        style={{
          fontSize: "3em",
          color: "white",
          whiteSpace: "pre-line",
          fontWeight: "bold"
        }}
        repeat={0}
      />

      {/* Location with gif */}
      <div style={{ marginTop: "20px", color: "white" }}>
        <img 
          src={locationGif} 
          alt="Location" 
          style={{ width: "20px", verticalAlign: "middle", marginRight: "8px" }} 
        />
        Bhilai, Chhattisgarh, India
      </div>
    </div>
  );
}

export default About;
