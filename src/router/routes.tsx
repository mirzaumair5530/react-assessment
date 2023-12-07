import type {RouteObject} from 'react-router-dom'
import App from "@src/App.tsx";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/home-feed',
                element: <p>Hello home feed</p>
            }
        ]
    }
]

export default routes