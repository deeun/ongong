'use client'

import React from 'react';
import styles from "@/app/page.module.css";
import {useRouter} from "next/navigation";

const FirstPage = () => {
    const router = useRouter()
    const movePageOne = () => {
        router.push('/pizza')
    }
    const movePageTwo = () => {
        router.push('/rang')
    }
    const movePageThree = () => {
        router.push('/yup')
    }
    return (
        <div className={styles.main_wrap}>
            <div className={styles.main}>
                <div className={styles.text_center}>
                    여자친구에게 충성을 맹세한 윤엉엉 ... <br/><br/>
                    하늘보다 높은 곳에 여자친구가 지정해준 메뉴가 무려 3개!! <br/>
                    무슨 메뉴를 선택해야할까? <br/>
                    <br/>
                    <br/>
                    <br/>
                    <button className={styles['button-55']} onClick={movePageOne}>작년 8월 이후로 배달해먹은 적 없는 피자 ?🍕</button><br/><br/>
                    <button className={styles['button-55']} onClick={movePageTwo}>간간히 먹고싶다고 얘기하던 평양냉면 ? 🍲</button><br/><br/>
                    <button className={styles['button-55']} onClick={movePageThree}>지금은 멀어졌지만 여전히 마음 한구석을 차지하고있는 엽떡 ? 🔥</button>
                </div>
            </div>
        </div>
    );
};

export default FirstPage;
