'use client'

import styles from './page.module.css'
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter()
    const movePage = () => {
        router.push('/first')
    }

    return (
        <div className={styles.main_wrap}>
            <div className={styles.main}>
                <div className={styles.text_center}>
                    6월 29일 목요일 ... <br/>
                    엉엉이에게 크나큰 고민거리가 생겼다. <br/><br/>
                    무엇을 먹어야 잘 먹었다고 소문이 날지 고민하는 윤엉엉 <br/><br/>
                    이대로라면 저녁에 프로틴쉐이크 말고는<br/>아무것도 먹지 못한다 !! 🥺🥺
                </div>
                <button className={styles['button-55']} onClick={movePage}>엉엉이 도와주러 가기</button>
            </div>
        </div>
    )
}
