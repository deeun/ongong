'use client'

import React from 'react';
import styles from "@/app/page.module.css";
import {useRouter} from "next/navigation";

const FirstPage = () => {

    return (
        <div className={styles.main_wrap}>
            <div className={styles.main}>
                <div className={styles.text_center}>
                    🎉 축 하 합 니 다 🎉
                    <br/>
                    <br/>
                    엉엉이 여자친구의 마음을 읽어서 <br/>
                    엉엉이를 올바른 길로 인도하는데 성공 ! <br/>
                    <br/>
                    <br/>
                    <br/>
                    하지만 방심하지마세요.<br/>
                    엉엉이 여자친구 마음은 아 ~~~ 무도 <br/>
                    몰라! 알 수가 없어 ~ 🤯
                    <br/>
                    <br/>
                    <br/>
                    엉엉이에게 평양냉면을 먹이고 싶다면 이 페이지를 캡쳐해서 <br/>
                    엉엉이 여자친구에게 제출하세요 ! <br/>
                    그럼 20000 👋🏻
                </div>
            </div>
        </div>
    );
};

export default FirstPage;
