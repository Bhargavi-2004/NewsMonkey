import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';



export class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 18,
        category: 'genral'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    articles = [
        {
            "source": {
                "id": "handelsblatt",
                "name": "Handelsblatt"
            },
            "author": "Catiana Krapp",
            "title": "Gasimporteur VNG schreibt durch Energiekrise hohe Verluste",
            "description": "Die EnBW-Tochter leidet – wie die verstaatlichte Uniper – unter den von Russland gestoppten Gaslieferungen. Helfen soll der VNG ein großes Wasserstoffprojekt in Rostock.",
            "url": "https://www.handelsblatt.com/unternehmen/energie/erdgas-gasimporteur-vng-schreibt-durch-energiekrise-hohe-verluste/29077296.html",
            "urlToImage": "https://www.handelsblatt.com/images/vng-konzernzentrale-in-leipzig/29077508/3-format2003.jpg",
            "publishedAt": "2023-04-04T10:38:27+00:00",
            "content": "Düsseldorf Das ostdeutsche Unternehmen VNG ist 2022 wegen des russischen Gaslieferstopps tief in die Verlustzone gerutscht. Das teilte das Tochterunternehmen des Energiekonzerns EnBW am Dienstagmorge… [+2367 chars]"
        },
        {
            "source": {
                "id": "news24",
                "name": "News24"
            },
            "author": "fin24",
            "title": "STOCK TAKE | Mantashe puts his foot in it, again",
            "description": "Our view on the business stories of the day.",
            "url": "https://www.news24.com/fin24/investing/stock-take-mantashe-puts-his-foot-in-it-again-20230404-2",
            "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/7248/a482ad84afbe43c6963a11840530aa00.jpg",
            "publishedAt": "2023-04-04T10:23:03+00:00",
            "content": "OPINION\r\nMantashe puts his foot in it, again\r\nLeft foot, probably\r\nDuring what seemed an uncharacteristically benign speech, Minister Gwede Mantashe last week highlighted the strides government has m… [+3337 chars]"
        },
        {
            "source": {
                "id": "axios",
                "name": "Axios"
            },
            "author": "Scott Rosenberg",
            "title": "After layoffs, tech stocks boom",
            "description": "After a punishing wave of job cuts, the industry's stocks are on the upswing again.",
            "url": "https://www.axios.com/2023/04/04/layoffs-tech-stocks-boom",
            "urlToImage": "https://static.axios.com/img/axios-site/axios-placeholder-16x9.png",
            "publishedAt": "2023-04-04T09:30:19Z",
            "content": "Tech layoffs are way up and so are tech stocks. Two charts tell this story.\r\nThe big picture: The tech industry's layoffs began last year and have kept up a relentless stream of bleak announcements i… [+2096 chars]"
        },
        {
            "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
            },
            "author": "Dave Sebastian, Joe Wallace, Will Horner",
            "title": "Stock Market Today: Oil Prices Edge Up; Dow Futures Hover",
            "description": "Live updates on stocks and financial news, including the S&P 500, Dow and Nasdaq Composite.",
            "url": "https://www.wsj.com/livecoverage/stock-market-news-today-04-04-2023?mod=hp_lead_pos4",
            "urlToImage": "https://images.wsj.net/im-589547/social",
            "publishedAt": "2023-04-04T07:25:17Z",
            "content": null
        },
        {
            "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
            },
            "author": "Tom McGinty, Ben Foldy",
            "title": "Signature Bank Insiders Sold $100 Million in Stock During Crypto Surge",
            "description": "Sales went largely unnoticed by investors due to securities rules and filing method",
            "url": "https://www.wsj.com/articles/signature-bank-insiders-sold-100-million-in-stock-during-crypto-surge-a9f77615?mod=hp_lead_pos2",
            "urlToImage": "https://images.wsj.net/im-755379/social",
            "publishedAt": "2023-04-04T04:50:00Z",
            "content": null
        },
        {
            "source": {
                "id": "the-next-web",
                "name": "The Next Web"
            },
            "author": "Ioanna Lykiardopoulou",
            "title": "Stockholm is a world-class tech hub: 6 startups and scaleups to watch",
            "description": "Once predominantly known for IKEA, Ericsson, and Volvo, in the past decade, Sweden has emerged as one the most valued tech ecosystems in Europe, with Stockholm ranking as the fifth ...",
            "url": "http://thenextweb.com/news/stockholm-world-class-tech-hub-6-startups-and-scaleups-to-watch",
            "urlToImage": "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2023%2F03%2FUntitled-design-2023-03-27T162859.175.jpg&signature=5e9df711d8a942be4892fa6c1d9b8df2",
            "publishedAt": "2023-03-30T08:00:56Z",
            "content": "Once predominantly known for IKEA, Ericsson, and Volvo, in the past decade, Sweden has emerged as one the most valued tech ecosystems in Europe, with Stockholm ranking as the fifth top performer in 2… [+16612 chars]"
        },
        {
            "source": {
                "id": "financial-post",
                "name": "Financial Post"
            },
            "author": "Financial Post",
            "title": "Financial Post",
            "description": "Read expert analysis, Investment Equipment, Stock Screeners, and Monetary Strategy Information on investing in Canada. Get best investment advice from experts.",
            "url": "http://business.financialpost.com/category/investing/",
            "urlToImage": "https://dcs-static.gprod.postmedia.digital/13.0.2/websites/images/fp/ogimage-fp.png",
            "publishedAt": "2023-03-10T19:22:32.2122783Z",
            "content": null
        },
        {
            "source": {
                "id": "financial-post",
                "name": "Financial Post"
            },
            "author": "Financial Post",
            "title": "Financial Post",
            "description": "Stay up-to-date with the latest business trends and information on the Canadian economy, stock market and personal finance. Learn to save money, invest in the market, grow your wealth and advance your career with new skills.",
            "url": "https://financialpost.com/category/personal-finance/business-essentials/",
            "urlToImage": "https://dcs-static.gprod.postmedia.digital/12.2.3/websites/images/postmedia-image-fallback.png",
            "publishedAt": "2022-11-13T00:37:35.7082248Z",
            "content": null
        },
        {
            "source": {
                "id": "fortune",
                "name": "Fortune"
            },
            "author": "Kevin Kelleher",
            "title": "Buybacks vs dividends? In market downturns, the rules may change",
            "description": "CFOs can return profits to shareholders with dividends and buybacks. Here's how they may fare during a stock market selloff or recession.",
            "url": "https://fortune.com/2022/06/01/buybacks-vs-dividends-stock-market-downturns-recession-cfo-daily-newsletter/",
            "urlToImage": "https://content.fortune.com/wp-content/uploads/2022/05/GettyImages-1310316502.jpg?resize=1200,600",
            "publishedAt": "2022-06-01T10:15:00Z",
            "content": "Skip to Content"
        }
    ]
    constructor(props) {
        super(props);
        console.log("Namste , hu ak constructor chhu ane a pan News class no");
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitlizedFirstLetter(this.props.category)} - NewsMonkey`;
    }

    capitlizedFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    async updateNews() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        let data = await fetch(url);
        this.props.setProgress(30);
        // this.setState({ loading: true });
        let parsedData = await data.json();
        this.props.setProgress(70);
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100);
    }
    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cbda8411dc954982840f0ab91b16dddb&pageSize=${this.state.pageSize}`;
        // let data = await fetch(url);
        // this.setState({ loading: true });
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({
        //     articles: parsedData.articles,
        //     totalResults: parsedData.totalResults,
        //     loading: false
        // })
        this.updateNews();
    }

    handlePrevClick = async () => {
        console.log("Previous");
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`;
        // let data = await fetch(url);
        // this.setState({ loading: true });
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parsedData.articles,
        //     loading: false
        // })
        this.setState({ page: this.state.page - 1 });
        this.updateNews();

    }

    handleNextClick = async () => {
        console.log("Next");
        // if (this.state.page + 1 > (Math.ceil(this.state.totalResults / this.state.pageSize))) { } else {
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cbda8411dc954982840f0ab91b16dddb&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`;
        //     let data = await fetch(url);
        //     this.setState({ loading: true });
        //     let parsedData = await data.json();
        //     console.log(parsedData);
        //     this.setState({
        //         page: this.state.page + 1,
        //         articles: parsedData.articles,
        //         loading: false
        //     })
        // }
        this.setState({ page: this.state.page + 1 });
        this.updateNews();
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
        })
    }

    render() {
        return (
            <div className="container my-3">
                <h2 className='text-center' style={{ margin: '25px 0px' }}>NewMonkey - Top {this.capitlizedFirstLetter(this.props.category)} Headlines</h2>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        {this.state.loading && <Spinner />}
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.url} style={{ display: 'flex' }}>
                                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgUrl={element.urlToImage ? element.urlToImage : "https://content.fortune.com/wp-content/uploads/2023/04/GettyImages-627643688.jpeg?resize=1200,600"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>

            </div >
        )
    }
}

export default News





// COMMENTS:

{/* {this.state.loading && <Spinner />} */ }

// for adding previous and next buttons
{/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}