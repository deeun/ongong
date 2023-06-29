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
                    피자라면 한판도 뚝딱 할 수 있는 멋진 엉엉이의 여자친구.. <br/>
                    그녀는 오늘 무슨 피자 기분일까 🤔
                    <br/>
                    <br/>
                    <br/>
                    <button className={styles['button-55']} onClick={movePageTwo}>클래식한 맛이 있는 도미노나 피자헛 ?</button><br/><br/>
                    <button className={styles['button-55']} onClick={movePageTwo}>미국맛 계열의 파파이스나 디트로이트?</button><br/><br/>
                    <button className={styles['button-55']} onClick={movePageTwo}>아냐 알볼로 피자가 좋다고 했던 것 같은데 ...</button><br/><br/>
                    <button className={styles['button-55']} onClick={movePageTwo}>무슨 피자가 핫한지 한번 볼까?</button><br/><br/>
                    <button className={styles['button-55']} onClick={movePage}>일요일에 햄버거면 다른 메뉴가 좋나...</button>
                </div>
            </div>
        </div>
    );
};

export default FirstPage;
