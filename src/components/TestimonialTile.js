import React from 'react'

export default function TestimonialTile({key, name, img, address, type, text, style}) {
    return (
        <div className="tile" key={key}>
            <img src={img} alt="testimony_avatar" />
            <h3 className="my-2">{name}</h3>
            <div className="d-flex">
                <p className="mr-2">{address}</p>
                <button className="btn-main" style={style}>{type}</button>
            </div>
            <p className="my-2"> {text} </p>
        </div>
    )
}
