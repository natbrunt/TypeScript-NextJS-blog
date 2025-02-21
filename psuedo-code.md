`import axios from 'axios'`

```
    const handleSubmit = (method) => {
    
        else if (method === 'update')
        {
            axios.post(URL+'/posts/updatePostById', 
            {
                //req.body
                id: currentPostID,
                username: props.user,
                bookTitle: titleInput,
                bookAuthor: authorInput,
                imageSecureUrl: image_secure_url,
                imagePublicId: image_public_id,
                body: thisBody
            })
            .then((res) => {
              alert(`${res.data.message}`)
              props.setList(res.data.list);
              setCurrentView('posts');
            })
            .catch((err)=>{
              console.log(err)
            })
        }
        
        set_image_secure_url('');
        set_image_public_id('');
        setThisBody('');
        setAuthorInput('');
        setTitleInput('');
        setCurrentPostId('');
    }

    const handleUpdate = (thisId) => {
        console.log("thisId = " + thisId);
        setCurrentPostId(thisId);
        setCurrentView('updatePost');
        const updateOne = async () =>{
            axios.post(URL+'/posts/findPostById',
            { id: thisId
                //organize state variables in views
            })
            .then((res) => {
            set_image_public_id(res.data.post.imagePublicId);
            set_image_secure_url(res.data.post.imageSecureUrl);
            setThisBody(res.data.post.body);
            setAuthorInput(res.data.post.bookAuthor);
            setTitleInput(res.data.post.bookTitle);
            })
            .catch((err)=>{
            console.log(err)
            })
        }
        updateOne();
    }
```
