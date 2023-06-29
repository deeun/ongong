'use client'

import React from 'react';
import styles from "@/app/page.module.css";
import {useRouter} from "next/navigation";

const FirstPage = () => {
    const router = useRouter()
    const movePage = () => {
        router.push('/first')
    }

    return (
        <div className={styles.main_wrap}>
            <div className={styles.main}>
                <div className={styles.text_center}>
                    여자친구의 마음을 헤아리지 못한 죄 !!! 😡
                    <br/>
                    욕심을 부린 죄 !!! 😡
                    <br/>
                    <br/>
                    배고파서 삐룩삐룩할 엉엉이가 불쌍하니까 <br/>
                    턱.별.히. 기회를 다시 드리겠습니다. <br/>
                    신중하게 생각하십시오.
                    <br/>
                    <br/>
                    <br/>
                    <button className={styles['button-55']} onClick={movePage}>스리슬쩍 처음으로 돌아가기</button>
                </div>
            </div>
        </div>
    );
};

export default FirstPage;
