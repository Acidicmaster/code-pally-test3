const axios = require('../axiosConfig');

const getPhotosByAlbumId = async (id) => {
    try {
    const result = await axios.request({
        method: 'get',
        url: `/${id}/photos?_limit=3`
    });
    const { data} = result;
        //res.send(data).status(200);
    
    return data;
}catch (error){
    //res.status(404).send('error occoured')
    console.log(error.message)
}
};

module.exports = getPhotosByAlbumId;