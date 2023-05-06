import React from 'react'

const Newsitem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className='my-3'  >
            <div className="card mx-3 my-3" >
                <span className="position-absolute top-0 start-80 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>
                    {source}</span>
                <img src={!imageUrl ? "https://techcrunch.com/wp-content/uploads/2020/10/GettyImages-1281679136.jpg?w=615" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-primary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} className="btn btn-dark">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default Newsitem
