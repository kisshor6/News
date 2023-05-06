import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  document.title = `${props.category}- News`;



  const UpdateNews = async() => { 
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json()
    props.setProgress(70);
    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(() => {
    UpdateNews();
    // eslint-disable-next-line
  }, [])

  const fetchMoreData = async () => {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json()
    props.setProgress(70);
    setArticles(articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults)
    props.setProgress(100);
  }

  return (

    <>

      <h2 className='text-center' style={{margin:'35px 0px', marginTop:'90px'}}>NewsMonkey - Top {props.category} Headline</h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className='container'>
          <div className='row' >
            {articles.map((element, i) => {
              return <div className='col-md-4' key={i}>
                <Newsitem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}
News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general"
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News
