import React, { useState } from 'react';

function Stories() {
    const API_KEY = "5daf9f774ccb4948a1579c401ad5d85e";
    const [sorting, setSorting] = useState("popularity");
    const [searching, setSearching] = useState("pakistan");
    const [news, setNews] = useState("everything");
    const [articles, setArticles] = useState([]);

    const URL = `https://newsapi.org/v2/${news}?q=${searching}&from=2024-06-06&to=2024-06-06&sortBy=${sorting}&apiKey=${API_KEY}`;

    const fetchNews = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setArticles(data.articles);
    };

    const handleOnChange = (e) => {
        setSearching(e.target.value);
    };

    const styles = {
        form: {
            width: "20%",
            marginTop: "50px",
        },
        articles: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(18rem, 1fr))",
            gap: "20px",
            justifyItems: "center",
            margin: "20px",
        },
        card: {
            width: "100%",
            maxWidth: "18rem",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.2s",
            minWidth : "20px"
        },
        cardBody: {
            padding: "10px",
        },
        cardTitle: {
            fontSize: "1.25rem",
            marginBottom: "10px",
        },
        cardText: {
            fontSize: "1rem",
            marginBottom: "10px",
        },
        badge: {
            margin: "5px 0",
        },
        formCheck: {
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            margin: "10px",
        },
        formCheckP: {
            margin: "5px 0",
        },
        btn: {
            marginTop: "10px",
        },
    };

    return (
        <>
            <center>
                <form style={styles.form}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Search For The News You Want</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleOnChange} />
                        <div id="emailHelp" className="form-text" style={{ fontFamily: "sans-serif" }}>BEST NEWS IN TOWN</div>
                    </div>
                </form>
            </center>
            <div className="form-check form-switch" style={styles.formCheck}>
                <p style={styles.formCheckP}>Set The Sorting Method</p>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={() => setSorting("relevancy")} />
                <p style={styles.formCheckP}>relevancy - articles more closely related to your desired search come first.</p>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={() => setSorting("publishedAt")} />
                <p style={styles.formCheckP}>publishedAt - newest articles come first.</p>
                <button className="btn btn-primary" onClick={fetchNews} style={styles.btn}>Search News/Articles</button>
            </div>
            
            <div style={styles.articles}>
                {articles.map((article, index) => (
                    <div key={index} className="card" style={styles.card}>
                        <div className="card-body" style={styles.cardBody}>
                            <h5 className="card-title" style={styles.cardTitle}>{article.title}</h5>
                            <p className="card-text" style={styles.cardText}>{article.description}</p>
                            <span className="badge text-bg-dark"  style={styles.badge }>Author: {article.author ? article.author : "Unknown"}</span><br />
                            <a href={article.url} target="_blank" rel="noopener noreferrer" className="badge text-bg-success" style={styles.badge}>Read More</a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Stories;
