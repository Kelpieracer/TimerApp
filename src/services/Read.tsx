import React from 'react'
import { useQuery } from 'react-query'
const Read = () => {
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
            res.json()
        )
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + JSON.stringify(error)


    return (
        <div>
            <h1>{data.name} </h1>
            <p> {data.description} </p>
            <strong><span role="img" aria-label="eyes">👀</span> {data.subscribers_count} </strong>{' '}
            <strong><span role="img" aria-label="sheep">✨</span> {data.stargazers_count} </strong>{' '}
            <strong><span role="img" aria-label="sheep">🍴</span> {data.forks_count} </strong>
        </div>
    )
}
export default Read