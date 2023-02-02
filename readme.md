# Url Shortner

A simple URL shortener service built using Node.js and Express.js.

## Features

-   Shorten long URLs into short, memorable links
-   Redirect from short URLs to the original URLs
-   Built with Node.js and Express.js for fast and efficient performance
- 
## Getting Started
1.  Clone the repository: `git clone https://github.com/<your-username>/url-shortener.git`
    
2.  Install the dependencies: `npm install`
    
3.  Start the server: `npm start`

4. Start the dev server: `npm run dev`
    
5.  Visit `http://localhost:3000` to use the service.

## Endpoints

### Shorten URL

`POST /shorten`
Create a shortened URL for a long URL.

#### Request
    {
        "originalUrl": "https://www.github.com/askdl;ksdfkjasdkJsdfxsdfzsdfasdasd"
    }
    
#### Response
    {
        "shortenedUrl": "https://www.example.com/abc123"
    }`

### Redirect to Original URL

`GET /:shortId`

Redirect from a shortened URL to the original URL.

## Dependencies

-   `express`: Fast, unopinionated, minimalist web framework for Node.js
-   `morgan`: HTTP request logger middleware for Node.js
-   `mongoose`: MongoDB object modeling tool for Node.js
-   `shortid`: Tiny, fast, unique string ID generator for JavaScript

## Contributing

If you want to contribute to this project, please create a pull request. We welcome all contributions!



