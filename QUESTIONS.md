1. How long did you spend on the coding assignment? What would you add to your
solution if you had more time? If you didn't spend much time on the coding test
then use this as an opportunity to explain what you would add.

I spent 4 days working on this assignment.

If I had more time i would implement aync await functions to handle the fetch calls to the open table api. I would write more test coverage for fetching data from the api.

another feature I would of liked to add is google maps support for the restaurants. The open table api comes with lat and lag cooridnates for each restaurant.

2. What was the most useful feature that was added to the latest version of your
chosen language? Please include a snippet of code that shows how you've used
it.

in the latest major verison update of React they implemented hooks which used to complete this app

I used useRef to get the values from my forms and pass that value to my fetch call on submit

const cityRef = useRef()

<form onSubmit={handleSumbit}>
    <label htmlFor={'city-search'}>City Search</label>
    <input id={'city-search'} className={'text-input'} type='text' ref={cityRef}/>
    <input id={'city-search-submit-button'} className={'submit-button'} type="submit" value="Search" />
</form>

fetchRestaurants(cityRef.current.value)

If i had more time i would implement aync await functions from javascript to help handle the
asynchronous behavior of the fetch call to the open table API

3. How would you track down a performance issue in production? Have you ever had to do this?

I haven't had to do something like this I would begin with a lighthouse audit to begin to narrow
down where the potential issue could be. If I can't narrow the the issue from there would check if
the server hosting the website was having issues. See if one server being taxed more than the others
or if a server needed to be reset.

4. How would you improve the API that you just used?

I would explain the parameters that you can search the API by. Some parameters I would like to search
by are price and I would simplify the area field to remove the city, the city is its parameter. I would also add more data the restaurant object like menu items.

5. Please describe yourself using JSON.

{
    developer:
        {
            "name": "jeffrey Lee",
            "skills": ['javascript', 'react', 'html', 'css', 'react-redux'],
            "hobbies": {[
                "basketball": {
                    number: 4,
                    positon: SG,
                    stats: {...}
                }
            ,
                "food": ['pho', 'ice cream', 'chips']
            ]}
        }
}