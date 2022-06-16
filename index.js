const superagent = require('superagent');

// promise with async/await
(async () => {

    // Data to be sent
    const data = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    }

    try {

        // Make request
        const { body } = await superagent.post(
            'https://jsonplaceholder.typicode.com/posts')
            .send(data)
        // Show response data
        console.log(body)
    } catch (err) {
        console.error(err)
    }
})();
