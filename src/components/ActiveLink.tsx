import { withRouter } from 'next/router'
import Link from 'next/link'

const ActiveLink = ({ router, href, children }: any) => {

    (function prefetchPages() {
        if (typeof window !== "undefined") {
            router.prefetch(router.pathname)
        }
    })()


    const handleClick = (event: any) => {
        event.preventDefault();
        router.push(href)
    }

    const isCurrentPath = router.pathname === href || router.asPath === href;

    return <div>
        <Link href={href} onClick={handleClick}
            className={` text-[400] text-[1.25rem] ${isCurrentPath ? "text-[#57CC99]" : "text-white"}`}
        >

            {children}

        </Link>
    </div>


}

export default withRouter(ActiveLink)