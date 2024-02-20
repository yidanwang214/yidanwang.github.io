"use client"
import React, { useEffect } from 'react';
import Sakura from 'sakura-js/dist/sakura';

function SakuraPetal() {
  useEffect(() => {
    // Initialize Sakura.js when the component mounts
    const sakura = new Sakura('.sakura-container');

    // Cleanup Sakura when the component unmounts
    return () => sakura.stop();
  }, []);

  return (
    <div className="sakura-container">
      {/* Your component content */}
    </div>
  );
}

export default SakuraPetal;