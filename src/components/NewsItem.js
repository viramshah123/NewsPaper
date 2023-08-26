import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let {title , description, imageUrl, newsUrl} = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imageUrl?"https://c.ndtvimg.com/2022-12/h2e3idio_messi-warmup_625x300_18_December_22.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675":imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
