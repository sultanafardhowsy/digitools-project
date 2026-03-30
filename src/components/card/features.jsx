import React from 'react';

const Features = ({feature}) => {
    return (
        <p><span className="text-green-500 gap-5 mr-2">✔</span> {feature}</p>
        
    );
};

export default Features;