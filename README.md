# Technology News API

Technology News API is a simple Node.js application that provides an API to fetch technology news articles from various sources. It uses Express.js for building the API and Axios with Cheerio for web scraping.

## To run this project

You can run this project on your local machine. Just pull it down and do the following:

```bash
npm install
```

1. Run the command above to install all the packages

### Start the Project

2. Now run the server:

```bash
npm run start
```

3. Open [http://localhost:8000/news](http://localhost:8000/news) with your browser to see the results of the scrape in your terminal.

4. You can also use certain source parameters to get news from individual sources. i.e. [http://localhost:8000/news/nyt](http://localhost:8000/news/nyt)

5. Install the Chrome extension 'JSON Viewer' to view returned JSON in the right format.  

## MIT Licence

Copyright (c) 2020 Moaz Irfan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
