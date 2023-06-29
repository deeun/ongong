'use client'

import React from 'react';
import styles from "@/app/page.module.css";
import {useRouter} from "next/navigation";

const FirstPage = () => {
    const router = useRouter()
    const movePage = () => {
        router.push('/first')
    }
    const movePageTwo = () => {
        router.push('/youdied')
    }
    return (
        <div className={styles.main_wrap}>
            <div className={styles.main}>
                <div className={styles.text_center}>
                    매운맛 지존 엉엉이의 여자친구 <br/>
                    엽떡 제일 매운 맛 뚝딱도 쌉가능이지
                    <br/>
                    <br/>
                    근데 나는 매운데 괜찮을까? 🥵
                    <br/>
                    <br/>
                    <br/>
                    <button className={styles['button-55']} onClick={movePageTwo}>언제나처럼 심플하게 떡반 오뎅반으로 진행 !</button><br/><br/>
                    <button className={styles['button-55']} onClick={movePageTwo}>엽떡말고 신전 못먹은지가 좀 됐는데 ...</button><br/><br/>
                    <button className={styles['button-55']} onClick={movePageTwo}>탄수만 가득하니까 내가 치킨을 시킨다고 해볼까 ?</button><br/><br/>
                    <button className={styles['button-55']} onClick={movePage}>역시 다른 메뉴가 좋겠어</button>
                </div>
            </div>
        </div>
    );
};

export default FirstPage;
