'use client'

import React from 'react';
import styles from "@/app/page.module.css";
import {useRouter} from "next/navigation";

const FirstPage = () => {
    const router = useRouter()
    const movePageDead = () => {
        router.push('/youdied')
    }
    const movePageTwo = () => {
        router.push('/yousurvived')
    }

    return (
        <div className={styles.main_wrap}>
            <div className={styles.main}>
                <div className={styles.text_center}>
                    이빨이 너무 시려
                    <br/>
                    랭! 면 랭! 면 랭! 면 ~
                    <br/>
                    <br/>
                    여자친구의 마음 속에 있는 것은 피양옥 평양냉면. <br/>
                    단백질이 1인분에 무려 32g이나 들어있다고 ... !<br/><br/>
                    그래도 냉면만 먹으면 심심따리인데 .. 🤔<br/><br/><br/>
                    <button className={styles['button-55']} onClick={movePageDead}>지난번에 맛있게 먹은 제육을 곁들일까? 🐷</button><br/><br/>
                    <button className={styles['button-55']} onClick={movePageDead}>집에 있는 닭가슴살을 구워볼까? 🐔</button><br/><br/>
                    <button className={styles['button-55']} onClick={movePageTwo}>32그램이면 그거로 충분한가? 🙊</button><br/><br/>
                </div>
            </div>
        </div>
    );
};

export default FirstPage;
