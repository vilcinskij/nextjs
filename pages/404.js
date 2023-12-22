import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFoundPage = () => {
    return (
        <div>
            PAGER NOT FOUNDERR
            Go to <Link href='/burgers'> ALL burgers</Link>
        </div>
    )
}

export default NotFoundPage;