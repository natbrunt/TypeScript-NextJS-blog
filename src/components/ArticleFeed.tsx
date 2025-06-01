"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link"

interface Article {
  _id: string
  title: string
  description: string
  date: string
  image: string
  content: string
  preview: string
}

export function ArticleFeed() {
  // const [articles, setArticles] = useState<Article[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);
  // const URL = process.env.NEXT_PUBLIC_SERVER_URL;
  const articles: Article[] = [
  {
    _id: "67b72e6821ccc252f58f2d43",
    title: "MongoDb and ExpressJS server from scratch on Windows",
    description: "Windows 10, Windows 11",
    image: "assets/1740058216114-mongo-article-img.jpg",
    content: `# Introduction
Hi web devs!  

This tutorial is intended for a beginner who wants to get a MERN server up and running from scratch on Windows. The MongoDB website also has a useful ai chatbot for any specific questions regarding the Windows CL commands for MONGOSH and *mongod* as a Windows service.

## Prerequisites

*not required*
- Postman installation and knowledge of
\`Download link => https://www.postman.com/downloads/\`
- Git Bash installation and knowledge of
\`https://git-scm.com/downloads\`

**Installation of MongoDB as a service**

1) Download the installer (.msi) => \`https://www.mongodb.com/try/download/community\`
  1) Run the .msi
     - Next, next, next all the way to finish
   1) Just use the default location
      - By default the .msi will install MongoDB Compass and install as a Windows Service (and run)
   1) At the end make sure to approve as Administator on Windows
      - The MongoDB Compass installation can hang for some time if you don't approve as Administrator
      - If for some reason MongoDB Compass doesn't install here is the link
  \`https://www.mongodb.com/products/tools/compass\`
   1) Once complete, Compass will launch and click the connect button, to ensure everything is running
   1) *MongoDb (Database)* should run as a windows service upon successful instalation. 
      - On windows type Services in the search bar to see if it is running
1) Upon a successful connect, all collections will be displayed. This is all for now.

### Common MongoDb Compass bugs
- Ensure your process.env.MONGO string looks like \`mongodb://127.0.0.1:27017/\`
- It is common that connection is refused when using \`mongodb://localhost:27017/\`
- This is referred to as **forcing IPv4**.

# Tutorial
1) \`$ mkdir server\`

3) \`$ cd server && npm init -y\`
   This command will automitically generate a package.json for us which points to index.js by default

4) \`$ npm i mongoose express cors\`
   This command will install mongoose and express, which is our database and cors for additional debugging purposes

5) \`$ touch routes.js model.js index.js controller\`
   This command will create empty files with the proper naming conventions for our app

6)  A quick ChatGPT for setting up these routes with Mongoose and Express should get you started.

8) To launch the server:
   \`$ node index.js\`
   or
   \`$ nodemon\`
   You should see 'connected to the db'`,
    preview: `Hi web devs!  

This tutorial is intended for a beginner who wants to get a MERN server up and running from scratch on Windows. The MongoDB website also has a useful ai chatbot for any specific questions regarding the Windows CL commands for MONGOSH and *mongod* as a Windows service.`
  },
  {
    _id: "67b8bae9d74a507698bbeb6d",
    title: "How to Deliver Food like a Pro in 2025",
    description: "Delivery applications like Glovo, Uber, GrubHub, Deliveroo",
    image: "assets/1740159721472-food-delivery-article-img.webp",
    content: `## Walkthrough on setting up
Made as a guide to help those wondering how to get started and start earning.

## Step 1
Get your paperwork sorted. Depending on your country of residence there are various programs you can choose to work autonomously. In most cases, you will definitely require a legal card of residence.

## Step 2
Once the paperwork is sorted, invest in a Tax Attorney. Make sure to talk to private attorneys and also organizations of attorneys, in most cases writing by email is enough. (The more those you talk to, the cheaper your monthly rates will be)

## Step 3
Depending on your budget, invest in a vehicle. Living in Europe or a highly dense metropolitan area, has it’s benefits as we can easily buy a cheap bicycle or scooter.
**Something fast or highway accessible is not necessary**.

## Step 4
Apply for UberEats, or GrubHub.  Try to work for as many companies as possible. Afterall you're autonomous.

## Step 5 
Once approved, which usually happens if you live in the same city or country you are applying for, begin working.  And keep track of all biz expenses and make sure to submit them to your Tax Attorney on a quarterly and annual basis.

## Step 6
Think of the future.  When you're not delivering food, work on what you are passionate about and fulfill your dreams!

### Conclusion
This has been a simple guide for breaking into food delivery whilst making it a profitable endeavor.`,
    preview: `Made as a guide to help those wondering how to get started and start earning.`
  },
  {
    _id: "67c18973db4e5fecc15594c4",
    title: "Python for Data Analysis",
    description: "Start up tutorial for using Python with modules like yfinance and matplotlib",
    image: "assets/1740736883679-python-article-image.jpg",
    content: `## Installation
1) Finding the .msi or .exe
\`https://www.python.org/downloads/windows/\`
2) Verify with 
\`python --version\`
or 
\`python3 --version\`
3) Create a new folder for your project and make a virtual environment to handle dependencies.  This is necessary for using data visualizers like *matplotlib and yfinance*.  We are going to analyze the stock market.
\`python -m venv myenv\`
4) A command you'll always use to activate your environment is
\`source myenv/bin/activate\`
Sometimes this command can differ, you just need to locate the activate file and execute source on this.
5) When creating a python file we store it in the same directory as the myenv/ folder.
\`\`\`
my_project/
│── myenv/               # Virtual environment (don't modify this)
│── stock_analysis.py    # Your Python script
│── data/                # (Optional) Store CSV or JSON data here
│── notebooks/           # (Optional) Jupyter Notebooks
\`\`\`
6) We can install our dependencies with 
\`pip install <your-dependency>\`

6) And finally we can run our files with 
\`python stock_analysis.py\`

## Conclusion
I am using ChatGPT to help generate my python files with their dependencies.  You can easily ask *how to use data analysis with python to analyze the stock market* and you should be able to create your app.  Good luck devs!`,
    preview: `Create a new folder for your project and make a virtual environment to handle dependencies.  This is necessary for using data visualizers like *matplotlib and yfinance*.  We are going to analyze the stock market.`
  }
];
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get<Article[]>(URL+"tnsv-blog/getArticles");
  //       setArticles(response.data);
  //       //console.log(articles)
  //     } catch (err) {
  //       setError("Failed to fetch data.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {articles.map((article) => (
        <Link key={article._id} href={`/article/${article._id}`}>
          <Card className="w-full aspect-square overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-1/2">
              {article.image ? 
                <Image src={`${URL}${article.image}`} alt={article.title} layout="fill" objectFit="cover" />
              :
                <Image src={"https://kzml378iqm9efp7rc6zu.lite.vusercontent.net/placeholder.svg"} alt={article.title} layout="fill" objectFit="cover" />
              }            
            </div>
            <CardHeader>
              <CardTitle className="line-clamp-1">{article.title}</CardTitle>
              <CardDescription>{article.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-24 overflow-hidden relative">
                <p>{article.preview}</p>
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-card to-transparent"></div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}





