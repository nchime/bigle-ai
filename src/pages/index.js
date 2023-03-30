import Head from 'next/head'
import Link from "next/link";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { List, Icon, Divider, Button, Menu } from "semantic-ui-react";

const inter = Inter({ subsets: ['latin'] })

export default function Index() {
    return (
        <>

            {/* <main className={styles.main}> */}


            <div style={{
                fontSize: "120px",
                height: "100px",
                fontWeight: "bold",
                textAlign: "center",
                marginTop: "300px",
                // border: "5px dashed grey",
            }}>
                <font color="#fab601">B</font>igle <font color="#fab601">AI</font>
            </div>
            <div style={{
                fontSize: "50px",
                marginTop: "100px",
                textAlign: "center",
                // border: "5px dashed grey",
            }}>

                <Link href="/main">
                    {/* <Button content='Next' icon='right arrow' labelPosition='right' /> */}

                    <Button
                        size="massive"
                        color='blue'
                        content='시작하기!'
                        labelPosition='left'
                        icon
                        onClick={() => alert("트위터 계정 인증후 입장합니다.")}
                    >
                        <Icon name='twitter' /> Enterance
                    </Button>

                </Link>

            </div>


            {/* </main> */}
        </>
    )
}


Index.getInitialProps = async (ctx) => {
    const pathname = ctx.pathname;

    return { pathname };
};
