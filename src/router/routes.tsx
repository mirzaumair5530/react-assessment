import type {RouteObject} from 'react-router-dom'
import App from "@src/App.tsx";
import HomeFeed from "@src/pages/HomeFeed";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/home-feed',
                element: <HomeFeed/>
            }
        ]
    }
]

export default routes