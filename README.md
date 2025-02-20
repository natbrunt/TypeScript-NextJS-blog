### Development 
 - the image upload works via front-end FormData
 - images are displayed as cover, therefore it might be best to have specific dimensions in mind before uploading
 - image name cannot contain spaces, maybe fix this by adding % for everyspace in the backend
 - all in all it looks like we will be able to have a working blog website
 - could be a good idea to change the meta data
 - Multiple images cannot be uploaded
 - No way to display MarkDown
 - For now, the content is just one big blob.  We could parse the content for keywords that indicate a newline and a photo and then another new line.  Or we could hard code it. (That might be a better idea)
  - For example if the article is named something then we could display a special hard-coded page else, display the details as per usual
  - After that then the blog is ready to be made public and well marketed.
 - Blog article ideas
  - How to install MongoDb as a Windows Service

## Technologies
 - NextJS
 - NodeJS
 - Shadcn
 - v0.dev for coding assistance
 - MongoDb
 - Tailwind CSS

## To be continued
 - Get AD APIs up and running
 - Add a donation button with Stripe JS or the Buy me a Coffee API
 - add image upload axios post request to back-end server
 - somehow fetch the corresponding images from the server to be displayed on the front-end

## How to run
 - `git clone <this>`
 - `npm i && npm run dev`
 - requires an array of articles, I left some hard-coded ones in the ArticleFeed.tsx

## Common Errors
 - When implementing process.env.NEXT_PUBLIC, we can sometimes get the routes wrong when renaming the request.
```
Access to XMLHttpRequest at 'https://your-server/getArticle/67ab2b65ea39e39f9aa74a5c' from origin 'https://type-script-node-js-blog.vercel.app' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```
 - Ensure that you include the sub routes, in my case it was `tnsv-blog/`
